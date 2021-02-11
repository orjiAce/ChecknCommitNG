import React from 'react';
import PropTypes from 'prop-types';
// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faPhoneAlt, faStar} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'
import {followBusiness, unFollowBusiness} from "../../redux/actions/dataActions";

class StaticProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [],
            followed: false
        }
    }

    clickToFollow = (data) => {
        this.setState({followed: !this.state.followed});
        this.props.followBusiness(data)

    };
    unFollowBusiness = (data) => {
        this.setState({followed: !this.state.followed});
        this.props.unFollowBusiness(data)

    };

    getOverallRating = (overallRate) => {
        Math.max.apply(Math, overallRate.map(function (o) {
            return o.label;
        }))
        // console.log(overallRate)

        // return Math.max(...overallRate());

    };

    maxRating = (ratings) => {

        return {
            ...ratings.reduce((p, c) => p.value > c.value ? p : c)

        };

    };
    theRating = (ratings) => {
        const ace = {id: "1", label: "excellent", value: 6, color: "#001818"};

        const newArr = Object.values(ratings);
        console.log(newArr);

        const mappedArr = newArr.map(function (i) {
            return [i, ratings[i]];
        });

        console.log(mappedArr);

        mappedArr.map(item => (
            console.log(item)
        ));

        Object.keys(ratings).map((key, value, index) => {
            return console.log([key, index, value])
        });

        // return <MyComponent myItem={myItem} key={index} />

    };

    render() {

        const {
            followers,
            reviews,
            authenticated,
            overallRate,
            profile: {handle, category, businessName, phone, AddressOne, email, addressTwo, logoUrl, bio},
            gallery
        } = this.props;
        return (
            <div>
                <div className="staticProfile">
                    <div className="topLayer">

                        <section className="bizLogo">
                            <img src={logoUrl} alt="logo"/>
                        </section>

                        <section className="details">
                            <div className="rating">


                                <div>


                                    {
                                        overallRate &&
                                        Array.from(overallRate).sort((a, b) => b.value - a.value).filter((item, index) => index < 1).filter((item, index) => index < 1).map(item =>
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

                                </div>


                            </div>

                            <div className="location">
                                <FontAwesomeIcon icon={faMapMarker} className="icon"/> {AddressOne} {addressTwo}
                            </div>
                            <div className="phoneNumber">
                                <FontAwesomeIcon icon={faPhoneAlt} className="icon"/> <a
                                href={`tel:${phone}`}>{phone}</a>
                            </div>

                        </section>


                    </div>

                    <div className="middleLayer">
                        <div className="brand">
                            <section className="brandName"> {businessName} </section>
                            <small><em>@{handle}</em></small>
                            <div>
                                <small>
                                    Listed under {category}
                                </small>
                            </div>
                        </div>

                        {
                            reviews && (authenticated ? Object.keys(followers).length < 1 ? (

                                        <button className="followBtn"
                                                onClick={() => this.clickToFollow({business: handle})}>


                                            Follow
                                        </button>) : (<button className="unFollowBtn"
                                                              onClick={() => this.unFollowBusiness({business: handle})}> Unfollow</button>)
                                    : ('')
                            )
                        }


                    </div>

                    <div className="bio">
                        <div>
                            <h4> About</h4>
                        </div>
                        {bio}
                    </div>


                </div>
            </div>
        );
    }
}

StaticProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    followBusiness: PropTypes.func.isRequired,
    unFollowBusiness: PropTypes.func.isRequired,

};
const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user,
    UI: state.UI
});


export default connect(mapStateToProps, {followBusiness, unFollowBusiness})(StaticProfile);
