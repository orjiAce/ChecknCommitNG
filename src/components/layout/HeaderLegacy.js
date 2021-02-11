import React, { Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import gsap from "gsap/gsap-core";
import { connect } from 'react-redux';
import logo from '../../images/CHECcOMMIT.png'
import PropTypes from "prop-types";

class HeaderLegacy extends Component  {

    constructor(props) {
        super(props);
        this.menuCont= null;
        this.revealMenu= null;
        this.line1= null;
        this.line2= null;
        this.info= null;
        this.revealMenuBg= null;
    this.state = {
        initial: false,
        clicked: null,
        menuName: "Menu",
        menu: false,

    }
    }


     handleHover = e => {
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
     handleHoverExit = e => {
        gsap.to(e.target, {
            duration: 0.3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut"
        });
    };
//state for menu button

    componentDidMount() {

        this.props.history.listen(() => {
            this.setState({
                menu: false
            });

            gsap.to([this.revealMenu], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to([this.menuCont], {
                duration: 1,
                css: {display: "none"}
            });

        });
    }


    //this function will run when click our button (when the app is first loaded)
     handleMenu = () => {

            this.setState({

                menu: !this.state.menu,

            });

          /*  if(this.state.menu === true)
            {
               //alert("close");

                gsap.to([this.revealMenu], {
                    duration: 0.8,
                    height: 0,
                    ease: "power3.inOut",
                    stagger: {
                        amount: 0.07
                    }
                });

                gsap.to(this.menuCont, {
                    duration: 1,
                    css: {display: "none"}
                });
            }else if(this.state.menu === false){
               // alert("open")




                gsap.to(this.menuCont, {
                    duration: 0,
                    css: {display: "block"}
                });
                gsap.to([this.revealMenu], {
                    duration: 0,
                    opacity: 1,
                    height: "100%"
                });

                this.staggerReveal( this.revealMenu);
                this.fadeInUp(this.info);
                this.staggerText(this.line1, this.line2);
            }*/

        };


    staggerReveal = (node1, node2) => {
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

     staggerText = (node1, node2) => {
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

     fadeInUp = (node) => {
        gsap.from([node], {
            y: 60,
            duration: 1,
            delay: 0.2,
            opacity: 0,
            ease: 'power3.inOut'
        });
    };





    // const { authenticated } = this.props;
render(){
    const {
         authenticated, imageUrl,lastName
    } = this.props;
    return (

        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="Logo"/> </Link>


                            <div className='leftMenu'>
                                <ul>
                                    <li><Link to="/about-us">Purpose of ChecknCommit</Link></li>

                                    <li><Link to='/categories'>Categories</Link></li>
                                    <li><Link to="/askALawyer"> Ask a lawyer</Link></li>
                                </ul>
                            </div>

                        </div>



                        <div className="rightMenu">
                            <ul>

                                <li>


                                    {authenticated === true ? (
                                        <Link title={lastName} to="/userProfile"> profile</Link>) : (
                                        <Link to='/signup'>Create Account</Link>)}


                                </li>
                                <li>
                                    {authenticated === true ? (
                                        <span title={lastName} className="userImage"> <img src={imageUrl}/></span>) : (
                                        <Link to='/login'>Login</Link>)}


                                </li>
                                <li><Link to='/categories'>Categories</Link></li>
                                <li><Link to="/ourCommitment"> Our Commitment</Link></li>
                                <li onClick={() => (window.location = "https://business.checkncommit.com")}>For
                                    Business
                                </li>

                            </ul>
                        </div>

                        <div  onClick={this.handleMenu} className="menu">
                            <div className="mLine1"></div>
                            <div className="mLine2"></div>
                            <div className="mLine3"></div>


                        </div>

                    </div>
                </div>
            </div>

            <div className={`${this.state.menu === false ? 'open' : 'close'} hamMenu`}>

                <div ref={node => (this.revealMenu = node)} className="menu-layer">
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li>
                                            {
                                                authenticated ? (<Link
                                                    onMouseEnter={e => this.handleHover(e)}
                                                    onMouseOut={e => this.handleHoverExit(e)}

                                                    ref={node => (this.line1 = node)} to="/userProfile">
                                                    <img className="tinyImg" src={imageUrl}/>
                                                </Link>) : (<Link
                                                    onMouseEnter={e => this.handleHover(e)}
                                                    onMouseOut={e => this.handleHoverExit(e)}

                                                    ref={node => (this.line1 = node)} to="/Signup">
                                                    SignUp
                                                </Link>)
                                            }

                                        </li>

                                        <li>
                                            {
                                                authenticated ? (<Link
                                                    onMouseEnter={e => this.handleHover(e)}
                                                    onMouseOut={e => this.handleHoverExit(e)}
                                                    ref={this.line2} to="/userProfile">
                                                    {lastName}
                                                </Link>) : (<Link
                                                    onMouseEnter={e => this.handleHover(e)}
                                                    onMouseOut={e => this.handleHoverExit(e)}
                                                    ref={this.line2} to="/login">
                                                    Login
                                                </Link>)
                                            }

                                        </li>
                                    </ul>

                                </nav>
                                <div  ref={node => (this.info = node)} className="info">
                                    <h3>
                                        Our Commitment to You.
                                    </h3>
                                    <p>

                                        What is the impression of your business that you want people to have when they
                                        search
                                        for you online?
                                    </p><br/>
                                    <p> ChecknCommit® allows you to create, manage, and update your online Business
                                        Profile as
                                        well as enabling
                                        you to engage with existing and potential customers. All you need to get started
                                        is a
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
                                        <li onClick={() => (window.location = "https://business.checkncommit.com")}>For
                                            Business
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
};
}
HeaderLegacy.propTypes = {
    authenticated: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(withRouter(HeaderLegacy));