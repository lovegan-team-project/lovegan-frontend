import { createAction, handleActions } from "redux-actions";

const SET_PREVIOUS_URL = "user/SET_PREVIOUS_URL";
const SET_USER = "user/SET_USER";
const SET_USER_STATUS = "user/SET_USER_STATUS";

export const setPreviousUrl = createAction(SET_PREVIOUS_URL, (previousUrl) => previousUrl);
export const setUser = createAction(SET_USER, (currentUser) => currentUser);
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);

const InitialValue = {
    currentUser : {},
    isLogin : false,
    previousUrl : ""
}

const user = handleActions({
    [SET_PREVIOUS_URL] : (state = InitialValue, action) => ({...state, previousUrl : action.payload}),
    [SET_USER] : (state = InitialValue, action) => ({...state, currentUser : action.payload}),
    [SET_USER_STATUS] : (state = InitialValue, action) => ({...state, isLogin : action.payload})
}, InitialValue);

export default user;