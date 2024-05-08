
import { getProfile } from "./get.mjs";
import { renderProfileTemplate } from "../../templates/profile.mjs";

// Function to render profile on profile page. 

export async function renderProfile () {

const profile = await getProfile();
const container = document.getElementById("#profile");

renderProfileTemplate(profile, container);
};