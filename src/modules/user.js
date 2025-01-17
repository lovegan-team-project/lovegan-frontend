import { createAction, handleActions } from "redux-actions";

// 유저에 대한 타입 생성 
const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER";
const SET_USER_STATUS = "user/SET_USER_STATUS";
const SET_SIGNUP_USER = "user/SET_SIGNUP_USER";

// 액션을 생성 
export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl);
export const setUser = createAction(SET_USER, (currentUser) => currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);
export const setSignUpUser = createAction(SET_SIGNUP_USER, (signUpUser) => signUpUser)

const InitialValue = {
    currentUser : {},
    isLogin : false,
    previousUrl : "",
    signUpUser : {}
}

// 리듀서에서 각각의 타입 분리 
const user = handleActions({
    // 각각의 타입을 state, action에서 받음 state에는 초기값 넣어둠 
    // 기존에 있는 state 값을 받아오고 previousUrl은 action에서 payload 값으로 받음 
    [SET_PREVIOUS_URL] : (state = InitialValue, action) => ({...state, previousUrl : action.payload}),
    [SET_USER] : (state = InitialValue, action) => ({...state, currentUser : action.payload}),
    [SET_USER_STATUS] : (state = InitialValue, action) => ({...state, isLogin : action.payload}),
    [SET_SIGNUP_USER] : (state = InitialValue, action) => ({...state, signUpUser : action.payload})
}, InitialValue);

export default user;