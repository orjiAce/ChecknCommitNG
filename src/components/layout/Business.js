import React, {Component} from 'react';
// Redux
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import category from "../../pages/category";


import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faStar} from "@fortawesome/free-solid-svg-icons";
import {overallRating} from "../../redux/actions/dataActions";
class Business extends Component {

    render() {

        const {
            overallRating,
            business: {
               handle,
                logoUrl,
                businessName,
                country,
                category
            },
        } = this.props;

        return (

<Link className="bizCard" to={`/businesses/${handle}`}>
<section className="bizLogo">
<img src={logoUrl} alt="bizLogo"/>
</section>

                <section className="otherDetails">
<div className="bizName">
    <div className="name">
        {businessName}
    </div>
    <small><em>listed under</em> <b>{category}</b></small>
</div>
                    <div className="location">
                       <FontAwesomeIcon icon={faMapMarker}/> {country}
                    </div>
                    <section className="ratings">
                        {
                            overallRating &&
                            Array.from(overallRating).sort((a, b) => b.value - a.value).filter((item, index) => index < 1).filter((item, index) => index < 1).map(item =>
                                <div>

                                    <small> &nbsp;&nbsp; <em>Overall rating </em></small>: {item.value} <em><small>
                                    {item.value > 0 && item.label}

                                </small></em>

                                    {
                                        item.label === 'excellent' && (
                                            <div><FontAwesomeIcon icon={faStar} className="icon green"/>
                                                <FontAwesomeIcon icon={faStar} className="icon green"/>
                                                <FontAwesomeIcon icon={faStar} className="icon green"/>
                                                <FontAwesomeIcon icon={faStar} className="icon green"/>
                                                <FontAwesomeIcon icon={faStar} className="icon green"/>
                                            </div>)
                                    }
                                    {
                                        item.label === "great" && (<div>
                                            <FontAwesomeIcon icon={faStar} className="icon wine"/>
                                            <FontAwesomeIcon icon={faStar} className="icon green"/>
                                            <FontAwesomeIcon icon={faStar} className="icon green"/>
                                            <FontAwesomeIcon icon={faStar} className="icon green"/></div>)


                                    }
                                    {
                                        item.label === "average" && item.value > 0 && (<div>

                                            <FontAwesomeIcon icon={faStar} className="icon wine"/>
                                            <FontAwesomeIcon icon={faStar} className="icon wine"/>
                                            <FontAwesomeIcon icon={faStar} className="icon wine"/></div>)


                                    }
                                    {
                                        item.label === "bad" && (<div>


                                            <FontAwesomeIcon icon={faStar} className="icon green"/>
                                            <FontAwesomeIcon icon={faStar} className="icon green"/></div>)


                                    } {
                                    item.label === "poor" && (<div>


                                        <FontAwesomeIcon icon={faStar} className="icon gold"/></div>)


                                }

                                </div>)
                        }
                    </section>


                </section>
</Link>

        );
    }
}
Business.propTypes = {

    overallRating: PropTypes.func.isRequired,
    business: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({

    user: state.user
});
export default connect(mapStateToProps,{overallRating}) (Business);