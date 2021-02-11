import React, {Component} from 'react';
import '../style/desktop/howItWorks.scss';

import ItWorks from '../contents/HowItWorks';
class HowItWorks extends Component {

    render() {
        return (
            <div className="howItWorks">

                <div className="howItWorksBanner">
                    <div className="title">How Review Works
                    </div>
                    <svg height="300" viewBox="0 0 100% 300">
                        <path d="M0,0H1924V254.915S1367.667,320,886.667,320,0,254.915,0,254.915Z" fill="#051A12"/></svg>
                </div>


<ItWorks/>

            </div>
        );
    }
}

export default HowItWorks;