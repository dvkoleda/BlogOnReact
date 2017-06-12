/**
 * Created by Koleda_D on 12.06.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../ducks/post';

class PostShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        return (
            <div>
                PostShow
            </div>
        );
    }
}

function mapStateToProps( { posts } , ownProps ) {
    return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);