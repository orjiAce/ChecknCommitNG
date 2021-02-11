import React, {Component} from 'react';
import * as emailjs from "emailjs-com";
import Toast from "../components/Toast";
import '../style/desktop/AskALawyer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import lawyerAi from "../images/gavel.png"
import PropTypes from "prop-types";
import {createReview} from "../redux/actions/dataActions";
import {getUserData} from "../redux/actions/userActions";
import {connect} from "react-redux";


class AskALawyer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            title: '',
            message: '',
            showToast: false,
            errorMsg: '',
            showPayForm: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const min = 200;
        const max = 600;
        const refNo = 'Law'+ min + (Math.random() * (max-min));
        const {name, title, email, subject, message} = this.state;
        let templateParams = {
            from_name: name,
            userEmail:email,
            refNo:refNo,
            to_name: 'ChecknCommit.com',
            subject: subject,
            message_html: message,
        };
        emailjs.send(
            'gmail',
            'ask_a_lawyer',
            templateParams,
            'user_hBPhgGVDo2FrAluJFX5bN'
        ).then((res) => {
            this.setState({errorMsg: 'Email successfully sent, ticket is raised!', showToast: true});
            this.toastHide();
            this.setState({showPayForm: true})

        }).catch(err => {

            this.setState({
                errorMsg: 'Oh well, sending failed',
                showToast: true
            });
            this.toastHide()
        });
        this.resetForm();
    };

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({[param]: e.target.value})
    };

    toastHide = () => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({showToast: false});

        }, 6000)
    };


    render() {
        const {
            UI: {loading},
            user: {authenticated}
        } = this.props;
        const {errors} = this.state;
        return (
            <div className="askALawyer">
                <div className="toastWrap">

                    {

                        this.state.showToast ? (<Toast state={this.state.showToast}
                                                       body={this.state.errorMsg}/>) : null
                    }


                </div>

                <div className="askALawyerBanner">


                    <div className="txt">
                        Ask a lawyer
                    </div>
                </div>




               <div className="askALawyerWrap">
                        <div className="askALawyerIllustration">
                            <div className="imageWrap">

                                <img src={lawyerAi} alt="lawyer ai"/>
                            </div>
                        </div>

                        <div>
                            <div className="text">
                                Need legal advise? Ask a lawyer

                            </div>
                            <div className="smalltxt"> The fields marked * are required</div>
                            <div className="contactFormWrap">
                                <div className="askALawyerForm">
                                    <form onSubmit={this.handleSubmit.bind(this)}>

                                        <div className="inputWrap">
                                            <label form="fName">* Your Name</label>
                                            <div className="inputCont">
                                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                                <input id="fName" placeholder="Your Name" name="name" type="text"
                                                       value={this.state.name}
                                                       onChange={this.handleChange.bind(this, 'name')}
                                                required/>

                                            </div>
                                            <div className="errors">


                                            </div>

                                        </div>

                                        <div className="inputWrap">
                                            <label form="fName">* Title</label>
                                            <div className="inputCont">
                                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                                <input id="fName" placeholder="Title" name="name" type="text"
                                                       value={this.state.title}
                                                       onChange={this.handleChange.bind(this, 'title')}
                                                required/>

                                            </div>
                                            <div className="errors">


                                            </div>

                                        </div>


                                        <div className="inputWrap">
                                            <label form="fName">* Your Email</label>
                                            <div className="inputCont">
                                                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                                <input id="email" placeholder="Your Email" name="email"
                                                       value={this.state.email} type="email"
                                                       onChange={this.handleChange.bind(this, 'email')}
                                                required/>

                                            </div>
                                            <div className="errors">


                                            </div>

                                        </div>


                                        <div className="inputWrap">
                                            <label htmlFor="bizLocation">*Your message </label>
                                            <div className="textCont">

                                    <textarea maxLength="300" id="review"
                                              onChange={this.handleChange.bind(this, 'message')}
                                              placeholder="Your message" name="review" cols="3"
                                              value={this.state.message} required>

                                    </textarea>

                                            </div>

                                            <div className="errors">


                                            </div>

                                        </div>



                                        {
                                            authenticated ? (  <div className="bottomForm">

                                                <button type="submit"> Send</button>


                                            </div>) : (<div className="notice">Please login to Ask a lawyer</div>)
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        );
    }
}

AskALawyer.propTypes = {
    createReview: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    UI: state.UI, state,
    user: state.user,
});

const mapActionsToProps = {
    createReview, getUserData
};

export default connect(mapStateToProps, mapActionsToProps) (AskALawyer);