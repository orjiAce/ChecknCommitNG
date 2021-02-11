import React, {Component} from 'react';
import Toast from "../components/Toast";
import  {resetPassword} from "../redux/actions/userActions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Offline, Online} from "react-detect-offline";
import {Link} from "react-router-dom";

class ResetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            showToast: false,
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({errors: nextProps.UI.errors});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            showToast: true
        });
        this.toastHide();

        const userData = {
            email: this.state.email,
        };
        this.props.resetPassword(userData, this.props.history);
    };


    toastHide = () => {
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({showToast: false});

        }, 6000)
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const {
            UI: {loading}
        } = this.props;
        const {errors} = this.state;
        return (
            <div className="resetPass">

                <div className="toastWrap">

                    {
                        this.state.showToast && errors && (
                            <Toast body={errors.message}/>)
                    }


                </div>
                <div className="toastWrap">


                </div>
<div className="title">
    <h4>Reset your password</h4>
    <small>A link will sent to your email, follow the link to create a new password.</small>
</div>
                <div className="resetPassWrap">
                    <form noValidate onSubmit={this.handleSubmit} className="loginForm">

                        <div className="inputWrap">
                            <label form="email">* Your Email</label>
                            <div className="inputCont">
                                <input id="email" placeholder="Email" name="email" type="email" error={!!errors.email}
                                       value={this.state.email} onChange={this.handleChange}/>

                            </div>

                        </div>

                        <div className="bottomForm">
                            <Online>
                                <div>
                                    <button type="submit"> Set</button>
                                </div>
                            </Online>

                            <Offline>
                                <div>
                                    <button type="button" disabled={true}> Offline</button>
                                </div>
                            </Offline>

                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

ResetPass.propTypes = {
    resetPassword: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    resetPassword
};

export default connect(mapStateToProps, mapActionsToProps) (ResetPass);