import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    // this will run immediately after React sees this component showing up on the DOM
    componentDidMount() {
        // this will kick off our data loading process
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            console.log("_.map is being called, this is post: ", post)
            return (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>

                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

// AFTER componentDidMount goes and gets API data, we put that data into the component
// by joining the component to state
function mapStateToProps(state) {
    return { posts: state.posts };
}

// This below is another way of doing mapStateToDispatch
// fetchPosts is now available as this.props.fetchPosts
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);