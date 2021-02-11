import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    MARK_NOTIFICATIONS_READ, SET_CANCELMEMBERSHIP, FOLLOW, UN_FOLLOW,SET_PASSWORD_RESET
} from '../types';
import axios from 'axios';
import {clearErrors, getBusinessData} from "./dataActions";

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});

    axios
        .post('/login', userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token);
            dispatch(getUserData());
            dispatch({type: CLEAR_ERRORS});
            history.push('/userProfile');
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};

export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios
        .post('/signup', newUserData)
        .then((res) => {
            console.log(res.data);
            console.log(res.data.errors);
            setAuthorizationHeader(res.data.token);
            dispatch(getUserData());
            dispatch({type: CLEAR_ERRORS});
            history.push('/userProfile');
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};





export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({type: SET_UNAUTHENTICATED});

};




export const getUserData = () => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios
        .get('/user')
        .then((res) => {
            dispatch({
                type: SET_USER,
                payload: res.data
            });
        })
        .catch((err) => console.log(err));
};

export const cancelUserMembership = (history) => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios
        .post('/cancelmembership')
        .then((res) => {
           /* dispatch({
                type: SET_CANCELMEMBERSHIP,
                payload: res.data
            });*/
            dispatch(clearErrors());
            dispatch(logoutUser());
            history.push('/');
            dispatch({type: CLEAR_ERRORS});
        })
        .catch((err) => console.log(err));
};

export const resetPassword = (userEmail) => (dispatch) =>{
    dispatch({type: LOADING_USER});
    axios
        .post('/resetPassword', userEmail)
        .then((res) =>{
            dispatch({
                type: SET_ERRORS,
                payload: res.data
            });

        }).catch((err) =>{
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    })
};



export const updatePass = (userEmail) => (dispatch) =>{
    dispatch({type: LOADING_USER});
    axios
        .post('/resetPassword', userEmail)
        .then((res) =>{
            dispatch({
                type: SET_PASSWORD_RESET,
                payload: res.data
            });
           // dispatch({type: CLEAR_ERRORS});
        }).catch((err) => console.log(err));
};

export const uploadImage = (formData) => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios
        .post('/user/image', formData)
        .then(() => {
            dispatch(getUserData());
        })
        .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios
        .post('/updateUser', userDetails)
        .then(() => {
            dispatch(getUserData());
        })
        .catch((err) => console.log(err));
// .catch((err) => {
//         dispatch({
//             type: SET_ERRORS,
//             payload: err.response.data
//         });
//     });
};

export const markNotificationsRead = (notificationIds) => (dispatch) => {
    axios
        .post('/notifications', notificationIds)
        .then((res) => {
            dispatch({
                type: MARK_NOTIFICATIONS_READ
            });
        })
        .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};
