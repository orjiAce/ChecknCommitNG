import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
    staggerText,
    staggerReveal,
    fadeInUp,
    handleHover,
    handleHoverExit,
    handleCityReturn,
    handleCity,
    staggerRevealClose
} from "./Animations";


const cities = [
    { name: "Dallas" },
    { name: "Austin" },
    { name: "New York" },
    { name: "San Francisco"},
    { name: "Beijing"}
];

const Hamburger = ({ state, authenticated, imageUrl, lastName })  => {
    // Create varibles of our dom nodes
    let menu = useRef(null);
    let revealMenuBg  = useRef(null);
    let revealMenu = useRef(null);
    let cityBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let info = useRef(null);

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
            // If menu is closed and we want to open it.

            staggerRevealClose(revealMenuBg, revealMenu);
            // Set menu to display none
            gsap.to(menu, { duration: 1, css: { display: "none" } });
        } else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // Set menu to display block
            gsap.to( menu, { duration: 0, css: { display: "block" } });
            //Allow menu to have height of 100%
            gsap.to([revealMenu, revealMenuBg], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(revealMenu, revealMenuBg);
            fadeInUp(info);
            staggerText(line1, line2);
        }
    }, [state]);

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
    );
};

export default Hamburger;
