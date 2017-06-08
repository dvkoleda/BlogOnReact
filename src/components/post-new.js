/**
 * Created by dvkoleda on 07.06.17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { createNewPost } from '../ducks/post';

class PostNew extends Component {

    renderTitleField(field) {
        return (
          <div>
              <input
                  type="text"
                  {...field.input}
              />
          </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm'
})(PostNew);