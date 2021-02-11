import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


// Redux
import {connect} from 'react-redux';


class Review extends Component {
    render() {
       dayjs.extend(relativeTime);

        const {

            review: {
                body,
                createdAt,
                userImage,
                title,
                firstName,
                lastName,
                business,
                rating,
                images,
handle

            },
        } = this.props;

        return (
            <Link className="myCard" to={`/businesses/${business}`}>
                <div className="topLayer">
                    <section className="userImg">
                        <img src={userImage} alt="userImage"/>
                    </section>
                    <section className="sideBox">
                        <section className="userName">
                            <div className="name">
                                 {handle}  <span className="onBiz">on {
                                business.substring(0, 10)
                            }
                                {business.length > 10 && "..."}
                            </span>
                               </div>
                            <div className="time">
                                {dayjs(createdAt).fromNow()}


                            </div>
                        </section>
                        <section className="rating">

                            {rating === '2star' ? (<div>
                                    <FontAwesomeIcon icon={faStar} className="icon grey"/>
                                    <FontAwesomeIcon icon={faStar} className="icon grey"/></div>) :

                                rating === '3star' ? (<div>
                                        <FontAwesomeIcon icon={faStar} className="icon wine"/>
                                        <FontAwesomeIcon icon={faStar} className="icon wine"/>
                                        <FontAwesomeIcon icon={faStar} className="icon wine"/>

                                    </div>) :
                                    rating === '4star' ? (<div title="great">
                                        <FontAwesomeIcon icon={faStar} className="icon gold"/>
                                        <FontAwesomeIcon icon={faStar} className="icon gold"/>
                                        <FontAwesomeIcon icon={faStar} className="icon gold"/>
                                        <FontAwesomeIcon icon={faStar} className="icon gold"/>
                                    </div>) :
                                        rating === '5star' ? (<div>
                                        <FontAwesomeIcon icon={faStar} className="icon green"/>
                                        <FontAwesomeIcon icon={faStar} className="icon green"/>
                                        <FontAwesomeIcon icon={faStar} className="icon green"/>
                                        <FontAwesomeIcon icon={faStar} className="icon green"/>
                                        <FontAwesomeIcon icon={faStar} className="icon green"/>
                                    </div>) :
                                            (<FontAwesomeIcon title="bad" icon={faStar} className="icon grey"/>

                                    )}
                        </section>
                    </section>

                </div>
                <div className="middleLayer">

                    <div className="reviewTitle"> {title}</div>
                    <div className="body">
                        {body}
                    </div>
                </div>
                <div className="bottomLayer">
                    {

                        Object.keys(images).length > 0 ? images.map(image => (
                            <img src={image} alt="images To Support"/>
                        )) : ''
                    }
                </div>
            </Link>
        );
    }
}

Review.propTypes = {
    //business: PropTypes.object.isRequired,
    review: PropTypes.object.isRequired,
    openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(Review);
