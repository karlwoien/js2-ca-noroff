
// Functionality to get posts and a single post (with id)

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts?_author=true";

export async function getPosts() {
    const getPostsUrl = apiSocialUrl + action;

    try {
        const response = await authFetch(getPostsUrl);
        if (response.ok) {
            const posts = await response.json();
            console.log(posts);
            return posts;
        }
        throw new Error('Failed to load posts');
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}


export async function getPost(id) {
    const getPostUrl = apiSocialUrl + action + "/" + id;

    const response = await authFetch(getPostUrl)

    return await response.json ();
};