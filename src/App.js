import React, {Component} from 'react';
import { HashRouter, Router, Route, Switch } from 'react-router-dom'
//import { Router, Route } from 'react-router';
import './App.scss';
import gsap from "gsap/gsap-core";
import jwtDecode from 'jwt-decode';
// Redux
import {connect, Provider} from 'react-redux';
import store from './redux/store';
import {SET_AUTHENTICATED} from './redux/types';
import {logoutUser, getUserData, uploadImage} from './redux/actions/userActions';
import {Offline} from "react-detect-offline";
// Components

import Footer from "./components/layout/Footer";

import AuthRoute from './util/AuthRoute';
// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import business from './pages/businesses';
import user from './pages/user';
import notFound from './pages/notFound';
import profile, {userProfile} from './pages/userProfile';
import ourCommitment from './pages/ourPromise';
import guideline from './pages/guideline';
import FAQ from './pages/FAQ';
import category from './pages/categories';
import allBusiness from './pages/category';
import howItWorks from './pages/howItWorks';
import CreateReview from './pages/createReview';
import About from './pages/about';
import Search from './pages/search';
import Contact from './pages/contact-us'
import ResetPass from "./pages/resetPass";
import CompareBusiness from "./pages/compareBusiness";
import CompareCategory from "./pages/compareCategory";
import AskALawyer from "./pages/askALawyer";
import AdvertInquire from "./pages/advertInquire";
import ReviewPage from "./pages/ReviewPage";
import CancelProfile from "./pages/cancelProfile";
import ComparePage from "./pages/compare";
import test from "./pages/test";
import PayAskALawyer from "./pages/PayLawyer";
import HowToCreateReview from "./pages/HowTo/CreateAReview";
import HowLeaveAReview from "./pages/HowTo/LeaveAReview";
import Videos from "./pages/Videos";
import BlogPage from "./pages/blog";
import BlogPost from "./pages/BlogPost";
import OurStory from "./pages/ourStory";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacyPolicy";


import axios from 'axios';

import AuthRouteUser from "./util/AuthRouteUser";

import ScrollToTop from "./components/ScrollToTop";
import PropTypes from "prop-types";
import Toast from "./components/Toast";
import Ham from "./components/layout/Ham";


axios.defaults.baseURL = "https://europe-west1-react-test-95548.cloudfunctions.net/api";


const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    //token expires in 1 month  + (30 * 86400 * 1000)
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logoutUser());
        window.location.href = '/';

    } else {
        store.dispatch({type: SET_AUTHENTICATED});
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false,

        }
    }

    componentDidMount() {

        this.setState({
            menu: false
        });

    }


    render() {


        return (


            <HashRouter>
                <Ham/>

                <div className="toastWrap">

                    <Offline>
                        <Toast body="Please check your internet connection"/>
                    </Offline>
                </div>

                <ScrollToTop/>
                <div className="space">

                </div>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={home}/>
                        <AuthRoute exact path="/login" component={login}/>
                        <AuthRoute exact path="/signup" component={signup}/>
                        <Route exact path="/businesses/:business" component={business}/>
                        <Route exact path="/user/:handle" component={user}/>
                        <AuthRoute exact path="/resetpass" component={ResetPass}/>
                        {/* <Route
                  exact
                  path="/users/:handle/scream/:screamId"
                  component={user}
                />*/}
                        <AuthRouteUser exact path="/userProfile" component={profile}/>
                        {/*   <Route exact path="/userProfile" component={profile}/>*/}
                        <Route exact path="/ourCommitment" component={ourCommitment}/>
                        <Route exact path="/search/:business" component={Search}/>
                        <Route exact path="/guideline" component={guideline}/>
                        <Route exact path="/faq" component={FAQ}/>
                        <Route exact path="/categories" component={category}/>
                        <Route exact path="/allBusiness/:category" component={allBusiness}/>
                        <Route exact path="/howItWorks" component={howItWorks}/>
                        <Route exact path="/createReview" component={CreateReview}/>
                        <Route exact path="/about-us" component={About}/>
                        <Route exact path="/contact-us" component={Contact}/>
                        <AuthRouteUser exact path="/askALawyer" component={AskALawyer}/>
                        <AuthRouteUser exact path="/payAskALawyer" component={PayAskALawyer}/>
                        <Route exact path="/compare-category" component={CompareCategory}/>
                        <Route exact path="/compareBusiness/:category" component={CompareBusiness}/>
                        <Route exact path="/compare" component={ComparePage}/>
                        <Route exact path="/terms" component={Terms}/>
                        <Route exact path="/privacypolicy" component={PrivacyPolicy}/>
                        <Route exact path="/advert" component={AdvertInquire}/>
                        <Route exact path="/howToCreateReview" component={HowToCreateReview}/>
                        <Route exact path="/howtoleavereview" component={HowLeaveAReview}/>
                        <Route exact path="/test/:business" component={test}/>
                        <AuthRouteUser exact path="/cancelmembership" component={CancelProfile}/>
                        <Route exact path="/review/:reviewId" component={ReviewPage}/>
                        <Route exact path="/post/:postId" component={BlogPost}/>
                        <Route exact path="/videosGallery" component={Videos}/> />
                        <Route exact path="/OurStory" component={OurStory}/> />
                        <Route exact path="/blog" component={BlogPage}/> />


                        <Route path="*" component={notFound}/>
                    </Switch>
                </div>
                <Footer/>
            </HashRouter>


        );

    }
}


const mapStateToProps = (state) => ({
    user: state.user,
    notifications: state.notifications,

});


App.propTypes = {
    user: PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(App);
