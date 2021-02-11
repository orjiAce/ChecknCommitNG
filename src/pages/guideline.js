import React, {Component} from 'react';
import '../style/desktop/guideline.scss';
import '../style/mobile/guidelineMob.scss';
import MyGuideline from "../contents/Guideline";
class Guideline extends Component {
    render() {
        return (
            <div className="guideline">
                <MyGuideline/>

                <div className="guidelineCont">

                </div>
            </div>
        );
    }
}

export default Guideline;