import {
    SET_SCREAMS,
    SET_TOP_REVIEWS,
    SET_BUSINESSES,
    SET_COMPARE_BUSINESSES,
    LOADING_DATA,
    SET_SEARCH_VALUE,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    DELETE_SCREAM,
    SET_ERRORS,
    POST_SCREAM,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_SCREAM,
    SET_ALL_BUSINESS,
    SET_REVIEWS,
    SET_VIDEOS,
    STOP_LOADING_UI,
    SUBMIT_COMMENT,
    SET_BLOG_POST,
    SET_BUSINESS, LOADING_USER,
    SET_SINGLE_POST,
    CREATE_REVIEW,
    SET_FIVESTAR_REVIEWS, SET_FOURSTAR_REVIEWS, FOLLOW, UN_FOLLOW, SET_OVERAL_RATING
} from '../types';
import axios from 'axios';


// Get all screams
export const getTopReviews = () => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get('/topReviews')
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SET_TOP_REVIEWS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_TOP_REVIEWS,
                payload: []
            });
        });
};

export const testFun = () => async (dispatch) => {
    dispatch({type: LOADING_DATA})
     await axios.get('')
        .then(() => console.log('success'))
        .catch((err) => console.log('error'))
}

// Get all screams
export const getAllReviews = () => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get('/reviews')
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SET_REVIEWS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_SCREAMS,
                payload: []
            });
        });
};
// Get all Business
export const getAllBusiness = () => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get('/allBusiness')
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SET_ALL_BUSINESS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_ALL_BUSINESS,
                payload: []
            });
        });
};


export const getFiveStarReviews = () => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get('/fiveStarReviews')
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SET_FIVESTAR_REVIEWS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_FIVESTAR_REVIEWS,
                payload: []
            });
        });
};

export const getFourStarReviews = () => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get('/fourStarReviews')
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: SET_FOURSTAR_REVIEWS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_FOURSTAR_REVIEWS,
                payload: []
            });
        });
};

export const compareVendors = (businesses) => (dispatch) => {
    dispatch({type: LOADING_DATA});

    axios.post('/compare', businesses)
        .then((res) => {
            dispatch({
                type: SET_COMPARE_BUSINESSES,
                payload: res.data
            });
            dispatch(clearErrors())
        }).catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: []
        });
    })
};


export const getReview = (reviewId) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios
        .get(`/review/${reviewId}`)
        .then((res) => {
            dispatch({
                type: SET_SCREAM,
                payload: res.data
            });
            dispatch({type: STOP_LOADING_UI});
        })
        .catch((err) => console.log(err));
};

export const blogPost = () => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios
        .get('/blog')
        .then((res) => {
            dispatch({
                type: SET_BLOG_POST,
                payload: res.data
            });
            dispatch({type: STOP_LOADING_UI});
        })
        .catch((err) => console.log(err));
};

export const getSinglePost = (postId) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.get(`/getSingleBlog/${postId}`)
        .then((res) => {
            dispatch({
                type: SET_SINGLE_POST,
                payload: res.data
            });
            dispatch({type: STOP_LOADING_UI});
        }).catch((err) => console.log(err));
};

export const getVideos = () => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios
        .get('/videos')
        .then((res) => {
            dispatch({
                type: SET_VIDEOS,
                payload: res.data
            });
            dispatch({type: STOP_LOADING_UI});
        })
        .catch((err) => console.log(err));
};


export const getBusinesses = (category) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios
        .get(`/allBusiness/${category}`)
        .then((res) => {
            dispatch({
                type: SET_BUSINESSES,
                payload: res.data
            });
            dispatch({type: CLEAR_ERRORS});
            dispatch(clearErrors());
            dispatch({type: STOP_LOADING_UI});
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};


// Post a review
export const postScream = (newScream) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios
        .post('/postReview', newScream)
        .then((res) => {
            dispatch({
                type: SET_SCREAM,
                payload: res.data,
            });
            dispatch(clearErrors());
            dispatch({type: CLEAR_ERRORS});
            window.location.reload();

        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
    // .catch((err) => console.log(err));
};


//create review
export const createReview = (newBizInfo) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/createReview', newBizInfo)
        .then((res) => {
            dispatch({
                type: CREATE_REVIEW,
                payload: res.data,
            });
            dispatch(clearErrors());
            dispatch({type: CLEAR_ERRORS});
            window.location.reload();
        })
        .catch((err) => console.log(err))

};


// Like a scream
export const likeScream = (screamId) => (dispatch) => {
    axios
        .get(`/scream/${screamId}/like`)
        .then((res) => {
            dispatch({
                type: LIKE_SCREAM,
                payload: res.data
            });
        })
        .catch((err) => console.log(err));
};
// Unlike a scream
export const unlikeScream = (screamId) => (dispatch) => {
    axios
        .get(`/scream/${screamId}/unlike`)
        .then((res) => {
            dispatch({
                type: UNLIKE_SCREAM,
                payload: res.data
            });
        })
        .catch((err) => console.log(err));
};


//get all business in a category
export const getBizCategory = (category) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.get(`/compareBusiness/${category}`)
        .then((res) => {
            dispatch({
                type: SET_BUSINESSES,
                payload: res.data
            });
            dispatch(clearErrors());
            dispatch({type: CLEAR_ERRORS});
        }).catch((err) => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        });
    });
};


// Submit a comment
export const submitComment = (screamId, commentData) => (dispatch) => {
    axios
        .post(`/scream/${screamId}/comment`, commentData)
        .then((res) => {
            dispatch({
                type: SUBMIT_COMMENT,
                payload: res.data
            });
            dispatch(clearErrors());
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
};
export const deleteScream = (screamId) => (dispatch) => {
    axios
        .delete(`/scream/${screamId}`)
        .then(() => {
            dispatch({type: DELETE_SCREAM, payload: screamId});
        })
        .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get(`/user/${userHandle}`)
        .then((res) => {
            dispatch({
                type: SET_SCREAMS,
                payload: res.data.reviews
            });
        })
        .catch(() => {
            dispatch({
                type: SET_SCREAMS,
                payload: null
            });
        });
};

export const searchValue = (searchVal, history) => (dispatch) => {
    dispatch({
        type: SET_SEARCH_VALUE,
        payload: searchVal
    });
    history.push(`/search/${searchVal}`);
};

//get searched data
export const getSearchData = (business) => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios
        .get(`/search/${business}`)
        .then((res) => {
            dispatch(clearErrors());
            dispatch({
                type: SET_BUSINESS,
                payload: res.data
            });

        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        })
};


export const getBusinessData = (business) => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios
        .get(`/businesses/${business}`)
        .then((res) => {
            dispatch({
                type: SET_BUSINESSES,
                payload: res.data
            });
            dispatch(clearErrors())
        })
        .catch(() => {
            dispatch({
                type: SET_SCREAMS,
                payload: null
            });
        });
};


export const followBusiness = (data) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/follow', data)
        .then((res) => {
            dispatch({
                type: FOLLOW,
                payload: res.data
            });
            window.location.reload();
        }).catch((err) => console.log(err))
};

export const unFollowBusiness = (data) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/unfollow', data)
        .then((res) => {
            dispatch({
                type: UN_FOLLOW,
                payload: res.data
            });
            window.location.reload();
        }).catch((err) => console.log(err))
};

export const overallRating = (businessName) => (dispatch) => {
    dispatch({type: LOADING_UI})
    axios.get(`/overallRating/${businessName}`)
        .then((res) => {
            dispatch({
                type: SET_OVERAL_RATING,
                payload: res.data
            })
        }).catch((err) => console.log(err))
}

export const clearErrors = () => (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};

