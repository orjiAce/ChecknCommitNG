import React, {Component} from 'react';
import logo from "../../images/CHECcOMMIT.png";
import {connect} from "react-redux";
import {withRouter, Link, Redirect} from "react-router-dom";
import gsap from "gsap/gsap-core";
import PropTypes from "prop-types";
import { logoutUser} from "../../redux/actions/userActions";

class Ham extends Component {
    constructor(props) {
        super(props);

        this.state ={
            menu: false,

        }
    }

    componentDidMount() {
        this.props.history.listen(() => {
            this.setState({
                menu: false
            });
        });
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


    handleLogout = () => {
        this.props.logoutUser();
        window.location.href = '/'
    };

    handleMenu = () => {

        this.setState({

            menu: !this.state.menu,

        });


    };
    render() {
        const {
            authenticated,
            credentials:{
                imageUrl, lastName
            }

        }
            = this.props.user;
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="wrapper">
                            <div className="inner-header">
                                <div className="logo">
                                    <span onClick={() => window.location = '/'} ><img src={logo} alt="Logo"/> </span>


                                    <div className='leftMenu'>
                                        <ul>
                                            <li><Link to="/about-us">Purpose of ChecknCommit</Link></li>

                                            <li><Link to='/categories'>Categories</Link></li>
                                            <li><Link to="/askALawyer"> Ask a lawyer</Link></li>
                                        </ul>
                                    </div>

                                </div>



                                <div className="mobMiddle">
                                    <span onClick={() => (window.location = "https://business.checkncommit.com")} className="white">For Business</span>
                                </div>


                                <div className="rightMenu">
                                    <ul>

                                        <li>


                                            {authenticated === true ? (
                                                <Link title={lastName} to="/userProfile"> Your Dashboard</Link>) : (
                                                <Link to='/signup'>Create Account</Link>)}


                                        </li>
                                        <li>
                                            {authenticated === true ? (
                                                <span onClick={this.handleLogout} title='logout' className="userImage">
                                                    Logout
                                                </span>) : (
                                                <Link to='/login'>Login</Link>)}


                                        </li>

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
                </header>
                <div className={`${this.state.menu ? 'hamMenu' : 'close'}`}>


                    <div className="firstLayer">

                        <div className="container">
                            <div className="wrapper">
                                <div className="menu-links">
                                    <nav>
                                        <ul>
                                            <li>
                                                {
                                                    authenticated ? (  <Link
                                                        onMouseEnter={e => this.handleHover(e)}
                                                        onMouseOut={e => this.handleHoverExit(e)}

                                                        to="/userProfile">
                                                        <img className="userImage" src={imageUrl}/>
                                                    </Link>) : (  <Link
                                                        onMouseEnter={e => this.handleHover(e)}
                                                        onMouseOut={e => this.handleHoverExit(e)}

                                                        to="/Signup">
                                                        SignUp
                                                    </Link>)
                                                }

                                            </li>

                                            <li>
                                                {
                                                    authenticated ?  ( <Link
                                                        onMouseEnter={e => this.handleHover(e)}
                                                        onMouseOut={e => this.handleHoverExit(e)}
                                                        to="/userProfile">
                                                        {lastName}
                                                    </Link>) : ( <Link
                                                        onMouseEnter={e => this.handleHover(e)}
                                                        onMouseOut={e => this.handleHoverExit(e)}
                                                        to="/login">
                                                        Login
                                                    </Link>)
                                                }

                                            </li>
                                        </ul>

                                    </nav>
                                    <div className="info">
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

                                                <Link to="/Howto"> HOW TO (Video)</Link>
                            </span>
                                        <span>

                                                <Link to="/compare-category"> Compare businesses</Link>
                            </span>

                                        <span>
                                <Link to="/howtoleavereview"> How to leave a review</Link>
                            </span>
                                        <span>
                                <Link to="/howToCreateReview"> How to create a review</Link>
                            </span>

                                        {/*<span>
      <Link to="/ourStory">Our Story</Link>
                            </span>*/}
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
                                                <Link to="/categories"> Categories</Link>
                                            </li>




                                            <li>
                                                <Link to="/compare-category"> Compare businesses</Link>
                                            </li>

                                            <li>
                                                <Link to="/howtoleavereview"> How to leave a review</Link>
                                            </li>
                                            <li>
                                                <Link to="/howToCreateReview"> How to create a review</Link>
                                            </li>


                                        </ul>
                                        <ul>


                                            <li><Link to="/about-us">Purpose</Link></li>
                                            <li><Link to="/ourStory">Our Story</Link></li>

                                            <li><Link to="/ourCommitment"> Our Commitment</Link></li>
                                            <li>
                                                <Link to="/askALawyer"> Ask a lawyer</Link>
                                            </li>  <li>

                                            <Link to="/"> HOW TO (Video)</Link>
                                            </li>

                                            <li onClick={ () => (window.location = "https://business.checkncommit.com")}>For Business</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({

    user: state.user,
    notifications: state.notifications,

});

const mapActionsToProps = {logoutUser};

Ham.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapActionsToProps) (withRouter(Ham));