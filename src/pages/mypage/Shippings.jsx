import React, { useEffect, useState } from 'react';
import S from './style.js';
import SpS from './shippingStyle.js';
import shipping_plus from './icons/shipping-plus.svg';
import CheckCircleButton from '../../components/checkCircleBtn/CheckCircleButton.jsx';
import write from './icons/write.svg';
import DaumPostcode from 'react-daum-postcode';
import { useSelector } from 'react-redux';

const AddressSearch = ({ onComplete, onClose }) => {
    const themeObj = {
        bgColor: '#FFFFFF',
        pageBgColor: '#FFFFFF',
        postcodeTextColor: '#03A63C',
        emphTextColor: '#333333',
    };

    const postCodeStyle = {
        width: '100%',
        height: '480px',
    };

    return (
        <DaumPostcode
            theme={themeObj}
            style={postCodeStyle}
            onComplete={onComplete}
            onClose={onClose}
        />
    );
};

const Shippings = () => {
    const [showModal, setShowModal] = useState(false);
    const [zonecode, setZonecode] = useState('');
    const [address, setAddress] = useState('');
    const [detailedAddress, setDetailedAddress] = useState('');
    const [isAddressSearchOpen, setIsAddressSearchOpen] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [defaultShipping, setDefaultShipping] = useState(false);
    const [shippingList, setShippingList] = useState([]); // 배송지 목록 상태 추가
    const [isShippingListUpdate, setIsShippingListUpdate] = useState(false);
    
    const currentUser = useSelector((state) => state.user.currentUser);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setZonecode('');
        setAddress('');
        setDetailedAddress('');
        setName('');
        setPhoneNumber('');
        setDefaultShipping(false);  // 기본 배송지 설정 상태 초기화
    }

    const handleAddressSearchToggle = () => setIsAddressSearchOpen((prev) => !prev);

    const handleAddressComplete = (data) => {
        const { address, zonecode } = data;
        setZonecode(zonecode);
        setAddress(address);
        setIsAddressSearchOpen(false);
    };

    const handleInputChange = (event) => {
        setDetailedAddress(event.target.value);
    };

    const handleDefaultShippingChange = () => {
        setDefaultShipping((prev) => !prev);
    };

    const getShippingList = async (email) => {
        try {
            // console.log("getShippingList: " + email);
            const response = await fetch(`http://localhost:8000/shipping/list`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }), // 이메일을 body에 포함
            });

            // 응답 상태가 성공적인 경우에만 JSON 파싱
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.success) {
                    setShippingList(data.shippingAddresses); // 배송지 목록 상태 업데이트
                } else {
                    alert(data.message);
                }
            }
        } catch (error) {
            console.error("Error fetching shipping list:", error);
            alert(`배송지 목록을 불러오는 데 오류가 발생했습니다. (${error.message})`);
        }
    };

    useEffect(() => {
        if (currentUser && currentUser.email) {
            // console.log(currentUser.email);
            getShippingList(currentUser.email);
        } else {
            console.log('No current user data available');
        }
    }, [currentUser, isShippingListUpdate]);  // currentUser가 변경될 때마다 실행되도록 의존성 추가

    const onSubmit = async () => {
        const data = {
            email: currentUser.email,  // 현재 사용자 이메일
            name,
            phoneNumber,
            zonecode,
            addressLine1: address,
            addressLine2: detailedAddress,
            isDefaultShipping: defaultShipping,
        };

        await fetch("http://localhost:8000/shipping/register", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({data})
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if(res.registerSuccess){
                    alert(res.message);
                    handleCloseModal();
                    getShippingList(currentUser.email);
                }
                else{
                    alert(res.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("배송지 추가 중 오류가 발생했습니다.");
            });
        
    };

    return (
        <>
            <S.ContentTitle>배송지 관리</S.ContentTitle>
            <SpS.shippingPlusWrapper onClick={handleOpenModal}>
                <img src={shipping_plus} alt="추가 버튼" />
                <span>배송지 추가</span>
            </SpS.shippingPlusWrapper>

            {showModal && (
                <SpS.ModalOverlay>
                    <SpS.ModalContent>
                        <h4>배송지 추가</h4>
                        <div className='inputWrapper'>
                            <label>받으실 분</label>
                            <input 
                                type="text" 
                                placeholder='성함' 
                                name={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='inputWrapper'>
                            <label>휴대폰</label>
                            <input
                                type="text"
                                placeholder="전화번호 - 없이 입력"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className='addressWrapper'>
                            <p>주소</p>
                            <div className='addressInputWrapper'>
                                <div>
                                    <input 
                                        type="text" 
                                        value={zonecode} 
                                        placeholder='우편번호' 
                                        name='zonecode' 
                                        id='zonecode'
                                        readOnly
                                    />
                                    <button type="button" onClick={handleAddressSearchToggle}>
                                        주소 찾기
                                    </button>
                                </div>
                                <input type="text" value={address} placeholder='주소' name='addressLine1' id='addressLine1' readOnly/>
                                <input
                                    type='text'
                                    value={detailedAddress}
                                    onChange={handleInputChange}
                                    placeholder="상세 주소 입력"
                                    name='addressLine2'
                                    id='addressLine2'
                                />
                            </div>

                            {isAddressSearchOpen && (
                                <AddressSearch
                                    onComplete={handleAddressComplete}
                                    onClose={() => setIsAddressSearchOpen(false)}
                                />
                            )}
                        </div>
                        
                        <div className='checkboxWrapper'>
                            <input
                                type="checkbox"
                                checked={defaultShipping}
                                onChange={handleDefaultShippingChange}
                                id='defaultShipping'
                            />
                            <label htmlFor="defaultShipping">기본 배송지로 설정</label>
                        </div>
                        <button onClick={handleCloseModal}>취소</button>
                        <button onClick={onSubmit}>저장</button>
                    </SpS.ModalContent>
                </SpS.ModalOverlay>
            )}

            <SpS.ShippingHeader style={{ margin: '0px' }}>
                <div></div>
                <div>배송지명</div>
                <div>주소</div>
                <div></div>
                <div></div>
            </SpS.ShippingHeader>
            {shippingList.length === 0 ? (
                <SpS.ShippingData>
                    <div>배송지 목록이 없습니다.</div>
                </SpS.ShippingData>
            ) : (
                shippingList.map((shipping, index) => (
                    <SpS.ShippingData key={index}>
                        <div><CheckCircleButton /></div>
                        <div>{shipping.name}</div>
                        <div>{shipping.addressLine1} {shipping.addressLine2}</div>
                        <div>{shipping.isDefaultShipping && <div className='default'>기본 배송지</div>}</div>
                        <div><img src={write} alt="배송지 입력 버튼" /></div>
                    </SpS.ShippingData>
                ))
            )}
        </>
    );
};

export default Shippings;
