import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type='text'
                    {...field.input}
                />
                <div className="form-control-feedback">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    renderTagsField(field) {
        return(
            <div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values);
    }

    render() {
        const { handleSubmit } = this.props; // handleSubmit comes from reduxForm() connect func

        // Whenever the user submits the form, handleSubmit runs validation, if validation passes
        // the onSubmit function (defined by you) gets called with form values  
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is more than 3 characters!';
    }
    if(!values.categories) {
        errors.categories = 'Enter a categories!';
    }
    if(!values.content) {
        errors.content = 'Enter a content!';
    }

    // if errors returns empty, the form is fine to submit. 
    // If errors has properties, redux form assumes something is wrong
    return errors;
}

// validate: validate => function gets called automatically
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);