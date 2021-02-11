import React, { Component } from 'react';

import PropTypes from 'prop-types';
import '../style/desktop/Home.scss';
import '../style/mobile/HomeMobile.scss';
import Scream from '../components/scream/Review';
import {Offline, Online} from "react-detect-offline";
import ScreamSkeleton from '../util/ScreamSkeleton';

import { connect } from 'react-redux';
import {getAllBusiness,getTopReviews } from '../redux/actions/dataActions';
import HomeBanner from "../contents/HomeBanner";
import HomeContent from "../contents/HomeContent";

class home extends Component {
  componentDidMount() {


    this.props.getAllBusiness();
    this.props.getTopReviews();
  }
  render() {
      const { topReviews, loading, totalBusiness} = this.props.data;

 let Reviews = !loading ? (
     topReviews.map((review) => <Scream key={review.reviewId} review={review} />)
      ) : (
          <div className="loader">
              {loading && (

               <ScreamSkeleton/>
              )}

          </div>
    );


    return (
        <div className="home">
           <HomeBanner history={this.props.history} liveSearch={totalBusiness}/>


            <div className="homeCont">
                <div className="bestReview">
                    <h3>Best reviewed Businesses</h3>
                </div>
                <Online>
                <div className="homeCardWrap">

         {Reviews}

                </div>

                </Online>

                <Offline>
                    <div className="homeCardWrap">
                    <ScreamSkeleton/>
                    </div>
                </Offline>


                <div className="cardBottomTxt">
                    Authenticated reviews from users like yourself.
                </div>




            </div>

            <HomeContent/>



        </div>


    );
  }
}

home.propTypes = {
    getTopReviews: PropTypes.func.isRequired,
    getAllBusiness: PropTypes.func.isRequired,

  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(mapStateToProps, { getAllBusiness,getTopReviews })(home);
