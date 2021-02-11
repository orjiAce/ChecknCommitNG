import React, {Component} from 'react';
import * as emailjs from "emailjs-com";
import Toast from "../components/Toast";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import adImage from "../images/advert.png";

class AdvertInquire extends Component {
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
            to_name: 'ChecknCommit',
            subject: subject,
            message_html: message,
        };
        emailjs.send(
            'gmail',
            'advert_enquiry',
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
            <div className="adInquire">
                <div className="toastWrap">

                    {

                        this.state.showToast ? (<Toast state={this.state.showToast}
                                                       body={this.state.errorMsg}/>) : null
                    }


                </div>

                <div className="contactUsBanner">
                    <div className="image">
                        <img src={adImage} alt="ad image"/>
                    </div>
                    <div className="txt">
                        Advertise with us
                    </div>
                </div>

                <div className="contactWrap">
                    <div className="text">
                        ENQUIRE ON ADVERTS

                    </div>
                    <div className="smalltxt"> The fields marked * are required</div>
                    <div className="contactFormWrap">
                        <div className="contactForm">
                            <form onSubmit={this.handleSubmit.bind(this)}>

                                <div className="inputWrap">
                                    <label form="fName">* Your Name</label>
                                    <div className="inputCont">
                                        <FontAwesomeIcon icon={faUser} className="icon"/>
                                        <input id="fName" placeholder="*Your Name" name="name" type="text" value={this.state.name}  onChange={this.handleChange.bind(this, 'name')}
                                        required={true}/>

                                    </div>
                                    <div className="errors">


                                    </div>

                                </div>


                                <div className="inputWrap">
                                    <label form="fName">* Your Email</label>
                                    <div className="inputCont">
                                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                        <input id="email" placeholder="Your Email" name="email" value={this.state.email} type="email" onChange={this.handleChange.bind(this, 'email')}
                                        required/>

                                    </div>
                                    <div className="errors">


                                    </div>

                                </div>



                                <div className="inputWrap">
                                    <label htmlFor="bizLocation">*Your message </label>
                                    <div className="textCont">

                                    <textarea  maxLength="200" id="review" onChange={this.handleChange.bind(this, 'message')}
                                               placeholder="Your message" name="review" cols="3" value={this.state.message} required>

                                    </textarea>

                                    </div>

                                    <div className="errors">


                                    </div>

                                </div>

                                <div className="bottomForm">

                                    <button type="submit"> Send </button>



                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvertInquire;