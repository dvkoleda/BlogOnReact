/**
 * Created by Koleda_D on 12.06.2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../ducks/post';
import { deletePost } from '../ducks/post';

class PostShow extends Component {

    constructor(props){
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    componentDidMount() {
        if ( !this.props.post ) {
            return
        }
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/")
        });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps( { posts } , ownProps ) {
    return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);