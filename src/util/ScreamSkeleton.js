import React, {Fragment} from 'react';
import NoImg from '../images/no-img.png';
import PropTypes from 'prop-types';
// MUI

import withStyles from '@material-ui/core/styles/withStyles';



const ScreamSkeleton = (props) => {


    const content = Array.from({length: 5}).map((item, index) => (
        <div className="reviewSkel" key={index}>
            <div className="mySkelCard">
                <div className="topLayer">
                    <section className="userImg">

                    </section>
                    <section className="sideBox">

                        <section className="rating">


                        </section>
                    </section>

                </div>
                <div className="middleLayer">

                    <div className="reviewTitle">

                    </div>
                    <div className="body">


                    </div>
                </div>
                <div className="bottomLayer">

                </div>
            </div>

        </div>
    ));

    return <Fragment>{content}</Fragment>;
};



export default (ScreamSkeleton);
