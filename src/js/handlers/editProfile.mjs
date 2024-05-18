import { load } from "../storage/storageHandler.mjs";
import { getProfile } from "../api/profile/get.mjs";
import { updateProfile } from "../api/profile/update.mjs";

// Function to set up the edit post form with event listeners
export async function setEditProfileFormListener () {

    const form = document.querySelector("#edit-profile");
    
    if (form) {
        const { name, email } = load ("profile")
        form.name.value = name;
        form.email.value = email;

        const button = form.querySelector("button");
        button.disabled = true;

        const profile = await getProfile(name);

        form.avatar.value = profile.avatar;

        button.disabled = false;

        form.addEventListener("submit", (event)=> {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            profile.name = name;
            profile.email = email;
    
            updateProfile(profile).then((response) => {
                window.location.href = "/profile/index.html";
                });
        });
    };    
};