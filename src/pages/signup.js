import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Offline, Online} from "react-detect-offline";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAt, faCamera,
    faEnvelope,
    faKey,
    faLock,
    faMapPin, faPhone,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import '../style/desktop/signup.scss'
// Redux stuff
import {connect} from 'react-redux';
import {signupUser} from '../redux/actions/userActions';
import LoginSvg from "../components/LoginSvg";
import Toast from "../components/Toast";
import * as emailjs from "emailjs-com";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areaCode: '',
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            firstName: '',
            lastName: '',
            location: '',
            phone: '',
            selectedFile: null,
            terms: '',
            loading: false,
            showToast: false,
            errors: {},
            errorMsg: '',

            /*    newUser: {
                    name: '',
                    email: '',
                    age: '',
                    gender: '',
                    expertise: '',
                    about: ''

                },

                genderOptions: ['Male', 'Female', 'Others'],
                skillOptions: ['Programming', 'Development', 'Design', 'Testing']*/
        };

    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({errors: nextProps.UI.errors});

        }if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ errors: {} });
        }
    }


    /*
        handleSkillsCheckBox(e) {

            const newSelection = e.target.value;
            let newSelectionArray;

            if(this.state.newUser.skills.indexOf(newSelection) > -1) {
                newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
            } else {
                newSelectionArray = [...this.state.newUser.skills, newSelection];
            }

            this.setState( prevState => ({ newUser:
                        {...prevState.newUser, skills: newSelectionArray }
                })
            )
        }
    */

    fileChangedHandlerTwo = event => {
        this.setState({selectedFile: event.target.files[0]});
       // console.log(this.state.selectedFile);
      //  console.log(Array.from(event.target.files))
    };



    handleSubmit = (event) => {

        event.preventDefault();
        const {name, type, value, checked} = event.target;
const {firstName, lastName, handle, location, phone, password,confirmPassword, email,selectedFile } = this.state;
        const newUserData = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            location: location,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            handle: handle,
        };
        const newUserInfo = new FormData();
        newUserInfo.append('firstName', firstName);
        newUserInfo.append('location', location);
        newUserInfo.append('email', email);
        newUserInfo.append('phone', phone);
        newUserInfo.append('handle', handle);
        newUserInfo.append(
            'imageUrl', selectedFile, selectedFile.name
        );
        newUserInfo.append('password', password);
        newUserInfo.append('lastName', lastName);




        if (this.state.selectedFile !== null) {

            newUserInfo.append('file', this.state.selectedFile, this.state.selectedFile.name);
        }


        if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newUserData.firstName)) {
            toast.error('First Name cannot contain special characters or spaces', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newUserData.lastName)) {
            toast.error('Last Name cannot contain special characters or spaces', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(newUserData.handle)) {
            toast.error('Username cannot contain special characters or spaces', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(newUserData.email) === false) {

            toast.error('Please enter a valid email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })


        } else if (newUserData.password !== newUserData.confirmPassword) {
            toast.error('Password must match', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (newUserData.password.length < 5) {
            toast.error('Password is too short', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else if (!selectedFile.name.match(/\.(jpg|jpeg|png)$/)) {
            toast.error('Invalid file type (allowed file type jpg,png,jpeg)', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {

           this.props.signupUser(newUserInfo, this.props.history);
            /*  toast.success('Great, You are in!!', {
                 position: "top-right",
                 autoClose: 5000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
             })*/
        }


        let templateParams = {
            to_name: firstName,
            userEmail: email,
            from_name: 'ChecknCommit',
        };

         emailjs.send(
               'gmail',
               'user_notification',
               templateParams,
               'user_hBPhgGVDo2FrAluJFX5bN'
           ).then((res)=>{
               this.setState({errorMsg: 'Email successfully sent!',  showToast: true});
               this.toastHide();

           }).catch(err =>{

               this.setState({errorMsg: 'Oh well, sending failed',
                   showToast: true});
               this.toastHide()
           });


    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };


    toastHide = () => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({showToast: false});

        }, 6000)
    };

    render() {
        const {
            classes,
            UI: {loading}
        } = this.props;
        const {errors, errorMsg} = this.state;


        return (
            <div className="signUp">



<div className="errors_toast">
    { errors.general ?
        toast.error(errors.general , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) : ' '
    }

    {
        errors.username ?
        toast.error(errors.username , {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) : ''
    }

</div>


                <div className="loginSvg">

                    <div className="msg"> Take the first step
                        Open a free account
                    </div>
                    <div className="bottomMsg">
                        <ul>
                            <li>Authenticated reviews from users like yourself.
                            </li>
                            <li>Balanced and independent reviews.
                            </li>
                            <li>Businesses
                                cannot manipulate ChecknCommit® scores.
                            </li>
                        </ul>
                    </div>
                    <LoginSvg/>


                </div>

                <div className="formWrap">
                    <div className="formTitle">
                        <FontAwesomeIcon icon={faLock} className="icon"/> Sign Up here
                    </div>
                    <div className="msgReq">The fields marked * are required</div>

                    <form className="signUpForm" onSubmit={this.handleSubmit}>

                        <div className="inputWrap">
                            <label form="fName">* First Name</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                <input id="fName" placeholder="First Name" name="firstName" type="text"
                                       value={this.state.firstName} onChange={this.handleChange}
                                       error={!!errors.firstName}
                                       required={true}/>

                            </div>

                            <div className='notice'> <small>First name should only contain letters</small> </div>
                        </div>

                        <div className="inputWrap">
                            <label form="lName">* Last Name</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                <input id="lName" placeholder="Last Name" name="lastName" type="text"
                                       value={this.state.lastName} onChange={this.handleChange}
                                       error={!!errors.lastName} required={true}/>

                            </div>
                            <div className='notice'> <small>Last name should only contain letters</small> </div>

                        </div>

                        <div className="inputWrap">
                            <label form="handle">* this will be Your ChecknCommit Username</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faAt} className="icon"/>
                                <input id="handle" placeholder="Your username" name="handle" type="text"
                                       error={!!errors.handle} value={this.state.handle} onChange={this.handleChange}
                                       required={true}/>

                            </div>
                            <div className='notice'> <small>Username should only contain letters</small> </div>

                        </div>
                        <div className="inputWrap">
                            <label form="location">* Your Location</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faMapPin} className="icon"/>
                                <input id="location" placeholder="Location" name="location" type="text"
                                       error={!!errors.location} value={this.state.location}
                                       onChange={this.handleChange} required={true}/>

                            </div>


                        </div>

                        <div className="inputWrap">
                            <label form="email">* Your Email</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                <input id="email" placeholder="Email" name="email" type="email" error={!!errors.email}
                                       value={this.state.email} onChange={this.handleChange}
                                       required={true}/>

                            </div>


                        </div>


                        <div className="inputWrap">
                            <label form="email">* Your Phone number</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faPhone} className="icon"/>
                                <PhoneInput
                                    country={'ng'}
                                    value={this.state.phone}
                                    onChange={phone => this.setState({ phone })}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true
                                    }}
                                />
                            </div>


                        </div>




                        <div className="inputWrap">
                            <label form="password">* Your Password</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faKey} className="icon"/>
                                <input id="password" placeholder="Password" name="password" type="password"
                                       error={!!errors.password} value={this.state.password}
                                       onChange={this.handleChange}
                                       required={true}/>
                            </div>
                            <div className='notice'> <small>    Password must be longer than 5</small> </div>

                        </div>

                        <div className="inputWrap">
                            <label form="password">* Confirm Password</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faKey} className="icon"/>
                                <input id="password" placeholder="Confirm Password" name="confirmPassword"
                                       type="password"
                                       error={!!errors.confirmPassword} value={this.state.confirmPassword}
                                       onChange={this.handleChange} required={true}/>
                            </div>


                        </div>

                        <div className="upload-btn-wrapper">
                            <label form="imageUrl">* Your Profile Image</label>
                            <div className="inputCont">
                                <FontAwesomeIcon icon={faCamera} className="icon"/>
                                <input type="file" name="selectedFile" id='imageUrl'
                                       onChange={this.fileChangedHandlerTwo} required={true}/>
                            </div>
                        </div>

                        <br/>

                        <div className="forgotPass">

                            <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"
                                   name='terms' onChange={this.handleChange}/>


                            <label htmlFor="styled-checkbox-1">
                                Accept <Link to="/terms">terms and condition</Link> and <Link to="/privacypolicy">privacy
                                policy</Link></label>
                        </div>
                        <br/>
                        <div className="bottomForm">
                            <div>
                                <Online>
                                <button type="submit"> Sign up</button>
                                </Online>
                                <Offline>
                                <button type="submit" disabled={true}> Sign up</button>
                                </Offline>
                            </div>


                            <div className="link">Already have an account? <Link to="/login"> Login</Link></div>
                        </div>

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
                    </form>


                </div>

            </div>
        );
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(
    mapStateToProps,
    {signupUser}
)(signup);
