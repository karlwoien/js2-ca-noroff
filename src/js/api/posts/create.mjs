// Functionality to create a post

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostUrl = apiSocialUrl + action;

    const response = await authFetch(createPostUrl, {
        method: "post",
        body: JSON.stringify(postData)
    })

    const post = await response.json ();

    return post;
};