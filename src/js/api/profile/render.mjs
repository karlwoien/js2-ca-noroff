
import { getProfile } from "./get.mjs";
import { renderProfileTemplate } from "../../templates/profile.mjs";
import { setLogoutListener } from "../../handlers/logout.mjs";

// Function to render profile on profile page and then set logout listener. 

export async function renderProfile () {

const profile = await getProfile();
const container = document.getElementById("#profile");

renderProfileTemplate(profile, container);
setLogoutListener();
};