import React, {Component} from 'react';
import '../../App.scss'

import logo2 from '../../images/CHECcOMMIT.png';
import {Link} from "react-router-dom";

import Twitter from '../../images/icons/twitter.svg'
import Facebook from '../../images/icons/facebook.svg'
import Youtube from '../../images/icons/youtube.svg';
import Instagram from '../../images/icons/instagram.svg'

class Footer extends Component {

    render() {
        return (
            <div className="footerContent">
                <div className="footer">
                    <div className="about">
                        <div className="logo">
                            <img src={logo2} alt="Logo"/>
                        </div>
                        <div className="mobLogo">
                            <img src={logo2} alt="Logo"/>
                        </div>
                        <div className="aboutSnippet">
                            ChecknCommit® allows you to create, manage, and update your online Business Profile as well
                            as enabling you to engage with existing and potential customers. All you need to get started
                            is a mobile phone, a tablet or a computer; the rest is totally free.
                        </div>
                    </div>
                    <div className="quickLinks">


<section className="itemSection">
<div className="title">
    Company
</div>

    <ul>
        <li>
            <Link to='/about-us'>About us </Link>
        </li>

        <li>
            <Link to='/contact-us'>Contact us</Link>
        </li>
        <li>
            <Link to='/OurStory'>Our Story</Link></li>
       <li>
            <Link to='/videosGallery'>Videos</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
    </ul>
</section>

                        <section className="itemSection">
                            <div className="title">
                                Costumers
                            </div>
                            <ul>
                                <li>
                                    <Link to='/guideline'>Guidelines for reviewers </Link>
                                </li>
                                <li>
                                    <Link to='' onClick={ () => (window.location = "https://business.checkncommit.com/#/Guideline")}>Guidelines for businesses </Link>
                                </li>
                                <li>
                                    <a href={'mailto:careers@checkncommit.com'}> Career</a>
                                </li>

                                <li>
                                    <Link to='/advert'>Advertise with us</Link>
                                </li>
                                <li>
                                    <Link to='/cancelmembership'>Cancelling membership </Link>
                                </li>
                            </ul>

</section>

                        <section className="itemSection">
<div className="title">
    Legal
</div>
                            <ul>

                                <li>
                                    <Link to='/privacypolicy'>Privacy Policy </Link>
                                </li>
                                <li>
                                    <Link to='/terms'>Terms & Conditions for users</Link>
                                </li>
                                <li>
                                    <Link to='' onClick={ () => (window.location = "https://business.checkncommit.com/#/terms")}>Terms & Conditions for Businesses</Link>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="rightLink">
                        <div className="txtIcons">Follow us on</div>
<div className="socialIcons">


    <Link to='' onClick={ () => (window.location ="https://twitter.com/checkncommit")} className="icons">
<img alt="twitter icon" src={Twitter}/>
    </Link>
    <Link to='' onClick={ () => (window.location ="https://web.facebook.com/checkncommit.checkncommit")} className="icons">
        <img alt="twitter icon" src={Facebook}/>
    </Link>

    <Link to='' onClick={ () => (window.location ="https://www.youtube.com/channel/UCYk3OlafFbxbJUJ5oD9mEcw")} className="icons">
        <img alt="twitter icon" src={Youtube}/>
    </Link>
    <Link to='' onClick={ () => (window.location ="https://instagram.com/checkncommit")} className="icons">
        <img alt="twitter icon" src={Instagram}/>
    </Link>








</div>

                    </div>
                </div>

                <div className="bottomFooter">
Copyright &copy; ChecknCommit&trade;  2020
                </div>
            </div>
        );
    }
}

export default Footer;