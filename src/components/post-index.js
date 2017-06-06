/**
 * Created by dvkoleda on 05.06.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../ducks/post';

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Post index
            </div>
        );
    }
}

export default connect(null, { fetchPosts })(PostIndex);