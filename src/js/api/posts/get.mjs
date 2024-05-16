
// Functionality to get posts and a single post (with id)

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/posts";
const author = "?_author=true"

export async function getPosts() {
    const getPostsUrl = apiSocialUrl + action + author;

    try {
        const response = await authFetch(getPostsUrl);
        if (response.ok) {
            const posts = await response.json();
            return posts;
        }
        throw new Error("Failed to load posts");
    } catch (error) {
        console.error("Error fetching posts:" + error);
        return [];
    }
}


export async function getPost(id) {
    const getPostUrl = apiSocialUrl + action + "/" + id + "/" + author;

    if (!id) {
        throw new Error ("Get post requires a post ID")
    } try {
        const response = await authFetch(getPostUrl)
        return await response.json ();
    } catch (error) {
        throw new Error (error)
    }
};