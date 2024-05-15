//Functionality to get posts created by logged in profile on profile page

import { apiSocialUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/storageHandler.mjs";

const action = "/profiles"
const end = "/posts"
const author = "?_author=true"

export async function getProfilePosts () {
    const {name} = load ("profile")
    const getPostsUrl = apiSocialUrl + action + "/" + name + end + author;
    const response = await authFetch(getPostsUrl);

    return await response.json();
}