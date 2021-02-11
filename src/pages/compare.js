import React, {Component} from 'react';
import '../style/desktop/ComparePage.scss'
import compareImage from '../images/Group 319.png'
import Review from "../components/scream/Review";
import Business from "../components/layout/Business";

const Compare = (props) => {


    const {businesses, reviews, businessToCompare} = props;

    return (
        <div className="comparePage">
            <div className="compareBannerWrap">


                <div className="compareBanner">

                    <section className="compareTexts">
                        <div className="title">
                            Compare
                            Business
                        </div>
                        <div className="subTitle">
                            What users are saying about
                        </div>

                        <div className="compareBizHandle">
                            {
                                businesses.map(biz => (<div className="bizHandle">{biz.bizHandle}</div>))
                            }


                        </div>

                        <div>

                        </div>
                    </section>

                    <section className="images">

                        <img src={compareImage} alt="compare image"/>
                    </section>
                </div>
            </div>
            <div className="compareTitle">
                Compare between three different businesses
            </div>

            <div className="compareContent">
                <div className="title">
                        Businesses
                </div>
                <section className="bizNess">
                    {
                        businessToCompare &&
                        Object.keys(businessToCompare).length > 0  ? businessToCompare.map(business => (<Business key={business.bizId} business={business}/>)) : ('')

                    }

                </section>
                <div className="title">
                    Reviews
                </div>
                <section className="reviews">
                    {
                        reviews &&
                        Object.keys(reviews).length > 0  ? reviews.map((review) => (
                            <Review key={review.reviewId} review={review}/>)) : (<div>No reviews yet</div>)

                    }

                </section>


            </div>
        </div>
    );

};



export default Compare;