import React, {Component} from 'react';
import '../style/desktop/ReviewPage.sass';
import {getReview} from "../redux/actions/dataActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ReviewPage extends Component {

    componentDidMount() {
        console.log(this.props.getReview(this.props.match.params.reviewId));
    }
    render() {


        return (
            <div className="reviewPage">
                
            </div>
        );
    }
}

ReviewPage.propTypes = {

    getReview: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(mapStateToProps, {getReview}) (ReviewPage);