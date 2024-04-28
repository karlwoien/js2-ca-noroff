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

    storage.save("token", result.accessToken);

    storage.save("profile", result)

    alert ("You are now logged in!")
};
