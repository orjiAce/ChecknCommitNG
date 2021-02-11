import React, {Component} from 'react';
import  errorPng from '../images/404.png';
import {Link} from "react-router-dom";
class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <div className="errorPng">
                    <img src={errorPng} alt="error image"/>
                </div>
                <div className="txt">
                    <h1> 404 ERROR: PAGE NOT FOUND</h1>
                    <Link to="/">
                       Go back Home
                    </Link>
                </div>
            </div>
        );
    }
}

export default NotFound;