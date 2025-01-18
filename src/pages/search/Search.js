import React, { useEffect, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import FoodComponent from './FoodComponent';
import OtherComponent from './OtherComponent';
import CommunityComponent from './CommunityComponent';
import RestaurantComponent from './RestaurantComponent';
import { useLocation } from 'react-router-dom';


const Search = () => {
    // 화면 랜더링시 맨위로 이동
    window.scrollTo(0,0);

    const location = useLocation();

    // 검색 파라미터 생성
    const queryParams = new URLSearchParams(location.search);
    // query(키) 의 값을 들고옴
    const searchQuery = queryParams.get('query');

    // 가져온 데이터 기본값
    const [foodData,setFoodData] = useState([]);
    // const [otherData,setOtherData] = useState([]);
    const [communityData,setCommunityData] = useState([]);
    const [restaurantData,setRestaurantData] = useState([]);

    // useEffect(()=> {
    //     setSearchData(searchQuery)
    // },[]);

    // console.log(searchData);

    // food 데이터 가져오기 로직
    useEffect(()=>{
        const getFood = async() => {
            try{
                const response = await fetch("http://localhost:8000/product/get")
                // console.log(response);
                const data = await response.json();
                
                const filteredData = data.filter((item) => item.title.includes(searchQuery));

                // console.log(filteredData);

                setFoodData(filteredData);
            }
            catch(error){
                console.error("API호출 오류",error);
            }
        }
        getFood()
    },[searchQuery]); 

    // other데이터 가져오기 로직
    // useEffect(()=>{
    //     const getOther = () => {
    //         try{

    //         }
    //         catch(error){
    //             console.error("error",error)
    //         }
    //     }
    //     getOther();

    // },[searchQuery]);

    // community 데이터 가져오기 로직
    useEffect(()=>{
        const getCommunity = async() => {
            try{
                const response = await fetch("http://localhost:8000/community/getPost");
                // console.log(response);
                const data = await response.json();
                // console.log(data);
                const filteredData = data.filter((item) => item.title.includes(searchQuery));
                // console.log(filteredData);
                setCommunityData(filteredData);
                }
            catch(error){
                console.error("error",error);
            }
            
        }
        getCommunity()
    },[searchQuery]);

    // restaurant 데이터 가져오기 로직
    useEffect(()=>{
        const getRestaurant = async() => {
            try{
                const response = await fetch("http://localhost:8000/restaurant/get");
                console.log(response);
                const data = await response.json();
                console.log(data);
                const filteredData = data.filter((item) => item.name.includes(searchQuery));
                setRestaurantData(filteredData);
            }
            catch(error){
                console.error("error",error);
            }
        }
        getRestaurant();
    },[searchQuery]);
   


    return (
        (foodData.length && /* otherData.length &&  */communityData.length && restaurantData.length === 0 ?
        (<S.noWrapper className='noSearch'>
            <h4>'{searchQuery}'에 대한 검색 결과가 없습니다.</h4>
        </S.noWrapper>)
        : ( 
            <S.Wrapper>
                <h4>'{searchQuery}'에 대한 검색 결과</h4>
                <hr className='line' />
                {/* food 검색결과 */}
                <S.Food>
                    <S.Title>
                        <h5>FOOD <span>{foodData.length}</span></h5>
                        {foodData.length > 3 && (<Link to="/product">더보기</Link>)}
                    </S.Title>
                    <div style={{display:"flex", gap: "19px"}}>
                        <FoodComponent foodData={foodData} />
                    </div>
                </S.Food>
                <hr className='line' />
    
                {/* other 검색결과 */}
                <div className="other"></div>
                    <S.Title>
                        <h5>OTHER <span>{/* {otherData.length} */}</span></h5>
                        <Link to="/product">더보기</Link>
                    </S.Title>
                    <div style={{display:"flex", gap: "19px"}}>
                        <OtherComponent /* otherData={otherData}  *//>
                    </div>
                <hr className='line' />
    
                {/* community 검색결과 */}
                <div className="community">
                    <S.Title>
                        <h5>COMMUNITY <span>{communityData.length}</span></h5>
                       {communityData.length > 2 && (<Link to="/community">더보기</Link>)}
                    </S.Title>
                    <div style={{display: "flex",gap: "19px"}}>
                        <CommunityComponent communityData={communityData} />
                    </div>
                </div>
                <hr className='line' />
    
                {/* restaurant 검색결과 */}
                <div className="restaurant">
                    <S.Title>
                        <h5>RESTAURANT <span>{restaurantData.length}</span></h5>
                         {restaurantData.length > 2 && (<Link to="/restaurant">더보기</Link>)}
                    </S.Title>
                    <div style={{display:"flex",gap: "19px"}}>
                        <RestaurantComponent restaurantData={restaurantData} />
                    </div>
                </div>
            </S.Wrapper>)
    )
    );
};

export default Search;
