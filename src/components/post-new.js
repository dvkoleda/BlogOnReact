/**
 * Created by dvkoleda on 07.06.17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../ducks/post';

class PostNew extends Component {;

    renderInputField(field) {
        const { touched, error } = field.meta;
        const className =`from-group ${touched && error ?
            'has-danger' : ''}`;

        return (
          <div className={className}>
              <label>{field.label}</label>
              <input
                  type="text"
                  className="form-control"
                  {...field.input} //assign auto created props to the input
              />
              <div className="text-help ">
                  {touched ? error : ''}
              </div>
          </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push("/")
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">
                    Cancel
                </Link>
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
        errors.categories = "Please, provide categories!";
    }

    if( !values.content ) {
        errors.content = "Please, provide a content!";
    }

    //if errors has any props, redux-form assumes form is invalid
    return errors
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})( connect(null, { createPost })(PostNew) );