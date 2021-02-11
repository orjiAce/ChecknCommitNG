import {
  SET_USER,
  SET_SCREAMS,
  SET_CANCELMEMBERSHIP,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  MARK_NOTIFICATIONS_READ, SET_SCREAM
} from '../types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  gallery:[],
  reviews: [],
  fourStarReviews: [],
  replies: [],
  fiveStarReviews: [],
  review: {},
  notifications: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        reviews: action.payload,
        gallery: action.payload,
        loading: false,
        ...action.payload
      };
    case SET_CANCELMEMBERSHIP:
      return {
        authenticated: false,
        loading: false,
       ...action.payload,
    };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LIKE_SCREAM:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            reviewId: action.payload.reviewId
          }
        ]
      };
    case UNLIKE_SCREAM:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.reviewId !== action.payload.reviewId
        )
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    default:
      return state;
  }
}
