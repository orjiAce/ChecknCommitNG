import React, {Component} from 'react';
import {useLax, useLaxElement} from 'use-lax';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBalanceScale,
    faBusinessTime,
    faComment,
    faHandsHelping,
    faHeart, faKey,
    faSearch,
    faStar,
    faStarHalf,
    faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {createRipples} from 'react-ripples'
//carousel
import blender from '../images/carousel/blender.jpg'
import ipadUser from '../images/carousel/ipad-user.jpg'
import pic3 from '../images/carousel/photo-3.jpg'
import Ripple from "@material-ui/core/es/ButtonBase/Ripple";
import {Link} from "react-router-dom";


const HomeContent = () => {
    useLax();// init

    const Ripples = createRipples({
        color: 'rgba(11,94,63,0.48)',
        during: 1000,
    });

    return (
        <div className="homeContent">

            <div className="rightInfo lax" data-lax-preset="driftRight">
                <div className="imageThumb">
                    <img src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                </div>
                <div>

                    <section>
                        High quality, use-able reviews. Information about product or service advantages, disadvantages,
                        usability and alternatives


                    </section>
                    <section>
                        Balanced and independent reviews. Businesses cannot manipulate ChecknCommit® scores.

                    </section>
                </div>
            </div>


            <div className="leftInfo">




                <div className="boxed-words">
                    <div className="box" >
<div className="box-Ico">
<FontAwesomeIcon icon={faHandsHelping} className="box-icon"/>
</div>
<div className="box-content">
    Help other buyers make the right choice over a product or
    service they are considering for purchase.<br/>
    Improve their shopping experience and somewhere down
    the line, you’ll have the benefit returned.
</div>
                    </div>
                    <div className="box">
                        <div className="box-Ico">
<div>
    <FontAwesomeIcon icon={faBusinessTime}  className="box-icon"/>
</div>
                        </div>
                        <div className="box-content">
                            Find individual business by searching with name, category and location filters.
                        </div>
                    </div>

                    <div className="box" >
                        <div className="box-Ico">
                            <div>

<FontAwesomeIcon icon={faBalanceScale} className="box-icon"/>
                            </div>
                        </div>
                        <div className="box-content">
                            Help businesses evolve by telling them, honestly, what they are doing right and what they need
                            to improve on.
                        </div>
                    </div>
                    <div className="box" >
                        <div className="box-Ico">
<FontAwesomeIcon icon={faKey} className="box-icon"/>
                        </div>
                        <div className="box-content">
                            Publish your review. Someone somewhere out there is waiting for that key piece of advice that
                            lets them buy or deny. Help them out today!
                        </div>
                    </div>

                </div>
            </div>



            <div className="compareBtn">
              <Link to="/compare-category"> <button>Compare businesses
                </button>
              </Link>
            </div>
            <div className="boxesCont">

                <div className="box">

                    <section className="iconWrap">
                        <div className="iconContent">
                           <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </section>

                    <section className="subTitle">
                        Find the business
                    </section>

                    <section className="body">
                        Search for businesses
                        by name and
                        location.
                    </section>
                </div>


                <div className="box">
                    <section className="iconWrap">
                        <section className="starIconWrap">

                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </section>
                    </section>

                    <section className="subTitle">
                        Rate the business
                    </section>

                    <section className="body">
                        Your feed back is
                        important for business,
                        give your rating and
                        help the business
                        become better.
                    </section>
                </div>
                <div className="box" >
                    <section className="iconWrap">
                        <section className="starIconWrap">

                            <FontAwesomeIcon icon={faComment}/>
                        </section>
                    </section>

                    <section className="subTitle">
                        Write and post review
                    </section>

                    <section className="body">
                        Share your experience
                        and help others
                        make the right choice
                    </section>
                </div>

            </div>





            <div className="homeBottomTxt">
                100% trustworthy reviews What you read is what it is
            </div>


            <div className="centerBanner">
                <div className="bannerImg">

                </div>
                <div className="overlay">

                    <div className="rectangles">

                        <div className="rect first">
                            Customer Confidence Created
                        </div>

                        <div className="rect third">
                            The Truth Is Not Out There It’s At CHECKnCOMMIT®
                        </div>
                        <div className="rect second">
                            Want To Grow Your Business Exponentially? Create an Army of Influencers

                            <Link to='/' onClick={ () => (window.location = "https://business.checkncommit.com")}> Here</Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="myCarousel">
                <link rel="stylesheet" href="../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/>
                <Carousel className="carousel" showThumbs={false} swipeable={true} autoPlay={true}>
                    <div>
                        <img src={ipadUser} alt="slider"/>
                        <div className="legend">

                            <div className="starsWrap">
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStarHalfAlt}/>
                            </div>
                            <div className="body">
                                “My friend loved the ipad and can't stop using it.”
                            </div>
                            <div className="user">
                                Brian
                            </div>


                        </div>
                    </div>
                    <div>
                        <img src={blender} alt="slider"/>
                        <div className="legend">

                            <div className="starsWrap">
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStarHalf}/>
                            </div>
                            <div className="body">
                                “The blender works so well i feel like ordering another.”
                            </div>
                            <div className="user">
                                Mark
                            </div>


                        </div>
                    </div>
                    <div>
                        <img src={pic3} alt="slider"/>
                        <div className="legend">

                            <div className="starsWrap">

                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStarHalfAlt}/>
                            </div>
                            <div className="body">
                                “I've been able to manage my activities efficiently, ever since i started using the laptop!.”
                            </div>
                            <div className="user">
                                Eddie
                            </div>


                        </div>
                    </div>
                </Carousel>

            </div>



        </div>
    );

};

export default HomeContent;