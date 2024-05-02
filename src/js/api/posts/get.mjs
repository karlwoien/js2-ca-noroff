
// Functionality to get posts and a single post (with id)

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";

export async function getPosts() {
    const getPostsUrl = apiSocialUrl + action;

    const response = await authFetch(getPostsUrl)

    return await response.json ();
};


export async function getPost(id) {
    const getPostUrl = apiSocialUrl + action + "/" + id;

    const response = await authFetch(getPostUrl)

    return await response.json ();
};