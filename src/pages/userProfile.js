import React, {Component} from 'react';


import '../style/mobile/profileMobile.scss';

import {logoutUser, uploadImage, getUserData, cancelUserMembership} from "../redux/actions/userActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBell, faBriefcase,
    faCamera, faComment,
    faEnvelope, faEnvelopeOpen,
    faMapMarker,
    faPenAlt,
    faPhone, faPowerOff,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import Scream from "../components/scream/Review";


import Notifications from "../components/Notifications";
import dayjs from "dayjs";
import EditDetails from "../components/profile/EditDetails";
import ProfileSkeleton from "../components/layout/ProfileSkeleoton";
import {Link} from "react-router-dom";



export class userProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            screamIdParam: null,
            toggleTab: false,
            visible: 10,
        };
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }



    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);

    };
    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    };
    handleLogout = () => {
        this.props.logoutUser();
        window.location.href = '/'
    };

    toggleTable = () =>{
        this.setState({
            toggleTab: !this.state.toggleTab
        })
    };

    componentDidMount() {
        const handle = this.props.match.params.handle;
        const reviewId = this.props.match.params.reviewId;

        if (reviewId) this.setState({ reviewIdParam: reviewId });

        console.log(this.props.getUserData(handle));
 /*       axios.get(`/userProfile/${handle}`)
            .then((res) => {
                this.setState({
                    profile: res.data.user
                });
            })
            .catch((err) => console.log(err));*/
    }
     render() {

        const {

            user: {
                credentials: {handle, createdAt, firstName, lastName, imageUrl, phone, email, location},
                loading,

            },


        }
            = this.props;

        const {reviews, reports} = this.props.user;
        let recentReviewMarkup = !loading ? (
            reviews.slice(0, this.state.visible).map((review) => <Scream key={review.reviewId} review={review}/>)
        ) : (
          <div>
              Loading............

          </div>
        );


        // console.log(reviews);
        if (/*this.state.profile !== null ||*/ !loading) {


            return (
                <div className="profilePage">


                    <div className="contSVG">
                        <div className="profileParams">

                            <Notifications/>

                            <div className="details">
                                <div className="detailsTop">
                                    <section className="detailsLeft">
                                        <div>
                                            <FontAwesomeIcon icon={faMapMarker} className="icon"> </FontAwesomeIcon>
                                            <span> {location} </span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faUser} className="icon"> </FontAwesomeIcon>
                                            <span> @{handle}</span>
                                        </div>
                                    </section>
                                    <section className="userImage">
                                        <img src={imageUrl} alt="userImage"/>
                                    </section>
                                    <input
                                        type="file"
                                        id="imageInput"
                                        hidden="hidden"
                                        onChange={this.handleImageChange}
                                    />
                                    <button
                                        tip="Edit profile picture"
                                        onClick={this.handleEditPicture}
                                        className="editPic"
                                    ><FontAwesomeIcon icon={faCamera}/>
                                    </button>
                                    <section className="detailsRight">
                                        <div>
                                            <FontAwesomeIcon icon={faEnvelope} className="icon"> </FontAwesomeIcon>
                                            <span> {email} </span>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faPhone} className="icon"> </FontAwesomeIcon>
                                            <span> {phone}</span>
                                        </div>
                                    </section>
                                </div>
                                <div className="detailsBottom">
                                    <EditDetails/>
                                    <section className="userName">
                                        <span> {firstName} {lastName}</span><br/>
                                        <small>Joined {dayjs(createdAt).format('MMM YYYY')}</small>

                                    </section>
                                    <section className="numbers">
                                        <section className="reviews">Reviews {
                                            Object.keys(reviews).length
                                        }</section>
                                        <section className="flagged">Flagged {    Object.keys(reports).length}</section>
                                    </section>
                                </div>

                            </div>
                            <div className="writeReview">

                                <section className="words">
                                    <div>
                                        Authenticated reviews from users like yourself.
                                    </div>
                                    <div>
                                        Balanced and independent reviews. Businesses cannot manipulate ChecknCommit®
                                        scores.

                                    </div>
                                </section>

                                <section className="writeBtn">
                                    <Link to='/createReview'>
                                        <button>
                                            Create review
                                        </button>
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>


                    {/*for mobile*/}
                    <div className="mobile">


                        <div className="mobileBanner">


                            <section className="bottom">

                                <section className="top">
                                    <div onClick={this.handleLogout}>
                                        <FontAwesomeIcon className="icon" icon={faPowerOff}/>
                                    </div>

                                    <div>
                                        <Link to='/createReview'><FontAwesomeIcon className="icon"
                                                                                 icon={faPenAlt}/></Link>
                                    </div>
                                </section>


                                <section className="userDetails">
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} className="icon"/> {email}
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faPhone} className="icon"/> {phone}
                                    </div>
                                    <div className="name">
                                        {lastName} {firstName}
                                    </div>

                                    <div>
                                        <FontAwesomeIcon icon={faMapMarker} className="icon"/> {location}
                                    </div>

                                </section>

                                <section className="userImage">
                                    <img src={imageUrl} alt="userImage"/>
                                    <input
                                        type="file"
                                        id="imageInput"
                                        hidden="hidden"
                                        onChange={this.handleImageChange}
                                    />
                                    <button
                                        tip="Edit profile picture"
                                        onClick={this.handleEditPicture}
                                        className="editBtnMob"
                                    ><FontAwesomeIcon icon={faCamera}/>
                                    </button>
                                </section>


                            </section>

                            <svg xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <filter id="Path_4" x="0" y="0" filterUnits="userSpaceOnUse">
                                        <feOffset dy="10" input="SourceAlpha"/>
                                        <feGaussianBlur stdDeviation="12.5" result="blur"/>
                                        <feFlood floodOpacity="0.161"/>
                                        <feComposite operator="in" in2="blur"/>
                                        <feComposite in="SourceGraphic"/>
                                    </filter>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_4)">
                                    <path id="Path_4-2" data-name="Path 4"
                                          d="M0,0H480V220.824s-116.373,48.509-236.373,48.509S0,220.824,0,220.824Z"
                                          transform="translate(0 0)" fill="#051A12"/>
                                </g>
                            </svg>


                        </div>


                        <div className="mobTabHeader">
<ul>
    <li onClick={this.toggleTable}>
     <FontAwesomeIcon icon={faComment}/>   Reviews ({     Object.keys(reviews).length})
    </li>
    <li onClick={this.toggleTable}>
        <FontAwesomeIcon icon={faBriefcase}/> Businesses
    </li>
</ul>
                        </div>

                        <EditDetails/>




                    </div>


                    {/*reviews*/}

                    <div className="profileCont">
                        <div className="headings">
                            <div className={`${!this.state.toggleTab ? 'active' : ''} text`} onClick={this.toggleTable} >Your reviews  ({Object.keys(reviews).length})</div>
                            <div className={`${this.state.toggleTab ? 'active' : ''} text`} onClick={this.toggleTable}> Businesses </div>
                        </div>

<div className="contents">

    {
        this.state.toggleTab === false ? ( <div className="reviews">



            {recentReviewMarkup}


        </div>) : (  <div className="businesses">

        </div>)
    }


    <div>
        { reviews &&  this.state.visible < Object.keys(reviews).length && this.state.toggleTab === false &&
        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
        }
    </div>
</div>

                    </div>
                </div>
            );


        } else {
            return (


                <div>

                    <ProfileSkeleton/>

                </div>


            )
        }

    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    notifications: state.notifications,

});

const mapActionsToProps = {logoutUser, uploadImage, getUserData, cancelUserMembership};

userProfile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    cancelUserMembership: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,


};


export default connect(
    mapStateToProps, mapActionsToProps)(userProfile);