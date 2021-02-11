import React, {Component} from 'react';
import '../style/desktop/createReview.scss';
import '../style/mobile/createReviewMob.scss';
import BeautyStars from 'beauty-stars';
import illustration from '../images/ai/Group 852@2x.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Offline, Online} from "react-detect-offline";
import {
    faAt,
    faBriefcase,
    faEnvelope,
    faHeading, faInfo,
    faMapPin, faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Categories from "../components/Categories";
import PropTypes from "prop-types";
import {getUserData} from "../redux/actions/userActions";
import {connect} from "react-redux";
import {createReview} from "../redux/actions/dataActions";
import Toast from "../components/Toast";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from "react-phone-input-2";
import {Button, Combobox, SelectMenu} from "evergreen-ui";
import category from "./category";

let max_chars = 300;


class CreateReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            AddressOne: '',
            customerService: 0,
            ratings: 0,
            category: "",
            SMHandle: "",
            businessName: '',
            body: '',
            phone: '',
            title: '',
            replies: 0,
            reportCount: 0,
            loading: false,
            selectedFiles: null,
            selectedFileTwo: null,
            selectedFileThree: null,
            selected: '',
            errors: {}
        };

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({body: '', ratings: 0, customerService: 0, title: '', open: false, errors: {}});
        }

    }


    getInitialState = () => {
        return {
            chars_left: max_chars
        };
    };

    handleChange = (event) => {
        // var input = event.target.value;
        this.setState({
            [event.target.name]: event.target.value,
            //chars_left: max_chars - input.length
        });
    };

    fileChangedHandler = event => {
        this.setState({selectedFiles: event.target.files[0]});
        console.log(this.state.selectedFiles);
        console.log(Array.from(event.target.files))
    };

    fileChangedHandlerTwo = event => {
        this.setState({selectedFileTwo: event.target.files[0]});
        console.log(this.state.selectedFileTwo);
        console.log(Array.from(event.target.files))
    };
    fileChangedHandlerThree = event => {
        this.setState({selectedFileThree: event.target.files[0]});
        console.log(this.state.selectedFileThree);
        console.log(Array.from(event.target.files))
    };

    handleCount(event) {
        const input = event.target.value;
        this.setState({
            chars_left: max_chars - input.length
        });
    }


    emailValidation = () =>{
        const {email} = this.state;
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email) === false) {

            toast.error('Please enter a valid email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {
            businessName, AddressOne, email, category, phone, SMHandle, body, selectedFiles, selectedFileTwo,
            selectedFileThree, title, ratings, customerService
        } = this.state;

        const newReviewData = {
            email: email,
            category: category,
            SMHandle: SMHandle,
            AddressOne: AddressOne,
            body: body,
            title: title,
            phone: phone,
            ratings: ratings,
            businessName: businessName,
            customerService: customerService
        };

        const reviewData = new FormData();
        reviewData.append('businessName', businessName.trim());
        reviewData.append('AddressOne', AddressOne);
        reviewData.append('email', email);
        reviewData.append('category', category);
        reviewData.append('SMHandle', SMHandle);
        reviewData.append('body', body);
        reviewData.append('title', title);
        reviewData.append('phone', phone);
        reviewData.append('business', this.props.match.params.business);
        reviewData.append('ratings', ratings);
        reviewData.append('customerService', customerService);






        if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(businessName)) {
            toast.error('Business Name cannot contain special characters', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }

        if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(SMHandle)) {

            toast.error('Social media handle cannot contain special characters or spaces', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }


        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email) === false) {

            toast.error('Please enter a valid email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }


        if (category.length < 1) {
            toast.error('Please select a category', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }
        if (ratings === 0 || customerService === 0) {
            toast.error('Please add rating', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return;
        }




        if (this.state.selectedFiles !== null) {
            if (selectedFiles.name.match(/\.(jpg|jpeg|png)$/)) {
                reviewData.append(
                    'image', this.state.selectedFiles, this.state.selectedFiles.name
                );


            } else {
                toast.error('Invalid image type (allowed file type jpg,png,jpeg)', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                return;
            }
        }


        if (this.state.selectedFileTwo !== null) {
            if (selectedFileTwo.name.match(/\.(jpg|jpeg|png)$/)) {
                reviewData.append('file', this.state.selectedFileTwo, this.state.selectedFileTwo.name);


            } else {
                toast.error('Invalid image type (allowed file type jpg,png,jpeg)', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
        }
        if (this.state.selectedFileThree !== null) {
            if (selectedFileThree.name.match(/\.(jpg|jpeg|png)$/)) {
                reviewData.append('proof', this.state.selectedFileThree, this.state.selectedFileThree.name);

            } else {
                toast.error('Invalid image type (allowed file type jpg,png,jpeg)', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
        }


           // alert('message!')
            this.props.createReview(reviewData);

        // this.setState({ body: '',ratings: 0, customerService: 0, title: '', AddressOne: '', businessName: '', SMHandle:'',email:'' });

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
            user: {authenticated},

        } = this.props;
        const {errors} = this.state;
        return (
            <div className="createReview">


                <div className="toastWrap">

                    {
                        this.state.showToast && errors && (<Toast body={errors.message}/>)
                    }

                </div>


                <div className="illustration">
                    <div className="titleTxt">
                        CREATE A REVIEW
                    </div>


                    <div className="bottomText">
                        <p className="note"><FontAwesomeIcon icon={faInfo}/> NOTE</p><br/>
                        <p> You must create a review using the business or organization registered name or social media
                            name.
                        </p><br/>

                        <p>
                            ARE YOU SURE THE BUSINESS YOU ARE ABOUT TO CREATE A REVIEW FOR IS NOT ALREADY LISTED IN THE
                            CATEGORY SECTION?
                        </p>
                    </div>


                    <div className="aiImg">
                        <img src={illustration} alt="image"/>
                    </div>
                </div>


                <div className="createRevformWrap">
                    <div className="fillTxt">
                        <section><FontAwesomeIcon icon={faBriefcase}/></section>
                        &nbsp;
                        <div>Fill details below</div>
                    </div>
                    <small>
                        The fields marked * are required
                    </small>
                    <div className="formContainer">
                        <form className="form" onSubmit={this.handleSubmit} encType="multipart/form-data">


                            <div className="inputWrap">
                                <label htmlFor="bizName">* Business Name or social media name</label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                                    <input id="bizName" placeholder="Business Name or social media name"
                                           value={this.state.businessName} onChange={this.handleChange}
                                           name="businessName" type="text"
                                           required/>

                                </div>

                                <div className='notice'><small>Business name should only contain letters</small></div>
                                <div className="errors">


                                </div>
                            </div>


                            <div className="inputWrap">
                                <label htmlFor="bizName">* Social media handle</label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faAt} className="icon"/>
                                    <input id="bizName" placeholder="Business Social media handle"
                                           value={this.state.SMHandle}
                                           onChange={this.handleChange} name="SMHandle" type="text"
                                    required/>

                                </div>

                                <div className='notice'><small>This should not contain spaces</small></div>
                                <div className="errors">


                                </div>

                            </div>


                            <div className="inputWrap">
                                <label htmlFor="bizName">Business Email</label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                                    <input id="bizEmail" value={this.state.email} onChange={this.handleChange}
                                           placeholder="Business Email"  name="email" type="email"
                                    />

                                </div>

                                <div className="errors">


                                </div>
                            </div>

                            <div className="inputWrap">
                                <label form="email">Your Phone number</label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    <PhoneInput
                                        country={'ng'}
                                        value={this.state.phone}
                                        onChange={phone => this.setState({phone})}
                                        inputProps={{
                                            name: 'phone',
                                            autoFocus: true
                                        }}
                                    />
                                </div>

                                <div className="errors">


                                </div>
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="bizLocation">* Location </label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faMapPin} className="icon"/>
                                    <input id="bizLocation" value={this.state.AddressOne} onChange={this.handleChange}
                                           placeholder="Location" name="AddressOne" type="text"
                                           required={true}/>

                                </div>
                                <div className="errors">


                                </div>
                            </div>


                            {/*        <div className="inputWrap">
                                <label htmlFor="bizCategory">* Category of business </label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faSort} className="icon"/>


                                    <select id="bizCategory" className="category" type="text"
                                            onChange={this.handleChange} placeholder="*Category"
                                            name="category" value={this.state.category}
                                            required>

                                        {

                                            Categories.map((({name})=>(

                                                <option value={name}>
                                                    {name}
                                                </option>
                                            )))
                                        }

                                    </select>

                                </div>
                                <div className="errors">


                                </div>
                            </div>*/}

                            <div className="inputWrap">
                                <label htmlFor="bizCategory">* Category of business </label>
                                <SelectMenu

                                    width={240}
                                    title="Select name"
                                    options={
                                        Categories
                                            .map((({name}) => ({label: name, value: name})))

                                    }
                                    closeOnSelect={true}
                                    selected={this.state.category}
                                    onSelect={selected => this.setState({category: selected.value})}
                                    filterPlaceholder={"Choose a category"}
                                    filterIcon={"list"}>
                                    <Button>{this.state.category || 'Choose a category...'}</Button>
                                </SelectMenu>
                                <div className="errors">


                                </div>
                            </div>


                            {/*     <div className="fileInputWrap">
                                <label>Business Logo</label>
                                <div className="upload-btn-wrapper">
                                    <button className="btn"><FontAwesomeIcon icon={faCamera}/></button>
                                    <input type="file" name="myfile"/>
                                </div>
                                <div className="errors">


                                </div>
                            </div>*/}

                            <div className="inputWrap">

                                <BeautyStars
                                    titl={this.state.rating + 'good'}
                                    activeColor="#F6AE5B"
                                    value={this.state.ratings}
                                    onChange={ratings => this.setState({ratings})}
                                    required={true}/>
                                <label htmlFor="bizLocation">* General Ratings </label>

                            </div>

                            <div className="inputWrap">

                                <BeautyStars
                                    titl={this.state.customerService + 'good'}
                                    activeColor="#F6AE5B"
                                    value={this.state.customerService}
                                    onChange={customerService => this.setState({customerService})}
                                    required/>
                                <label htmlFor="bizLocation">* Customer service </label>

                            </div>

                            <div className="inputWrap">
                                <label htmlFor="bizLocation">* Title of review </label>
                                <div className="inputCont">
                                    <FontAwesomeIcon icon={faHeading} className="icon"/>
                                    <input id="title" placeholder="Title" name="title" value={this.state.title}
                                           onChange={this.handleChange} type="text"
                                           required={true}/>

                                </div>
                                <div className="errors">


                                </div>

                            </div>


                            <div className="inputWrap">
                                <label htmlFor="bizLocation">* Review </label>
                                <div className="textCont">

                                    <textarea maxLength="300" value={this.state.body} onChange={this.handleChange}
                                              id="review" placeholder="Review" name="body" cols="3"
                                              onKeyPress={this.handleCount.bind(this)} required={true}/>


                                    <div className="charCount">
                                        <p>Characters Left: {this.state.chars_left}</p>
                                    </div>
                                </div>

                                <div className="errors">


                                </div>

                            </div>

                            <div className="fillTxt">
                                <small>

                                    Please it is compulsory you must attach at least two photo/document evidence of
                                    transaction or product bought from business owner.
                                </small>
                            </div>

                            <div>
                                <br/>
                                <b>

                                    *Images
                                </b>
                            </div>
                            <div className="fileInputWrap">

                                <div className="upload-btn-wrapper">
                                    <label htmlFor='imageOne' className='notice'> <small>*This field is required</small>
                                    </label>
                                    <input type="file" id='imageOne' name="myfile" onChange={this.fileChangedHandler}
                                           required={true}/>


                                </div>

                                <div className="upload-btn-wrapper">
                                    <label htmlFor='imageTwo' className='notice'> <small>*This field is required</small>
                                    </label>
                                    <input type="file" id='imageTwo' name="myfile" onChange={this.fileChangedHandlerTwo}
                                           required={true}/>
                                </div>

                                <div className="upload-btn-wrapper">

                                    <input type="file" name="myfile" onChange={this.fileChangedHandlerThree}/>
                                </div>
                            </div>


                            <div className="bottomForm">
                                <Online>
                                    {
                                        !authenticated ? (
                                            <div>Please <Link to='/login'>login</Link> Or <Link to='/signup'>Register</Link> to create review</div>) : (
                                            <div>
                                                <button type="submit"> Submit Your review</button>
                                            </div>

                                        )
                                    }

                                </Online>
                              {/*  <div>
                                    <button type="submit"> CHECK</button>
                                </div>*/}

                                <Offline>
                                    <div>
                                        <button type="button" disabled={true}> OFFLINE</button>
                                    </div>
                                </Offline>
                            </div>
                            <br/>
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

            </div>
        );
    }
}

CreateReview.propTypes = {
    createReview: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    UI: state.UI, state,
    user: state.user,
    data: state.data
});

const mapActionsToProps = {
    createReview, getUserData
};

export default connect(mapStateToProps,
    mapActionsToProps)(CreateReview);