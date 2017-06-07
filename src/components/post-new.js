/**
 * Created by dvkoleda on 07.06.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewPost } from '../ducks/post';

class PostNew extends Component {

    render() {
        return (
            <div>
                Posts new
            </div>
        );
    }
}

export default connect(null, { createNewPost })(PostNew);