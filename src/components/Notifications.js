import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faComment, faFlag, faHeart} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {markNotificationsRead} from "../redux/actions/userActions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Badge from "@material-ui/core/Badge";

import MenuItem from "@material-ui/core/MenuItem";

import {Link} from "react-router-dom";

class Notifications extends Component {
    state = {
        anchorEl: null
    };
    render() {

        const notifications = this.props.notifications;
        const anchorEl = this.state.anchorEl;

        dayjs.extend(relativeTime);


        let notificationsIcon;
        if (notifications && notifications.length > 0) {
            notifications.filter((not) => not.read === false).length > 0
                ? (notificationsIcon = (

                    <Badge
                        badgeContent={
                            notifications.filter((not) => not.read === false).length
                        }
                        color="secondary"
                    >
                        <FontAwesomeIcon icon={faBell} className="icon"/>
                    </Badge>



                ))
                : (notificationsIcon =   <FontAwesomeIcon icon={faBell} className="icon"/>);
        } else {
            notificationsIcon =   <FontAwesomeIcon icon={faBell} className="icon"/> ;
        }



        let notificationsMarkup =
            notifications && notifications.length > 0 ? (
                notifications.map((not) => {
                    const verb = not.type === 'reply' ? 'replied' : 'Reported';
                    const time = dayjs(not.createdAt).fromNow();
                    const iconColor = not.read ? 'primary' : 'secondary';
                    const icon =
                        not.type === 'report' ? (
                            <FontAwesomeIcon icon={faFlag} color={iconColor} style={{ marginRight: 10 }} />
                        ) : (
                            <FontAwesomeIcon icon={faComment} color={iconColor} style={{ marginRight: 10 }} />
                        );

                    return (
                        <p key={not.createdAt} className="notiContent">
                            <span
                                color="default"
                               /* to={`/users/${not.recipient}/scream/${not.reviewId}`}*/
                            >
                                <em className="gold">{not.sender}</em> {verb} your review <small>{time}</small>
                            </span>
                        </p>
                    );
                })
            ) : (
                <MenuItem className="notiContent" onClick={this.handleClose}>
                    You have no notifications yet
                </MenuItem>
            );



        return (




                <div className="notifications">
                    <section className="noti">
                        <section className="notiIcon">


                            {notificationsIcon}
                        </section>



                            <span>
                                {notificationsMarkup}
                            </span>


                    </section>
                </div>

        );
    }
}
Notifications.propTypes = {
    markNotificationsRead: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    notifications: state.user.notifications
});

export default connect(
    mapStateToProps,
    { markNotificationsRead }
) (Notifications);