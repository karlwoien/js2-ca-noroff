// Functionality to update a post


import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    const updatePostUrl = apiSocialUrl + action + "/" + postData.id;

    if (!postData.id) {
        throw new Error ("Update requires a post ID");
    };

    const response = await authFetch(updatePostUrl, {
        method: "put",
        body: JSON.stringify(postData)
    })

    const post = await response.json ();

    return post;
};