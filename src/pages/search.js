import React, {Component} from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSearchData, overallRating} from "../redux/actions/dataActions";
import '../style/desktop/search.scss'
import Business from "../components/layout/Business";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import notFoundImage from '../images/Group 609.png'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            errors: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ errors: {} });
        }

    }

    componentDidMount() {
        const business = this.props.match.params.business;

        console.log(this.props.getSearchData(business));
   this.props.overallRating(business);

    }


    render() {

        const {businesses,overallRating, loading} = this.props.data;

        const {
            errors
        } = this.props.UI;

        let searchResult = businesses && !loading ? (

            businesses.map((business) => <Business key={business.handle} overallRating={overallRating} business={business}/>)
        ) : (
            <div className="SKEL">

                    <div>
                        LOADING
                    </div>


            </div>);


        return (
            <div className="searchCont">

                <div className="searchBanner">
                    <div className="text">
                        Search Result
                    </div>
                    <section className="searchWrap">
                        <form>
                            <div className="inputWrap">
                                <input type="text" placeholder="Business" name="Business"/>
                                <label>
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/> </label>
                                <input name="Location" type="text" placeholder="Location"
                                       id="Location"/>

                            </div>

                            <div className="smallTxt">
                                <small> Search business by name and location.</small>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="Businesses">
                    <div className="categoryTxt">
                        <small>Businesses </small>
                    </div>
                    <div className="searchResult">


{ !errors ?
    searchResult : ( <div className="noResultInfo">


        <div className="notFoundImg">
            <img src={notFoundImage} alt="no result image"/>

        </div>

        <div>
            <p>This business does not have a review yet.</p>

            <ul>

                <li>Is this your business? do you wish to<br/><br/>
                    <span className="link" onClick={ () => (window.location = "https://business.checkncommit.com/#/signup")}>
                        Register Business</span>
                </li>
                <li>Or will you like to <br/><br/>
                    <Link to="/createReview" className="link">Leave a review</Link>
                </li>

            </ul>
        </div>
        <div>

        </div>
    </div>)
}
                  {/*      { businesses && Object.keys(businesses).length > 0 ? searchResult : (
                            <div>
                            <div className="noResultInfo">


                                <div className="notFoundImg">
                                    <img src={notFoundImage} alt="no result image"/>

                                </div>

                                <div>
                                    <p>This business does not have a review yet.</p>

                                    <ul>

                                        <li>Is this your business? do you wish to<br/><br/>
                                            <Link to='' className="link" onClick={ () => (window.location = "https://business.checkncommit.com/#/signup")}>
                                                Register Business</Link>
                                        </li>
                                        <li>Or will you like to <br/><br/>
                                            <Link to="/createReview" className="link">Leave a review</Link>
                                        </li>

                                    </ul>
                                </div>
                                <div>

                                </div>
                            </div>
                            </div>

                        )}*/}

                        {

                        }
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    getSearchData: PropTypes.func.isRequired,
    overallRating: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data,
    business: state.business,
    UI: state.UI

});


export default connect(mapStateToProps, {getSearchData,overallRating})(Search);