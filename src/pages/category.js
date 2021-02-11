import React, {Component} from 'react';
import '../style/desktop/category.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Business from "../components/layout/Business";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getBusinesses} from '../redux/actions/dataActions';
import {Offline, Online} from "react-detect-offline";
import notFoundImage from "../images/Group 609.png";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisconnected: false,
            errors: {}
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors
            });
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({ error: '',errors: {} });
        }
    }

    componentDidMount() {
        //this.getInitialState();
        const category = this.props.match.params.category;
 this.props.getBusinesses(category)



    }



    //function to check internet connection before componentDidMount();

    render() {

        const {errors} = this.props.UI;
        const {allBusiness, loading} = this.props.data;


        let businessMarkup = allBusiness !== null ? (

            allBusiness.map((business) => <Business key={business.handle} business={business}/>)
        ) : (
            <div className="SKEL">
                {loading && (
                    <div>
                        LOADING
                    </div>
                )}

            </div>);
        return (
            <div className="allBusiness">
                <div className="banner">
                    <div className="text">
                        Businesses
                    </div>
                    <section className="searchWrap">
                        <form>
                            <div className="inputWrap">
                                <input type="text" placeholder="Business name" name="Business"/>

                                <label><FontAwesomeIcon icon={faMapMarkerAlt}/> </label>
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
                        <small>Category ></small> {this.props.match.params.category}
                    </div>

                    <div className="bizCardWrap">

                        <Online>
                        {/* {  businessMarkup}*/}

                        {errors === null ? businessMarkup : (
                            <div className="noResultInfo">


                                <div className="notFoundImg">
                                    <img src={notFoundImage} alt="no result image"/>

                                </div>
                                <p>No business have been reviewed under this category yet.</p> <ul>

                                <li>Do you want to be the first to?<br/><br/>
                                    <Link to='' className="link" onClick={ () => (window.location = "https://business.checkncommit.com/#/signup")}>
                                        Register Business</Link>
                                </li>
                                <li>Or will you like to <br/><br/>
                                    <Link to="/createReview" className="link">Create review</Link>
                                </li>

                            </ul>
                            </div>
                        )}
                        </Online>
                        <Offline> <div>Check you internet connection</div> </Offline>
                    </div>
                </div>
            </div>
        );
    }
}

Category.propTypes = {
    getBusinesses: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user,
    UI: state.UI
});


export default connect(
    mapStateToProps, {getBusinesses})(Category);