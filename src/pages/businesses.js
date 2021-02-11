import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBusinessData} from "../redux/actions/dataActions";
import PropTypes, {array} from "prop-types";
import axios from "axios";
import StaticProfileSkeleton from "../util/StaticProfileSkeleton";
import StaticProfile from "../components/profile/StaticProfile";
import '../style/desktop/business.scss';
import '../style/mobile/BusinessMobile.scss';
import Review from "../components/scream/Review";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faInfoCircle, faPen} from "@fortawesome/free-solid-svg-icons";
import BeautyStars from "beauty-stars";
import {Link} from "react-router-dom";
import {postScream, clearErrors} from '../redux/actions/dataActions';
import ScreamSkeleton from '../util/ScreamSkeleton';
import {Offline, Online} from "react-detect-offline";
import Toast from "../components/Toast";
import {toast} from "react-toastify";

let max_chars = 300;

class Businesses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            //authenticated: null,
            reviewIdParam: null,
            isModalOpen: false,
            ratings: 0,
            customerService: 0,
            selectedFiles: null,
            selectedFileTwo: null,
            selectedFileThree: null,
            body: '',
            title: '',
            errors: {},
            showToast: false,
            visible: 20,
            allRatings: {},
        };
        this.loadMore = this.loadMore.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }


    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
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
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({body: '', ratings: 0, customerService: 0, title: '', open: false, errors: {}});
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
    handleSubmit = (event) => {
        event.preventDefault();


        const {body, title, rating, customerService, selectedFiles, selectedFileTwo, selectedFileThree} = this.state;

        const userReview = {
            body: body,
            title: title,
            /*  image1: this.state.image1,*/
            business: this.props.match.params.business,
            rating: rating,
            customerService: customerService,
            // business:

        };

        const review = new FormData();

        if (this.state.selectedFiles !== null) {
            review.append(
                'imageOne', selectedFiles, selectedFiles.name
            );
        }
        if (this.state.selectedFileTwo !== null) {

            review.append('imageTwo', selectedFileTwo, selectedFileTwo.name);
        }
        if (this.state.selectedFileThree !== null) {
            review.append('imageThree', selectedFileThree, selectedFileThree.name);
        }

        //console.log(Array.from(this.state.selectedFiles));


        review.append('body', this.state.body);
        review.append('title', this.state.title);
        review.append('business', this.props.match.params.business);
        review.append('ratings', this.state.ratings);
        review.append('customerService', this.state.customerService);

        //console.log(this.state.selectedFile);
        if (userReview.ratings === 0 || userReview.customerService === 0) {
            toast.warn('Please select the ratings', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            this.props.postScream(review);
        }


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
        const {overallRate} = this.props;
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

        // overallRate &&
        // this.getOverallRating(this.props.overallRate);

    }

    getOverallRating = () => {
        /* Math.max.apply(Math, overallRate.map(function (o) {
              return o;
          }));
  */
        const {overallRate} = this.props;
        console.log(overallRate);
        /* overallRate.reduce((max, rate) => {
             return rate.value >= max.value ? rate : max;
         })*/
        const myRate = overallRate.reduce((p, c) => p.value > c.value ? p : c);
        // this.setState({allRatings: myRate});
        //   this.state.allRatings.(myRate);
        //return this.state.allRatings
    };

    render() {

        const {errors} = this.state;
        const {
            allBusiness: {
                reviews, followers,
                gallery, overallRate
            }
        } = this.props.data;

        const {
            authenticated,
            /* credentials: {handle, createdAt, firstName, lastName, imageUrl, phone, email, location},*/
        } = this.props.user;

        const {loading} = this.props.UI;

        const {isModalOpen} = this.state;


        let reviewMarkup = reviews &&
        !loading ?
            Object.keys(reviews).length > 0 ?
                (
                    reviews.slice(0, this.state.visible).map(review =>
                        <Review key={review.reviewId} review={review}/>)
                ) : (
                    <div className="SKEL">
                        {loading && (
                            <div className="bizCardSkel">
                                <ScreamSkeleton/>
                            </div>
                        )}

                    </div>
                ) : (<div className="bizCardSkel">
                <ScreamSkeleton/>
            </div>);


        return (


            <div className="businessPage">

                <div className="toastWrap">


                    {
                        this.state.showToast && errors && (
                            <Toast body={errors.title || errors.body || errors.general || errors.message}/>)
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
                        <form onSubmit={this.handleSubmit} encType="multipart/form-data">


                            <div className="starWrap">

                                <BeautyStars
                                    size="20px"
                                    title={this.state.ratings}
                                    activeColor="#F6AE5B"
                                    value={this.state.ratings}
                                    onChange={ratings => this.setState({ratings})}
                                    required={true}/>
                                <label>* Overall Rating </label>

                            </div>

                            <div className="starWrap">

                                <BeautyStars
                                    size="20px"
                                    titl={this.state.customerService + 'good'}
                                    activeColor="#F6AE5B"
                                    value={this.state.customerService}
                                    onChange={customerService => this.setState({customerService})}
                                    required={true}/>
                                <label htmlFor="bizLocation">* Customer service </label>

                            </div>
                            <div className="inputWrap">


                                <div className="inputCont">

                                    <input id="title" maxLength="25" value={this.state.title}
                                           onChange={this.handleChange}
                                           placeholder="Title of review" name="title" type="text"
                                           required={true}/>

                                </div>


                            </div>

                            <div className="inputWrap">

                                <div className="textAreaCont">

                                <textarea id="body" value={this.state.body} onChange={this.handleChange}
                                          onKeyPress={this.handleCount.bind(this)} placeholder="Your review" name="body"
                                          maxLength="300" required={true}>
                                </textarea>
                                    <div className="charCount">
                                        <p>Characters Left: {this.state.chars_left}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="cameraText">
                                <p>* Attachment: At least two Proof of transaction</p>
                            </div>

                            <div className="fileInputWrap">
                                <div className="upload-btn-wrapper">

                                    <input type="file" name="image" onChange={this.fileChangedHandler} required={true}/>
                                </div>
                                <br/>
                                <div className="upload-btn-wrapper">

                                    <input type="file" name="file" onChange={this.fileChangedHandlerTwo}
                                           required={true}/>

                                </div>
                                <br/>
                                <div className="upload-btn-wrapper">

                                    <input type="file" name="proof" onChange={this.fileChangedHandlerThree}/>
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
                                    <StaticProfile profile={this.state.profile} overallRate={overallRate}
                                                   followers={followers} reviews={reviews}
                                                   authenticated={authenticated}/>
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
                                        gallery.map((({imageId, imageUrl, imageName}) => (
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
                            Reviews ({reviews && Object.keys(reviews).length})
                        </section>
                        <div className="reviewCont">
                            {reviewMarkup}
                        </div>

                        <div>
                            {reviews && this.state.visible < Object.keys(reviews).length &&
                            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                            }
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
    UI: state.UI,

    overallRate: state.data.allBusiness.overallRate


});


export default connect(
    mapStateToProps,
    {postScream, clearErrors, getBusinessData}
)(Businesses);