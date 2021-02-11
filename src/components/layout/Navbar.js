import React, { Component, Fragment, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostScream from '../scream/PostScream';
import Notifications from './Notifications';
import Hamburger from "./Hamburger";
// Icons
import HomeIcon from '@material-ui/icons/Home';

const NavBar = ({history}) => {


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





    const { authenticated } = this.props;
    return (
        <header>
        <div className="container">
            <div className="wrapper">
                <div className="inner-header">
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">

              </Link>
              <Notifications />
            </Fragment>
          ) : (
            <Fragment>



                <div className="logo">
                    <Link to="/">CheckNnCommit </Link>
                </div>

                <div className="menu">
                    <div className="mLine1"></div>
                    <div className="mLine2"></div>
                    <div className="mLine3"></div>


                </div>
            </Fragment>
          )}
                </div></div></div>
            <Hamburger state={state}/>
      </header>
    );

};

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(NavBar);
