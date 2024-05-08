import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setPostFormListener } from "./handlers/createPost.mjs";
import { setEditPostFormListener } from "./handlers/editPost.mjs";

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
            break;
        case "/feed/post/edit":
        case "/feed/post/edit/index.html":
            setEditPostFormListener();
            break;
        default:
            console.log("404 - Not found");
    }
};