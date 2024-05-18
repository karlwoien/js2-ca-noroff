// Functionality to create a post

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostUrl = apiSocialUrl + action;

    try {
        const response = await authFetch(createPostUrl, {
            method,
            body: JSON.stringify(postData)
        });
        if (response.ok) {
            location.reload();
            return await response.json ();
        } else {
            throw new Error ("Response not ok");
        }
    } catch (error) {
        throw new Error (error);
    }
    
    
    
    
};