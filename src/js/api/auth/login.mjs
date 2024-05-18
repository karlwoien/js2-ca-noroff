import { apiSocialUrl } from "../constants.mjs";
import * as storage from "../../storage/storageHandler.mjs"

const action = "/auth/login";
const method = "post";

export async function login (profile) {
    const loginUrl = apiSocialUrl + action;
    const body =  JSON.stringify(profile);

   const response = await fetch (loginUrl, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    });

    const result = await response.json();

    // Check if login is successful and redirect if it is, else alert login failed.
    if (response.ok) {
        storage.save("token", result.accessToken);
        storage.save("profile", result)
        alert ("Login successful!");
        window.location.href = "/feed/index.html";
    } else {
        alert ("Login failed: Please enter correct username and password.")
    }
};
