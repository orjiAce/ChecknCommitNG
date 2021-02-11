import React, {Component} from 'react';
import '../style/desktop/Blog.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {blogPost} from "../redux/actions/dataActions";
import {connect} from "react-redux";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 20,
            error: false
        };
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 4};
        });
    }
    render() {
        dayjs.extend(relativeTime);
        const {blogs, loading} = this.props.data;
        return (
            <div className="blogPage">
                <div className="blogBanner">
                    <div className="img">
                        <div className="overlay">
                        </div>
                    </div>
                    <div className="bannerContent">
                        <div className="searchWrap">

                            <div className="inputCont">
                                <input type="search" placeholder="Search..." name="searchValue"/>
                            </div>

                        </div>
                        <div className="text">
                            ChecknCommit Blog
                        </div>
                        <div className="smallTxt">
                            Read insightful post
                        </div>

                    </div>
                </div>


                <div className="blogs">
                    <div className="blogContent">
                        <div className="posts">
                            {
                                !loading ?
                                blogs.slice(0, this.state.visible).map((({title,content, createdAt,headerImage, postId}) =>(
                                    <Link className="blogCards" to={`post/${postId}`}>
                                        <div className="coverImg">
                                            <img src={headerImage} alt=""/>
                                        </div>
                                        <div className="title">
                                           {title}
                                        </div>
                                        <div className="body">
                                            {
                                                content.substring(0, 50)
                                            }
                                            {content.length > 50 && "..."}
                                        </div>
                                        <div className="bottom">
                                            <div className="date">
                                                {dayjs(createdAt).fromNow()}
                                            </div>
                                            <button className="readMore">
                                                Read more
                                            </button>
                                        </div>


                                    </Link>
                                ))) : (<div>
                                    Loading...
                                    </div>)
                            }

                        </div>
                        <div>
                            {this.state.visible < blogs.length &&
                            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Blog.propTypes = {
    blogPost: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(mapStateToProps, blogPost) (Blog);