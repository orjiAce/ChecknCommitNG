import React, {Component} from 'react';
import PropTypes from "prop-types";
class Modal extends Component {

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        dismiss: PropTypes.func.isRequired
    };
    render() {
       // const { visible, dismiss, children, client } = this.props;
        return (

                <div className="modal">
<div className="postReview">

</div>

            </div>
        );
    }
}

export default Modal;