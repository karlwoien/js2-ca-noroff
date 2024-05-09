// Functionality to create a post

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostUrl = apiSocialUrl + action;

    const response = await authFetch(createPostUrl, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json ();
};