
// Functionality to get profile info for profile page
import { apiSocialUrl } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/storageHandler.mjs";


const action = "/profiles";

/*export async function getProfiles() {
    const getProfilesUrl = apiSocialUrl + action + "/";

    const response = await authFetch(getProfilesUrl)

    return await response.json ();
};*/


export async function getProfile() {
    const {name} = load ("profile")

    if (!name) {
        throw new Error ("Function requires name")
    }

    const getProfileUrl = apiSocialUrl + action + "/" + name;
    
    const response = await authFetch(getProfileUrl)
    return await response.json ();
};

