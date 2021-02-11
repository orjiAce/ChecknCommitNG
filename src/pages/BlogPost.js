import React, {Component} from 'react';
import '../style/desktop/Blog.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import {getSinglePost,blogPost} from "../redux/actions/dataActions";
import {connect} from "react-redux";
import axios from "axios";
import {SET_BLOG_POST, STOP_LOADING_UI} from "../redux/types";
import relativeTime from "dayjs/plugin/relativeTime";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: null,
            visible:8,
            allBlogPost: []
        }
    }
    componentDidMount() {
        const postId = this.props.match.params.postId;
       // console.log(this.props.getSinglePost(postId))
        axios
            .get(`/getSingleBlog/${postId}`)
            .then((res) => {
                this.setState({
                    blogPost: res.data.blogPost
                });
            })
            .catch((err) => console.log(err));


        axios
            .get('/blog')
            .then((res) => {
                this.setState({
                    allBlogPost: res.data
                });

            })
            .catch((err) => console.log(err));
    }

    render() {
        dayjs.extend(relativeTime);
        const {blogs, loading} = this.props.data;
        const {blogPost,allBlogPost} = this.state;
const  myPost = {
    ...blogPost
        };
        return (
            <div className="singlePost">
<div className="singlePostBanner">

<img src={myPost.headerImage} alt="Blog post Image" />
    <div className="blogTitle">
        {myPost.title}
    </div>
</div>

                <div className="postContent">
<div className="post">
    <div className="category">
      <small>Category:</small>  {myPost.category}
    </div>

    <div className="blogContent">
        {myPost.content}
    </div>

    <div className="time">
       Posted: {dayjs(myPost.createdAt).fromNow()}
    </div>
</div>
                    <div className="otherPost">
                        <div className="title">
                            Other post
                        </div>
                        <div className="posts">
                            {
                                console.log(allBlogPost)
                            }
                            {


                                allBlogPost.map((({title,content, createdAt,headerImage, postId}) =>(
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
                                    )))
                            }
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

BlogPost.propTypes = {
    getSinglePost: PropTypes.func.isRequired,
    blogPost: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});


export default connect(mapStateToProps, {getSinglePost,blogPost}) (BlogPost);