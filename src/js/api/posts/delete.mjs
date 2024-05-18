// Functionality to delete a post

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    const updatePostUrl = apiSocialUrl + action + "/" + id;

    if (!id) {
        throw new Error ("ID not defined. Delete requires a post ID")
    }

    const response = await authFetch(updatePostUrl, {
        method: "delete"
    })

    return await response.json ();
};