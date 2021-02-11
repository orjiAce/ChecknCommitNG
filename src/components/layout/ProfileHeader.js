import React, {useRef, useEffect} from 'react';
import '../../style/desktop/profile.scss';

import jwtDecode from 'jwt-decode';
import {TweenMax, Power3} from 'gsap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faEdit, faEnvelope, faMapMarker, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import AppIcon from "../../images/user.jpg";
import {logoutUser, uploadImage} from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import {userProfile} from "../../pages/userProfile";
import {connect} from "react-redux";

const ProfileHeader = () =>  {
  let words = useRef(null);
  let notifications = useRef(null);
    useEffect(() => {
        TweenMax.to(words, 0, {css: {visibility: 'visible'}});
        TweenMax.to(notifications, 0, {css: {visibility: 'visible'}});
        TweenMax.from(words, .8, {translateY: (-25),scaleX:1.1,  opacity:0, ease: Power3.easeInOut});
        TweenMax.from(notifications, .8, {translateY: (-25), opacity:0,scaleX:1.1, ease: Power3.easeInOut, delay:1, transformOrigin: "top"});

    });




    return(
            <div className="contSVG">
                <div className="profileParams">

                    <div className="notifications" ref={el => notifications = el}>
                        <section className="noti">
                            <section className="notiIcon">


                                <FontAwesomeIcon icon={faBell} className="icon"> </FontAwesomeIcon>
                            </section>

                        </section>
                    </div>
                    <div className="details">
                        <div className="detailsTop">
                            <section className="detailsLeft">
                                <div>
                                    <FontAwesomeIcon icon={faMapMarker} className="icon"> </FontAwesomeIcon> <span> </span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faUser} className="icon"> </FontAwesomeIcon> <span> Male</span>
                                </div>
                            </section>
                            <section className="userImage">
                                <img src={AppIcon} alt="userImage"/>
                            </section>
                            <section className="detailsRight">
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} className="icon"> </FontAwesomeIcon> <span> </span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faPhone} className="icon"> </FontAwesomeIcon> <span> 0999876543</span>
                                </div>
                            </section>
                        </div>
                        <div className="detailsBottom">
                            <button className="editBtn"><FontAwesomeIcon icon={faEdit}/> Edit Profile</button>
                            <section className="userName">
                                <span> ORJI JOSEPH</span>
                            </section>
                            <section className="numbers">
                                <section className="reviews">Reviews 700</section>
                                <section className="flagged">Flagged 40</section>
                            </section>
                        </div>

                    </div>
                    <div className="writeReview">
                        <section className="writeBtn">
                            <button>
                                Write a review
                            </button>
                        </section>
                        <section className="words" ref={el => words = el}>
                            <div>
                                Authenticated reviews from users like yourself.
                            </div>
                            <div>
                                Balanced and independent reviews. Businesses  cannot manipulate ChecknCommit® scores.

                            </div>
                        </section>
                    </div>
                </div>
            </div>

        );

};

export default ProfileHeader;
