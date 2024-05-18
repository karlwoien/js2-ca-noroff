// Functions to template and render profile image and profile name on creat post section of feed
import { getProfile } from "../api/profile/get.mjs";

export function profileFeedTemplate (profileData) {

    // main div element
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("row")

    //column for avatar/profile picture
    const avatarContainer = document.createElement("div")
    avatarContainer.classList.add("col-auto")

    if (profileData.avatar) {
        const profileAvatar = document.createElement("img");
        profileAvatar.classList.add ("profile-image", "rounded-circle", "me-2"),
        profileAvatar.src = profileData.avatar;
        profileAvatar.alt = profileData.name + "profile avatar";
        avatarContainer.append(profileAvatar);
    } else {
        const noProfileAvatar =document.createElement("div");
        noProfileAvatar.classList.add("profile-image", "rounded-circle", "me-2")
        avatarContainer.append(noProfileAvatar);

        const profileAvatar = document.createElement ("i");
        profileAvatar.classList.add("bi", "bi-person-circle")
        noProfileAvatar.append(profileAvatar)
    }

    //column for text
    const textContainer = document.createElement("div")
    textContainer.classList.add("col", "text-start")

    const profileName = document.createElement ("p")
    profileName.classList.add ("card-title", "fw-bold")
    profileName.innerText = profileData.name;

    const creationDate = document.createElement ("p")
    creationDate.classList.add("text-muted");
    creationDate.innerText = "Now";

    textContainer.appendChild(profileName);
    textContainer.appendChild(creationDate);

    //Append all elements to the main div
    profileContainer.appendChild(avatarContainer);
    profileContainer.appendChild(textContainer);
    
    
   return profileContainer;
};

export function renderProfileTemplate (profileData, parent) {
    parent.append(profileFeedTemplate(profileData));
};

export async function renderProfileFeed () {

    const profile = await getProfile();
    const container = document.getElementById("#header-feed");
    
    renderProfileTemplate(profile, container);
    };