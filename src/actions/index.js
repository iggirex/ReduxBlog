import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=bubucaca'

export function fetchPosts() {
    const request = axios.get(`${rootUrl}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}   