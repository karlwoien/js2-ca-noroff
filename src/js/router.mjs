import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

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
        default:
            console.log("404 - Not found");
    }
};