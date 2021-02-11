import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Review from '../components/scream/Review';
import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';

import ScreamSkeleton from '../util/ScreamSkeleton';
import StaticProfileSkeleton from '../util/StaticProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

class user extends Component {
    state = {
        profile: null,
        reviewIdParam: null
    };
    componentDidMount() {
        const handle = this.props.match.params.handle;
        const reviewId = this.props.match.params.reviewId;

        if (reviewId) this.setState({ reviewIdParam: reviewId });

        console.log(this.props.getUserData(handle));
        axios
            .get(`/user/${handle}`)
            .then((res) => {
                this.setState({
                    profile: res.data.user
                });
            })
            .catch((err) => console.log(err));
    }
    render() {
        const { reviews, loading } = this.props.data;
        const { reviewIdParam } = this.state;

        const screamsMarkup = loading ? (
            <ScreamSkeleton />
        ) : reviews === null ? (
            <p>No screams from this user</p>
        ) : !reviewIdParam ? (
            reviews.map((review) => <Review key={review.reviewId} review={review} />)
        ) : (
            reviews.map((review) => {
                if (review.reviewId !== reviewIdParam)
                    return <Review key={review.reviewId} review={review} />;
                else return <Review key={review.reviewId} review={review} openDialog />;
            })
        );

        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {screamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    {this.state.profile === null ? (
                        <StaticProfileSkeleton />
                    ) : (
                        <StaticProfile profile={this.state.profile} />
                    )}
                </Grid>
            </Grid>
        );
    }
}

user.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getUserData }
)(user);
