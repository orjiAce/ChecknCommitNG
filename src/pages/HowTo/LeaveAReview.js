import React, {Component} from 'react';
import '../../style/desktop/HowTo.scss'
import {Link} from "react-scroll";
import LeaveReview from "../../components/HowToLeaveRev";
import holdingRev from "../../images/HoldingReviews.png";
class HowLeaveAReview extends Component {

    render() {
        return (
            <div className="howTo">
                <div className="bannerHowTo">
                    <div className="title">How To Leave A Review</div>
                </div>

                <div className="leaveAReview">
                    <div className="title">

                    </div>
                    <div className="timelineWrap">
                        <section className="timeline">
                            {
                                LeaveReview.map((({content, id, imageUrl,stepNum}) =>(
                                    <section key={id}>
                                        <div className="stepNum">
                                            &bull; {stepNum}
                                        </div>
                                        <div className="box">
                                            <div className="image">
                                                <img src={imageUrl}/>
                                            </div>
                                            <div className="content">
                                                {content}
                                            </div>
                                        </div>
                                    </section>
                                )))
                            }
                        </section>
                    </div>
                </div>

            </div>
        );
    }
}

export default HowLeaveAReview;