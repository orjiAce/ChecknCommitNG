import React, {Component} from 'react';
import '../style/desktop/videoes.scss';
import PropTypes from "prop-types";
import {getVideos} from "../redux/actions/dataActions";
import {connect} from "react-redux";
import YouTube from 'react-youtube-embed'
class Videos extends Component {

    componentDidMount() {
        console.log(this.props.getVideos());
    }

    render() {
        const {data:{videos}} = this.props;
        return (
            <div className="videoGallery">
<div className="videoGalleryBanner">
    <div className="title">
        ChecknCommit Video Gallery
    </div>
    {
        console.log(videos)
    }
</div>

                <div className="videosContents">

                    <div className="vidBox">

                            <YouTube id='pj_qVzqC97A' />

                        </div>
 <div className="vidBox">

                            <YouTube id='JnAhyFsxKO4' />

                        </div>




                </div>
                
            </div>
        );
    }
}
Videos.propTypes = {
    getVideos: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    UI: state.UI,
    data: state.data,
});

const mapActionsToProps = {
    getVideos
};
export default connect(mapStateToProps,mapActionsToProps) (Videos);