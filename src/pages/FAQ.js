import React, {Component} from 'react';
import FaqSVG from "../contents/FaqSVG";
import '../style/desktop/faq.scss';
import {Link, animateScroll as scroll} from 'react-scroll';
import {Link as myLink, withRouter} from 'react-router-dom';
import Faqs from "../contents/Faqs";





// Then in a component:


class Faq extends Component {
    //props: Props;


    scrollToTop = () => {
        scroll.scrollToTop();
    };





    render() {






        return (
            <div className="faq">
                <FaqSVG/>
                <div className="title">

                   <p>Frequently Asked Questions</p>

                </div>


                <Faqs/>
            </div>
        );
    }
}

export default withRouter(Faq);