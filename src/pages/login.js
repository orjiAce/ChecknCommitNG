import React, {Component} from 'react';

import PropTypes from 'prop-types';


import LoginSvg from "../components/LoginSvg";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom';

import '../App.scss';
import '../style/desktop/login.scss';
// Redux stuff
import {connect} from 'react-redux';
import {loginUser} from '../redux/actions/userActions';
import Toast from "../components/Toast";
import {Offline, Online} from "react-detect-offline";
import { ToastContainer, toast } from 'react-toastify';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showToast: false,
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({errors: nextProps.UI.errors});
        }
    }



    handleSubmit = (event) => {
        event.preventDefault();
      this.setState({
        showToast: true
      });
        this.toastHide();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
    };


  toastHide = () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.setState({showToast: false});

    }, 6000)
  };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const {
            UI: {loading}
        } = this.props;
        const {errors} = this.state;

        return (
            <div className="login">
                <div className="errors_toast">

                    <ToastContainer />

                 {/*   { errors &&
                        toast.error(errors.password || errors.email || errors.general, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })

*/}
                    }


                </div>



                <div className="loginSvg">

                    <div className="msg"> Login to your account
                    </div>
                    <div className="bottomMsg">
                        <ul>
                            <li>A Resource for Buyers
                            </li>
                            <li>
                                Authenticated reviews from users like yourself.
                            </li>
                            <li>
                                Balanced and independent reviews.
                            </li>
                            <li>
                                Businesses cannot
                                manipulate ChecknCommit® scores.

                            </li>

                        </ul>
                    </div>

                    <LoginSvg/>

                </div>
                <div className="loginFormWrap">
                    <div className="formTitle">
                        <FontAwesomeIcon icon={faLock} className="icon"/> Login here
                    </div>
                    <div className="msgReq">The fields marked * are required</div><br/>

                    <form onSubmit={this.handleSubmit} className="loginForm">
                        {
                            errors.general ?


                            <div className="error_noti">
                                {
                                    errors.general
                                }

                            </div> : ''
                        }
                        <div className="inputWrap">
                            <label form="email">* Your Email</label>
                            <div className="inputCont">
                                <input id="email" placeholder="Email" name="email" type="email" error={!!errors.email}
                                       value={this.state.email} onChange={this.handleChange} required={true}/>

                            </div>

                        </div>

<br/>
                        <div className="inputWrap">
                            <label form="password">* Your Password</label>
                            <div className="inputCont">
                                <input id="password" placeholder="Password" name="password" type="password"
                                       value={this.state.password} onChange={this.handleChange}
                                       error={!!errors.password} required={true}/>
                            </div>


                        </div>
                        <br/>

                        <Link to="/resetpass" className="forgotPass">Forgot password?</Link>
                        <div className="bottomForm">
                            <Online>
                            <div>
                                <button type="submit"> Login</button>
                            </div>
                            </Online>

                                <Offline>
                                <div>
                                    <button type="button" disabled={true}> Offline</button>
                                </div>
                                </Offline>


                            <div className="link">Don't have an account? <Link to="/signup"> Register</Link></div>
                        </div>


                    </form>

                    <div className="loader">
                        {loading && (
                            <div>
                                <div className="ball1">

                                </div>
                                <div className="ball2">

                                </div>
                                <div className="ball3">

                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        );
    }
}


login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(login);
