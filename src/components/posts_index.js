import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    // this will run immediately after React sees this component showing up on the DOM
    componentDidMount() {
        // this will kick off our data loading process
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                Posts Index
            </div>
        )
    }
}

// This below is another way of doing mapStateToDispatch
// fetchPosts is now available as this.props.fetchPosts
export default connect(null, { fetchPosts })(PostsIndex);