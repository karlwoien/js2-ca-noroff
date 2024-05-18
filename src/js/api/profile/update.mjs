// Functionality to update profile information

import { authFetch } from "../authFetch.mjs";
import { apiSocialUrl } from "../constants.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfile(profileData) {
    const updateProfileUrl = apiSocialUrl + action + "/" + profileData.name + "/media";

    if (!profileData || !profileData.name) {
        throw new Error("Profile data or name is not defined");
    }
    
    const response = await authFetch(updateProfileUrl, {
        method,
        body: JSON.stringify(profileData)
    })

    return await response.json();
};