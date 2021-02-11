import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
import '../../style/desktop/profile.scss';
// Redux stuff
import { connect } from 'react-redux';
import {editUserDetails, updatePass} from '../../redux/actions/userActions';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Icons

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import Toast from "../Toast";

const styles = (theme) => ({
  ...theme,
  button: {
    float: 'right'
  }
});

class EditDetails extends Component {
  state = {
    phone: '',
    showToast: false,
    errorMsg: '',
   // firstName: '',
  //  lastName: '',
    email:'',
    location: '',
    open: false
  };
  mapUserDetailsToState = (credentials) => {
    this.setState({
      phone: credentials.phone ? credentials.phone : '',
      email: credentials.email ? credentials.email : '',
     // lastName: credentials.lastName ? credentials.lastName : '',
     // firstName: credentials.firstName ? credentials.firstName : '',
      location: credentials.location ? credentials.location : ''
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  changePass = () => {


    this.setState({
      showToast: true,
      errorMsg:''
    });
    this.toastHide();
    const userData = {
      email: this.state.email,
    };
    this.props.updatePass(userData);
  };
  toastHide = () => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      this.setState({showToast: false});

    }, 6000)
  };

  handleSubmit = () => {
    const userDetails = {
      phone: this.state.phone,
     // lastName: this.state.lastName,
      location: this.state.location,
      //firstName: this.state.firstName
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };
  render() {
    const { classes } = this.props;
    //const { errors } = this.state;
    return (

      <Fragment>
        <div className="toastWrap">

          {
            this.state.showToast && (
                <Toast body={'A password reset link has been sent to your email'}/>)
          }


        </div>
        <button className="editBtn" onClick={this.handleOpen}><FontAwesomeIcon icon={faEdit}/> Edit Details</button>


        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <div className="editDialog">

          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="phone"
                tpye="text"
                label="phone"
                placeholder="Your phone number"
                className={classes.textField}
                value={this.state.phone}
                onChange={this.handleChange}
                fullWidth
              />



              <TextField
                name="location"
                tpye="text"
                label="Location"
                placeholder="Where you live"
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
            <DialogActions>

              <Button color="secondary" onClick={this.changePass}>
                Change password
              </Button><br/>
              <small></small>
            </DialogActions>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <button className="saveBtn" onClick={this.handleSubmit} color="primary">
              Save
            </button>
          </DialogActions>
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  updatePass: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials
});

export default connect(
  mapStateToProps,
  { editUserDetails, updatePass }
)(withStyles(styles)(EditDetails));
