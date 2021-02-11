import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBusinessData} from "../redux/actions/dataActions";
import PropTypes from "prop-types";
import axios from "axios";
import StaticProfileSkeleton from "../util/StaticProfileSkeleton";
import StaticProfile from "../components/profile/StaticProfile";
import '../style/desktop/business.scss';
import '../style/mobile/BusinessMobile.scss';
import Review from "../components/scream/Review";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faInfoCircle, faPen} from "@fortawesome/free-solid-svg-icons";

import BeautyStars from "beauty-stars";

import { Link} from "react-router-dom";

import {postScream, clearErrors} from '../redux/actions/dataActions';
import ScreamSkeleton from '../util/ScreamSkeleton';
import {Offline, Online} from "react-detect-offline";
import Toast from "../components/Toast";


let max_chars = 200;
class Businesses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            //authenticated: null,
            reviewIdParam: null,
            isModalOpen: false,
            image1: 'https://firebasestorage.googleapis.com/v0/b/react-test-95548.appspot.com/o/975010400395.jpeg?alt=media',
            rating: 0,
            customerService: 0,
            body: '',
            title: '',
            error: null,
            errors: {},
            showToast: false

        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }




    getInitialState = () => {
        return {
            chars_left: max_chars
        };
    };

    //counting numbers of characters in the review textarea
    handleCount(event) {
        const input = event.target.value;
        this.setState({
            chars_left: max_chars - input.length
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ body: '',ratings: 0, customerService: 0, title: '', open: false, errors: {} });
        }

    }



    handleOnChange(event) {

        return this.setState({value: event.target.value});
    }


    handleModalOpen = () => {
        if (this.state.isModalOpen === false) {
            this.setState({
                isModalOpen: true
            })
        }
    };


    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
        });

    };


    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        });

        this.toastHide();
        this.setState({
            showToast: true
        });


        const userReview = {
            body: this.state.body,
            title: this.state.title,
            /*  image1: this.state.image1,*/
            business: this.props.match.params.business,
            rating: this.state.rating,
            customerService: this.state.customerService,
            // business:

        };
        this.props.postScream(userReview);

    };



    toastHide = () => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({showToast: false});

        }, 6000)
    };


    closeModal = () => {
        this.props.clearErrors();
        if (this.state.isModalOpen === true) {
            this.setState({
                isModalOpen: false
            })


        }
    };


    componentDidMount() {
        //this.getInitialState();
        const business = this.props.match.params.business;
        const reviewId = this.props.match.params.reviewId;

        if (reviewId) this.setState({reviewIdParam: reviewId});

        console.log(this.props.getBusinessData(business));
        axios
            .get(`/businesses/${business}`)
            .then((res) => {
                this.setState({
                    profile: res.data.business
                });
            })
            .catch((err) => console.log(err));

    }

    render() {
        const {errors} = this.state;
        const {allBusiness:{
            reviews,
            gallery},
            loading} = this.props.data;
        const {
            authenticated,
            /* credentials: {handle, createdAt, firstName, lastName, imageUrl, phone, email, location},*/
        } = this.props.user;
        const { docSize} = this.state;


        const {isModalOpen} = this.state;


        let reviewMarkup = reviews &&
        Object.keys(reviews).length > 0 ?
            !loading ? (
                reviews.map((review) => <Review key={review.reviewId} review={review}/>)
            ) : reviews === null ? (
                    <h3>No Reviews Yet</h3>)
                : (
                    <div className="SKEL">
                        {loading && (
                            <div className="bizCardSkel">
                                <ScreamSkeleton/>
                            </div>
                        )}

                    </div>
                ) : (  <div className="bizCardSkel">
                <ScreamSkeleton/>
            </div>);

        return (


            <div>

                <div className="toastWrap">

                    {
                        this.state.showToast && errors && (<Toast body={errors.title || errors.body || errors.general || errors.message}/>)
                    }


                </div>

                {isModalOpen === true ? (<div className="modal">
                    <div className="postReviewForm">

                        <div className="title">
                            Review this business
                        </div>
                        <small>
                            The fields marked * are required
                        </small>
                        <form noValidate onSubmit={this.handleSubmit} encType="multipart/form-data">


                            <div className="starWrap">

                                <BeautyStars
                                    size="20px"
                                    title={this.state.rating}
                                    activeColor="#F6AE5B"
                                    value={this.state.rating}
                                    onChange={rating => this.setState({rating})}
                                />
                                <label>* Overall Rating </label>

                            </div>

                            <div className="starWrap">

                                <BeautyStars
                                    size="20px"
                                    titl={this.state.customerService + 'good'}
                                    activeColor="#F6AE5B"
                                    value={this.state.customerService}
                                    onChange={customerService => this.setState({customerService})}
                                />
                                <label htmlFor="bizLocation">* Customer service </label>

                            </div>
                            <div className="inputWrap">


                                <div className="inputCont">

                                    <input id="title" value={this.state.title} onChange={this.handleChange}
                                           placeholder="Title of review" name="title" type="text"
                                    />

                                </div>


                            </div>

                            <div className="inputWrap">

                                <div className="textAreaCont">

                                <textarea id="body" value={this.state.body} onChange={this.handleChange}
                                          onKeyPress={this.handleCount.bind(this)}  placeholder="Your review" name="body" maxLength="200">
                                </textarea>
                                    <div className="charCount">
                                        <p>Characters Left: {this.state.chars_left}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="cameraText">
                                <p>* Attachment: Proof of transaction</p>
                            </div>

                            <div className="fileInputWrap">
                                <div className="upload-btn-wrapper">
                                    <button className="btn"><FontAwesomeIcon icon={faCamera}/></button>
                                    <input type="file" name="image1" onChange={this.handleChange}/>
                                </div>
                                <div className="upload-btn-wrapper">
                                    <button className="btn"><FontAwesomeIcon icon={faCamera}/></button>
                                    <input type="file" name="myfile2"/>
                                </div>

                                <div className="upload-btn-wrapper">
                                    <button className="btn"><FontAwesomeIcon icon={faCamera}/></button>
                                    <input type="file" name="myfile3"/>
                                </div>
                            </div>



                            <div>
                                <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1"
                                       required={true}/>


                                <label htmlFor="styled-checkbox-1">
                                    Accept <Link to="/terms">terms</Link> and <Link
                                    to="/terms">conditions</Link></label>
                            </div>

                            <div className="warning">
                                Click stars to rate, add comment and pictures.
                                Avoid the use of abusive words. Review
                                will be blocked and user account suspended
                                if rule is violated.
                            </div>

                            <div className="postReviewBtn">
                                <Online>
                                    <button type="submit" className="reviewBtn"> Submit Your review</button>
                                </Online>
                                <button className="cancelBtn" onClick={this.closeModal}> Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>) : (<div>

                </div>)}


                <div className="businessBanner">
                    <section className="title">
                        Business Review


                    </section>
                    <section className="subs">
                        READ REVIEWS BY OTHER CUSTOMERS ABOUT THIS BUSINESS.
                    </section>
                    <section className="subs"> ALSO WRITE YOUR REVIEW BASED ON YOUR EXPERIENCE.


                    </section>
                </div>

                <div className="wrap">
                    <div className="staticProfileCont">
                        <section className="sub">
                            Business in review
                        </section>

                        {this.state.profile === null ? (
                            <StaticProfileSkeleton/>
                        ) : (
                            <div className="bizMiniProfile">
                                <div className="staticProfileWrap">
                                    <StaticProfile profile={this.state.profile}/>
                                    {authenticated === true ? (<section className="btnWrap">
                                        <Online>
                                            <button className="writeReview" onClick={this.handleModalOpen}> Write
                                                Review <FontAwesomeIcon icon={faPen}/></button>
                                        </Online>
                                        <Offline>
                                            <button className="writeReview"> Write
                                                Review <FontAwesomeIcon icon={faPen}/></button>
                                        </Offline>

                                    </section>) : (
                                        <div className="notice"><FontAwesomeIcon icon={faInfoCircle}/> Log in to post a
                                            review </div>)}

                                </div>
                                <div className="titleTxt">Gallery</div>

                                <div className="gallery">
                                    {

                                        gallery &&
                                        gallery.map((({imageId, imageUrl,imageName}) =>(
                                            <div className="image" key={imageId}>
                                                <img src={imageUrl} alt={imageName}/>
                                            </div>
                                        )))
                                    }

                                </div>

                            </div>

                        )}


                        {/*     <div className="gallery">

                        </div>*/}
                    </div>
                    <div className="reviewWrap">
                        <section className="reviewCount">
                            Reviews {docSize}
                        </section>
                        <div className="reviewCont">
                            {reviewMarkup}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


Businesses.propTypes = {
    getBusinessData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,

    postScream: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user,
    UI: state.UI
});


export default connect(
    mapStateToProps,
    {postScream, clearErrors, getBusinessData}
)(Businesses);



//