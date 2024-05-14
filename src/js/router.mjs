import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setPostFormListener } from "./handlers/createPost.mjs";
import { setEditPostFormListener } from "./handlers/editPost.mjs";
import { renderProfile } from "./api/profile/render.mjs";
import { renderPost, renderPosts } from "./api/posts/render.mjs";
import { renderProfileFeed } from "./ui/profileFeed.mjs";
import {setDeletePostListener} from "../js/handlers/deletePost.mjs"
import { filterPosts } from "./handlers/filterPosts.mjs";
import { setSearchPostListener } from "./handlers/searchPosts.mjs";


export function router () {
    switch (window.location.pathname) {
        case "/":
        case "/index.html":
            setLoginFormListener();
            break;
        case "/profile/register":
        case "/profile/register/index.html":
            setRegisterFormListener();
            break;
        case "/feed":
        case "/feed/index.html":
            setPostFormListener();
            renderPosts();
            renderProfileFeed();
            filterPosts();
            setSearchPostListener()
            break;
        case "/feed/post":
        case "/feed/post/index.html":
            renderPost();
            setEditPostFormListener();
            setDeletePostListener();
            break;
        case "/feed/post/edit":
        case "/feed/post/edit/index.html":
            setEditPostFormListener();
            break;
        case "/profile":
        case "/profile/index.html":
            renderProfile();
            break;
        default:
            console.log("404 - Not found");
    }
};