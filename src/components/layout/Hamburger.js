import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import gsap from 'gsap'
import {getUserData, logoutUser, uploadImage} from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import {userProfile} from "../../pages/userProfile";
import {connect} from "react-redux";


const Hamburger = ({state, authenticated, imageUrl, lastName}) => {



    //variables for our animated dom nodes
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBg = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let info = useRef(null);



    useEffect(() => {
//check if state has been altered

        if (state.clicked === false) {
            //close menu
            gsap.to([revealMenu, revealMenuBg], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            });

        } else if (state.clicked === true ||
            (state.clicked === true && state.initial === null)) {
            //open our menu

            gsap.to(menu, {
                duration: 0,
                css: {display: "block"}
            });
            gsap.to([revealMenuBg, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100vh"
            });


            staggerReveal(revealMenuBg, revealMenu);
            fadeInUp(info);
            staggerText(line1, line2);

        }
    }, [state]);


    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        });
    };

    const staggerText = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            delay: 0.1,
            y: 100,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.5
            }

        });
    };

    const fadeInUp = (node) => {
        gsap.from([node], {
            y: 60,
            duration: 1,
            delay: 0.2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    };

    const handleHover = e => {
        gsap.to(e.target, {
            duration: 0.3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        });
    };
    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration: 0.3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut"
        });
    };


    return (
    <div ref={el => (menu = el)} className="Hamburger-menu">
        <div ref={el => (revealMenuBg = el)} className="menu-sec-bg-color">
        </div>
        <div ref={el => (revealMenu = el)} className="menu-layer">
            <div className="container">
                <div className="wrapper">
                    <div className="menu-links">
                        <nav>
                            <ul>
                                <li>
                                    {
                                        authenticated ? (  <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}

                                            ref={el => (line1 = el)} to="/userProfile">
                                         <img className="tinyImg" src={imageUrl}/>
                                        </Link>) : (  <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}

                                            ref={el => (line1 = el)} to="/Signup">
                                            SignUp
                                        </Link>)
                                    }

                                </li>

                                <li>
                                    {
                                        authenticated ?  ( <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)} to="/userProfile">
                                          {lastName}
                                        </Link>) : ( <Link
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                            ref={el => (line2 = el)} to="/login">
                                          Login
                                        </Link>)
                                    }

                                </li>
                            </ul>

                        </nav>
                        <div ref={el => (info = el)} className="info">
                            <h3>
                                Our Commitment to You.
                            </h3>
                            <p>

                                What is the impression of your business that you want people to have when they search
                                for you online?
                            </p><br/>
                            <p> ChecknCommit® allows you to create, manage, and update your online Business Profile as
                                well as enabling
                                you to engage with existing and potential customers. All you need to get started is a
                                mobile phone, a tablet or a computer; the rest is totally free.
                            </p>
                        </div>
                        <div className="menu-items">

                            <span>
                                <Link to="/faq">
                                        FAQ
                                    </Link>
                            </span>

                            <span>
                                <Link to="/howItWorks"> How review works</Link>
                            </span>

                            <span>
                                <Link to="/createReview"> Create a review</Link>
                            </span>

                            <span>
                                <Link to="/about"> Privacy policy</Link>
                            </span>

                            <span>
                                <Link to="/about"> Build a website</Link>
                            </span>

                            <span>
                                <Link to="/about"> How to leave a review</Link>
                            </span>
                            <span>
                                <Link to="/about"> How to create a review</Link>
                            </span>
                            <span>
                                <Link to="/askALawyer"> Ask a lawyer</Link>
                            </span>
                            <span>
                                <Link to="/compare-category">Compare businesses</Link>
                            </span>
                        </div>

                        <div className="mobMenuItems">
                            <ul>
                                <li>
                                    <Link to="/faq">
                                        FAQ
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/howItWorks"> How review works</Link>

                                </li>

                                <li>
                                    <Link to="/createReview"> Create a review</Link>
                                </li>


                                <li>
                                    <Link to="/about"> Privacy policy</Link>
                                </li>

                                <li>
                                    <Link to="/about"> Build a website</Link>
                                </li>

                                <li>
                                    <Link to="/about"> How to leave a review</Link>
                                </li>
                                <li>
                                    <Link to="/about"> How to create a review</Link>
                                </li>


                            </ul>
                            <ul>


                                <li><Link to="/about-us">Purpose</Link></li>
                                <li>Our Story</li>

                                <li><Link to='/categories'>Categories</Link></li>
                                <li><Link to="/ourCommitment"> Our Commitment</Link></li>
                                <li>
                                    <Link to="/askALawyer"> Ask a lawyer</Link>
                                </li>
                                <li>
                                    <Link to="/compare-category">Compare businesses</Link>
                                </li>
                                <li onClick={ () => (window.location = "https://business.checkncommit.com")}>For Business</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
};


const mapStateToProps = (state) => ({
    user: state.user,
    notifications: state.notifications,

});

const mapActionsToProps = {logoutUser, uploadImage, getUserData};

Hamburger.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,


};

export default connect(mapStateToProps, mapActionsToProps)( Hamburger);
