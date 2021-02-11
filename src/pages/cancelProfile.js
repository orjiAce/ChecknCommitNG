import React, {Component} from 'react';
import '../style/desktop/Cancelmembership.scss';
import sadFace from '../images/sadFace.png';
import {logoutUser, uploadImage,cancelUserMembership, getUserData} from "../redux/actions/userActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class CancelProfile extends Component {
constructor(props) {
    super(props);
}


    handleLogout = () => {
        this.props.cancelUserMembership(this.props.history);
        this.props.logoutUser();
    };
    render() {

        const {

            user: {
                credentials: { imageUrl},


            },


        }
            = this.props;



        return (
            <div className="cancel-profile">
                <div className="banner">

                    <div className="title">
                        Cancelling Of Profile
                    </div>
                </div>

                <div className="content">
                    <div className="header">
                        <div className="txt">
                            Cancelling of customer account
                        </div>
                        <div className="img">
<img src={imageUrl} alt="user image"/>
                        </div>
                    </div>
                    <section className="imgSadFace">
                        <img src={sadFace} alt="sad face"/>

                    </section>

                    <div className="message">
                        <div className="left">

                            <section>
                                We are sorry that you have chosen to leave our community for the meantime. We sincerely
                                hope that you have enjoyed your experience with us and we hope that you will consider
                                coming back soon.
                            </section>
                            <section>
                                Your efforts on ChecknCommit® have helped an untold amount of people make better
                                consumer
                                choices and we hope you feel proud for being part of this.
                            </section>
                            <section>
                                When you do think about returning, just remember some of the great benefits you can
                                enjoy with ChecknCommit®:
                            </section>
                        </div>

                        <div className="right">
                            <ul>
                                <li>Best products to buy, as reviewed by experts.
                                </li>
                                <li>Insights into potential buying or service experiences.
                                </li>
                                <li> Being part of a local community on a global scale.
                                </li>
                                <li> Assisting buyers by providing greater trust.
                                </li>
                                <li> Free Legal Consultation.
                                </li>
                                <li>Shopping with confidence based on other customer reviews.
                                </li>
                                <li>Have product shortlists uploaded to your device.
                                </li>
                                <li> Early notification of new products from your favorite vendors.
                                </li>
                                <li> Weekly insightful blogs.
                                </li>
                                <li> 24/7 Helpline.
                                </li>
                                <li> Personalized contracts available on request.</li>
                            </ul>

                            <div className="cancelBtn">
                                Hope to see you again soon. Click <button onClick={this.handleLogout}>Here</button> Cancel membership
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.user,
    notifications: state.notifications,

});
const mapActionsToProps = {logoutUser, getUserData, cancelUserMembership};

CancelProfile.propTypes = {
    cancelUserMembership: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionsToProps) (CancelProfile);