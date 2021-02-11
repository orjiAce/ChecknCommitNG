import React, {useState, useEffect} from 'react';
import {withRouter, Link, Redirect} from "react-router-dom";
import Hamburger from "./Hamburger";
import { connect } from 'react-redux';
import logo from '../../images/CHECcOMMIT.png'
import PropTypes from "prop-types";



const Header = ({history, authenticated, imageUrl,lastName}) => {


//state for menu button
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

//pause the button for few seconds after it is clicked
    const [disabled, setDisabled] = useState(false);

    //use effect for page change
    useEffect(() => {
        //listen for page changes
        history.listen(() => {
            setState({clicked: false, menuName: "Menu"})

        });
    });


    //this function will run when click our button (when the app is first loaded)
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Closed"
            });

            //once the button is toggled
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });

        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: "Closed"
            });

        }
    };

    //determine if our menuBtn should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200)
    };




  // const { authenticated } = this.props;

    return <header>
        <div className="container">
            <div className="wrapper">
                <div className="inner-header">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="Logo"/> </Link>


                        <div className='leftMenu'>
<ul>
    <li><Link to="/about-us">Purpose of ChecknCommit</Link></li>

    <li><Link to='/categories'>Categories</Link></li>
    <li><Link to="/askALawyer"> Ask a lawyer</Link></li>
</ul>
                        </div>

                    </div>


                    <div className="rightMenu">
                        <ul>

                            <li>



                                {   authenticated === true ? (  <Link title={lastName} to="/userProfile"> profile</Link>) : (  <Link to='/signup'>Create Account</Link>)}



                            </li>
                            <li>
                             {   authenticated === true ? (  <span title={lastName} className="userImage"> <img src={imageUrl} /></span>) : (  <Link to='/login'>Login</Link>)}


                            </li>
                            <li><Link to='/categories'>Categories</Link></li>
                            <li><Link to="/ourCommitment"> Our Commitment</Link></li>
                            <li onClick={ () => (window.location = "https://business.checkncommit.com")}>For Business</li>

                        </ul>
                    </div>

                    <div disabled={disabled} onClick={handleMenu}  className="menu">
                        <div className="mLine1"></div>
                        <div className="mLine2"></div>
                        <div className="mLine3"></div>


                    </div>

                </div>
            </div>
        </div>
        <Hamburger state={state} authenticated={authenticated} imageUrl={imageUrl} lastName={lastName}/>
    </header>
};
Header.propTypes = {
    authenticated: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
     authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(withRouter(Header));