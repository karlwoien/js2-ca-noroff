
import { getProfile } from "./get.mjs";
import { renderProfileTemplate } from "../../templates/profile.mjs";
import { setLogoutListener } from "../../handlers/logout.mjs";
import { getProfilePosts } from "./posts.mjs";
import { renderPostsTemplate } from "../../templates/post.mjs";

// Function to render profile info on profile page, then post made by the logged in profile,  and then set logout listener. 

export async function renderProfile () {

const profile = await getProfile();
const container = document.getElementById("#profile");

const posts = await getProfilePosts();
const feedContainer = document.getElementById("#post-by-profile")

renderProfileTemplate(profile, container);
renderPostsTemplate(posts, feedContainer);
setLogoutListener();
};