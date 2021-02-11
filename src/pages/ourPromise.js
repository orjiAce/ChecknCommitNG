import React, {Component} from 'react';
import OurCommitment from "../contents/ourCommitment";
import '../style/desktop/ourCommitment.scss';
import {Link} from "react-router-dom";

class OurPromise extends Component {
    render() {
        return (
            <div className="ourCommitment">

                <OurCommitment/>

                <div className="statement">

                    <div className="commitment">


                    <div className="title">
                        <h2>ChecknCommit®</h2>
                    </div>

                    <div className="Para">
                        <h3> Our Commitment to You.</h3>
                        <p> What is the impression of your business that you want people to have when they search for
                            you online?</p>
                        <br/>
                        <p>ChecknCommit® allows you to create, manage, and update your online Business Profile
                            as well as enabling you to engage with existing and potential customers. All you need to get
                            started is a mobile phone,
                            a tablet or a computer; the rest is totally free.</p>
                    </div>

                    <div className="Para">
                        <h4>Our Vision.</h4>
                        <p>
                            We envisage an online platform where consumers can have TOTAL trust in the reviews,
                            recommendations and feedback of other buyers and Business.
                            A platform where you can confidently buy and sell pre-owned items of clothing, appliances
                            and household items; or find accommodation for rent.
                        </p><br/>

                        <h4>Our Mission.</h4>
                        <p>
                            It is our mission to become the number one platform for online shoppers and users of
                            services across the world.

                            In order to achieve this we will:
                        </p>
                        <div>
                            <ul>
                                <li> Provide standards of COMPLETE trust, transparency and objectivity.</li>
                                <li> Hold to account those with questionable transaction ethics.</li>
                                <li> Create a community of the most reputable businesses and brands.</li>
                                <li> Demand honest, balanced and detailed feedback and recommendations for improvement
                                    of service.
                                </li>
                                <li> Provide free consultation with a lawyer.</li>
                                <li> Provide easy and stress-free access to sell used goods.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="Para">
                        <h4>
                            What Do We Do?
                        </h4>
                        <p>
                            You may be considering the relevance of feedback and why it is so important.
                            The first thing you should be aware of is this; 80% of online shoppers consider feedback
                            before making a purchase. Therefore, the more positive feedback you have, the more likely
                            you are of convincing new customers to buy your goods or services.
                        </p>
                        <br/>
                        <p> There are two aspects of ChecknCommit®; a review site and a site for the buying and selling
                            of pre-owned goods. We provide you with a trusted platform where you will have all the
                            unbiased, in-depth information you need to make the right consumer-based decisions about
                            purchasing similar products.
                        </p>
                        <br/>
                        <p> Our emphasis on INTEGRITY through our review and feedback process is key. We strive to make
                            sure all that you read on ChecknCommit® is honest, open and objective opinion of actual
                            buyers and Business.
                        </p>
                    </div>

                    <div className="Para">
                        <h4>How Do We Do It?</h4>

                        <p>
                            One of the most important things a business can do is to engage with its customers in
                            shaping the online conversation. They can do this easily and conveniently on ChecknCommit®.
                            This will allow a business to assess what the customers want and, therefore, shape their
                            product or service development accordingly.
                        </p><br/>
                        <p> We ensure honest and genuine interactions on our platform by adopting the following
                            principles:
                        </p>
                    </div>

                    <div className="Para">
                        <h4>Transaction Verification</h4>
                        <p>
                            We only allow reviews that are backed up by evidence of an actual, unique transaction.
                            Buyers must provide the following information in order to submit reviews:
                        </p>
                        <div>
                            <ul>
                                <li> Proof of transaction.</li>
                                <li> Payment method.</li>
                                <li> Image of the product (if applicable).</li>
                                <li>Any branded packaging.</li>
                                <li> Screenshot of online transaction.</li>
                                <li> Any relevant online communications with a Business.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="Para">
                        <h4> Authenticating a Review</h4>
                        <p>
                            We will ensure that all reviews are authentic before they are posted; this is to
                            protect Business against any unscrupulous buyers or fraudulent reviews. It also ensures
                            that all reviews posted provide value to other users and are not abusive or aggressive in
                            their content. Such reviews will NEVER get published.
                        </p>
                    </div>

                    <div className="Para">
                        <h4>Reviews Are ‘Set In Stone’</h4>

                        <p> Once a review is authenticated and has been posted, it cannot be removed; even if a product
                            has been discontinued. This means that Business will have reviews tagged to their profiles
                            to provide a history of their performance.

                        </p><br/>
                        <h4>Minimize Business’ Influence</h4>

                        <p> We make every effort to minimize the influence that Business have over controlling the level
                            of feedback. Business/organisation countering a negative review by over-matching it with
                            multiple positive fake reviews is not acceptable behaviour in the ChecknCommit® community.
                        </p>

                        <p> Business/organisation can, of course, encourage satisfied customers to leave positive
                            reviews, but they will be subject to the authentication process detailed above. This assists
                            us in maintaining a transparent, trustworthy and valued review platform.
                        </p>
                        <br/>
                        <p><b>We Encourage Active and Transparent Business Involvement</b></p>
                        <br/>
                        <p>As our main aim is to provide a trusted community environment for business and buyers, we
                            insist on all products and services being represented accurately and fairly.
                        </p>
                        <br/>
                        <p><em>We encourage business to:?</em></p>
                        <br/>
                        <div>
                            <ul>
                                <li> List their products according to our listing requirements.</li>
                                <li> Invite their existing customers to submit reviews.</li>
                                <li>Publicly comment on the reviews that have been received.</li>
                                <li> Keep their profile and listings up-to-date.</li>
                            </ul>
                        </div>
                        <p><em> We discourage business from:</em></p>
                        <br/>
                        <div>
                            <ul>
                                <li>Offering incentives to buyers for submitting positive reviews.</li>
                                <li> Commenting on reviews received by one of their competitors.</li>
                                <li> Attempting to ‘buy’ influence with ChecknCommit®.</li>
                            </ul>
                        </div>
                        <p> ChecknCommit® values the integrity of its platform and the trust of its community above
                            everything else. Any form of deceit or misinformation will not be tolerated from both
                            businesses and buyers. There are further details on our policies on this matter on our <Link to='/faq'>FAQs </Link>
                            page.
                            We always appreciate hearing from our community members and if you would like to <Link to='/contact-us'>contact us </Link>
                            please do.
                        </p>
                    </div>

                </div>
                </div>

            </div>
        );
    }
}

export default OurPromise;