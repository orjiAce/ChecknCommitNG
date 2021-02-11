import {
  SET_SCREAMS,
  SET_TOP_REVIEWS,
  SET_ALL_BUSINESS,
  SET_REVIEWS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SET_VIDEOS,
  SUBMIT_COMMENT,
  SET_BLOG_POST,
  SET_SINGLE_POST,
  SET_SEARCH_VALUE,
  SET_PASSWORD_RESET,
  CREATE_REVIEW,
  SET_BUSINESS, SET_BUSINESSES, SET_FIVESTAR_REVIEWS, SET_FOURSTAR_REVIEWS, SET_COMPARE_BUSINESSES,SET_OVERAL_RATING
} from '../types';
import businesses from "../../pages/businesses";

const initialState = {
  businessToCompare:[],
  reviews: [],
  overallRating:[],
  allReviews: [],
  fourStarReviews: [],
  fiveStarReviews: [],
  topReviews: [],
  replies:[],
  videos:[],
  passwordReset:[],
  blogs:[],
  review: {},
  blogPost: {},
  gallery:[],
  createReview:[],
  businesses: [],
  allBusiness: [],
  totalBusiness:[],
  searchValue: [],
  loading: false
};

export default function(
    state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_PASSWORD_RESET:
      return {
        ...state,
        passwordReset: action.payload,
        loading: false
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
        loading: false
      };
      case SET_OVERAL_RATING:
      return {
        ...state,
        overallRating: action.payload,
        loading: false
      };
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };
    case SET_SCREAMS:
      return {
        ...state,
        reviews: action.payload,
        loading: false
      };
      case SET_TOP_REVIEWS:
      return {
        ...state,
        topReviews: action.payload,
        loading: false
      };
      case SET_ALL_BUSINESS:
      return {
        ...state,
        totalBusiness: action.payload,
        loading: false
      };
      case SET_REVIEWS:
      return {
        ...state,
        allReviews: action.payload,
        loading: false
      };
      case SET_BLOG_POST:
      return {
        ...state,
        blogs: action.payload,
        loading: false
      };
      case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false
      };
    case SET_FIVESTAR_REVIEWS:
      return {
        ...state,
        fiveStarReviews: action.payload,
       loading: false
      };
      case SET_FOURSTAR_REVIEWS:
      return {
        ...state,
        fourStarReviews: action.payload,
       loading: false
      };
    case SET_BUSINESS:
      return {
        ...state,
        businesses: action.payload,
        loading: false
      };
      case SET_COMPARE_BUSINESSES:
      return {
        ...state,
        businessToCompare: action.payload,
        loading: false
      };
      //for getting all the businesses in a category
      case SET_BUSINESSES:
      return {
        ...state,
        allBusiness: action.payload,
        loading: false
      };
    case SET_SCREAM:
      return {
        ...state,
        review: action.payload
      };
      case SET_SINGLE_POST:
      return {
        ...state,
        blogPost: action.payload,
        loading: false
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.reviews.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
      }
      return {
        ...state
      };
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments]
        }
      };
    default:
      return state;
  }
}
