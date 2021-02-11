import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/desktop/contact.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHeading, faPaperPlane, faUser} from "@fortawesome/free-solid-svg-icons";
import * as emailjs from 'emailjs-com'
import Toast from "../components/Toast";

class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            showToast: false,
            errorMsg:'',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        let templateParams = {
            from_name: name,
            userEmail: email,
            replyTo: email,
            to_name: 'ChecknCommit',
            subject: subject,
            message_html: message,
        };
        emailjs.send(
            'gmail',
            'template_2DvsV6P3',
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
        this.setState({ [param]: e.target.value })
    };

    toastHide = () => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({showToast: false});

        }, 6000)
    };


    render() {

        return (
            <div className="contact">
                <div className="toastWrap">

                    {

                        this.state.showToast ? (<Toast state={this.state.showToast}
                                                       body={this.state.errorMsg}/>) : null
                    }


                </div>
                <div className="contactUsBanner">
                    <div className="txt">
                        Contact us
                    </div>
                </div>

                <div className="contactWrap">
                    <div className="text">
                        Send Us A Message

                    </div>
                    <div className="smalltxt"> The fields marked * are required</div>
                    <div className="contactFormWrap">
                        <div className="contactForm">
                            <form onSubmit={this.handleSubmit.bind(this)}>

                                <div className="inputWrap">
                                    <label form="fName">* Your Name</label>
                                    <div className="inputCont">
                                        <FontAwesomeIcon icon={faUser} className="icon"/>
                                        <input id="fName" placeholder="Your Name" name="name" type="text" value={this.state.name}
                                               onChange={this.handleChange.bind(this, 'name')}
                                               required={true}/>

                                    </div>
                                    <div className="errors">


                                    </div>

                                </div>


                                <div className="inputWrap">
                                    <label form="fName">* Your Email</label>
                                    <div className="inputCont">
                                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                        <input id="email" placeholder="Your Email" name="email" value={this.state.email}
                                               type="email" onChange={this.handleChange.bind(this, 'email')}
                                       required={true} />

                                    </div>
                                    <div className="errors">


                                    </div>

                                </div>

                                <div className="inputWrap">
                                    <label form="subject">* Subject</label>
                                    <div className="inputCont">
                                        <FontAwesomeIcon icon={faHeading} className="icon"/>
                                        <input id="subject" placeholder="Your subject" name="subject" value={this.state.subject}
                                               type="text" onChange={this.handleChange.bind(this, 'subject')}
                                       required={true} />

                                    </div>
                                    <div className="errors">


                                    </div>

                                </div>



                                <div className="inputWrap">
                                    <label htmlFor="bizLocation">*Message  </label>
                                    <div className="textCont">

                                    <textarea  maxLength="300" id="review" onChange={this.handleChange.bind(this, 'message')}
                                               placeholder="Your Message (300 characters limit)" name="review" cols="3" value={this.state.message}  required={true}>

                                    </textarea>

                                    </div>

                                    <div className="errors">


                                    </div>

                                </div>

                                <div className="bottomForm">

                                        <button type="submit"> Send <FontAwesomeIcon icon={faPaperPlane} /></button>



                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
