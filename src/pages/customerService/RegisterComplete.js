import React, { useEffect, useState } from "react";
import S from "./style";
import { Link, useNavigate, useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";

const RegisterComplete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 전체 데이터를 관리
  const [quest, setQuest] = useState(null);

  // Edit 상태 관리
  const [isEdit, setIsEdit] = useState(false);

  // 제목과 내용 관리(useInput 훅폼)
  // 변수를 변경해서 사용할 수 있음
  // value,onChangeValue,setValue라는 반환값을 구조 분해 할당을 통해 title,onChangeValue,setTitle로 가져올 수 있음
  const [title, onChangeTitle, setTitle] = useInput("");
  const [contents, onChangeContents, setContents] = useInput("");

  // 수정 상태 관리 함수
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // 데이터 가져오기
  useEffect(() => {
    const getQuest = async () => {
      try {
        const response = await fetch("http://localhost:8000/customer/quest");
        if (!response.ok) {
          throw new Error("네트워크 응답이 실패했습니다.");
        }
        const data = await response.json();

        // id에 맞는 데이터를 찾아서 설정
        const selectedQuest = data.find((item) => item.no === parseInt(id));
        if (selectedQuest) {

          // 각각의 상태변수에 가져온 데이터를 넣음 
          setQuest(selectedQuest);

          // useInput 훅관리 변수에도 넣어줌(업데이트)
          setTitle(selectedQuest.title);
          setContents(selectedQuest.contents);
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    getQuest();
  }, [id]);

  // 수정 요청
  const handleIsUpdate = async () => {
    try {
      // 수정된 데이터를 보내줌
      const response = await fetch("http://localhost:8000/customer/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          no: quest.no,
          title,
          contents,
        }),
      });

      if (!response.ok) {
        throw new Error("수정 요청 실패");
      }

      setIsEdit(false);

      // 응답이 제대로 갔으면!
      // 이전 값을 가져와서, 수정된 값을 가져와 데이터에 업데이트된 값을 저장해준다.
      setQuest((prev) => ({
        ...prev, //quest에 있는 모든 값
        title,
        contents,
      }));
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  // 삭제 요청
  const handleIsRemove = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const response = await fetch("http://localhost:8000/customer/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            no: quest.no,
          }),
        });

        if (!response.ok) {
          throw new Error("삭제 요청 실패");
        }

        navigate("/customerService/quest");
      } catch (error) {
        console.error("삭제 요청 오류:", error);
      }
    }
  };

  return (
    <div>
      <S.NoticeWrapper>
        <h1>1:1 문의</h1>
        <p>궁금하신 점을 마음껏 물어보세요.</p>

        <S.NTable>
          <S.NTbody>
            {quest && (
              <>
                <S.NTr>
                  <S.NTd>번호</S.NTd>
                  <S.NTd>{quest.no}</S.NTd>
                </S.NTr>
                <S.NTr>
                  <S.NTd>제목</S.NTd>
                  {isEdit ? (
                    <S.NTd>
                      <input
                        style={{ width: "100%" }}
                        className="update_title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={onChangeTitle}
                      />
                    </S.NTd>
                  ) : (
                    <S.NTd>{quest.title}</S.NTd>
                  )}
                </S.NTr>
                <S.NTr>
                  <S.NTd>작성자</S.NTd>
                  <S.NTd>{quest.writer}</S.NTd>
                </S.NTr>
                <S.NTr>
                  <S.NTd>작성일</S.NTd>
                  <S.NTd>{quest.date}</S.NTd>
                </S.NTr>
                <S.NTr>
                  {isEdit ? (
                    <S.NTd colSpan="2">
                      <textarea
                        className="update_contents"
                        name="contents"
                        style={{
                          width: "100%",
                          height: "550px",
                          marginTop: "20px",
                          padding: "10px",
                          border: "none",
                        }}
                        value={contents}
                        onChange={onChangeContents}
                      />
                    </S.NTd>
                  ) : (
                    <S.NTd colSpan="2">{quest.contents}</S.NTd>
                  )}
                </S.NTr>
              </>
            )}
          </S.NTbody>
        </S.NTable>

        {isEdit ? (
          <S.BDiv>
            <S.NButton
              onClick={handleIsUpdate}
              className="modi"
              style={{ float: "left" }}
            >
              확인
            </S.NButton>
            <S.NButton
              onClick={handleIsEdit}
              className="del"
              style={{ float: "left", marginLeft: "10px" }}
            >
              취소
            </S.NButton>
            <Link to="/customerService/quest">
              <S.NButton>목록</S.NButton>
            </Link>
          </S.BDiv>
        ) : (
          <S.BDiv>
            <S.NButton
              onClick={handleIsEdit}
              className="modi"
              style={{ float: "left" }}
            >
              수정
            </S.NButton>
            <S.NButton
              onClick={handleIsRemove}
              className="del"
              style={{ float: "left", marginLeft: "10px" }}
            >
              삭제
            </S.NButton>
            <Link to="/customerService/quest">
              <S.NButton>목록</S.NButton>
            </Link>
          </S.BDiv>
        )}
      </S.NoticeWrapper>
    </div>
  );
};

export default RegisterComplete;
