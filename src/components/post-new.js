/**
 * Created by dvkoleda on 07.06.17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { createNewPost } from '../ducks/post';

class PostNew extends Component {

    renderInputField(field) {
        return (
          <div className="from-group">
              <label>{field.label}</label>
              <input
                  type="text"
                  className="form-control"
                  {...field.input} //assign auto created props to the input
              />
              {field.meta.error}
          </div>
        );
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderInputField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderInputField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderInputField}
                />
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if( !values.title ) {
        errors.title = "Please, provide a title!";
    }

    if( !values.categories ) {
        errors.title = "Please, provide categories!";
    }

    if( !values.content ) {
        errors.title = "Please, provide a content!";
    }

    //if errors has any props, redux-form assumes form is invalid
    return errors
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(PostNew);