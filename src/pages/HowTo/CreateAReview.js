import React, {Component} from 'react';
import '../../style/desktop/HowTo.scss';
import holdingRev from '../../images/HoldingReviews.png'
import CreateReview from "../../components/StepByStepCreateRev";
class HowToCreateReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CreateReview
        }
    }
    render() {
        return (
            <div className="howTo">
                <div className="bannerHowTo">
                    <div className="title">How To Create A Review</div>
                </div>


                <div className="howToCreateReview">

                    <div className="title">

                    </div>
                    <div className="timelineWrap">
                        <section className="timeline">
                            {
                                CreateReview.map((({content, id,imageUrl, stepNum}) =>(
<section>
                                    <div className="stepNum">
                                        &bull; {stepNum}
                                    </div>
                                    <div className="box">
                                <div className="image">
                                <img src={imageUrl} alt="how to illustration"/>
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

export default HowToCreateReview;

