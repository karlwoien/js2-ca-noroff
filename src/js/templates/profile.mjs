/**
 * Creates a profile template and renders it on the profile page.
 * 
 * This function takes profile data as a parameter and constructs a DOM structure representing
 * the user's profile, including their avatar, name, email, navigation links, and buttons for
 * editing the profile and logging out.
 * 
 * @param {Object} profileData The data of the profile to be rendered.
 * @param {string} profileData.name The name of the user.
 * @param {string} profileData.email The email of the user.
 * @param {string} [profileData.avatar] The URL of the user's avatar image (optional).
 * @returns {HTMLElement} The DOM element containing the profile template.
 * @example
 * ```js
 * // Profile data
 * const profileData = {
 *   name: "John Doe",
 *   email: "john.doe@example.com",
 *   avatar: "https://example.com/avatar.jpg"
 * };
 * 
 * // Render profile template
 * const profileElement = profileTemplate(profileData);
 * document.body.appendChild(profileElement);
 * ```
 */

export function profileTemplate (profileData) {

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

    const profileName = document.createElement ("h1")
    profileName.classList.add ("card-title", "fw-bold")
    profileName.innerText = profileData.name;

    const email = document.createElement ("p")
    email.classList.add("text-muted");
    email.innerText = profileData.email;

    textContainer.appendChild(profileName);
    textContainer.appendChild(email);

    //create profile nav
    const nav = document.createElement("nav");
    nav.className = "navbar";

    const navLinks = document.createElement("div")
    navLinks.classList.add("d-flex", "gap-3")

    const postsLink = document.createElement("a");
    postsLink.classList.add("nav-link", "fw-bold");
    postsLink.href = "#";
    postsLink.textContent = "Posts";

    const repliesLink = document.createElement("a");
    repliesLink.classList.add("nav-link");
    repliesLink.href = "#";
    repliesLink.textContent = "Replies";

    const mediaLink = document.createElement("a");
    mediaLink.classList.add("nav-link");
    mediaLink.href = "#";
    mediaLink.textContent = "Media";

    navLinks.appendChild(postsLink);
    navLinks.appendChild(repliesLink);
    navLinks.appendChild(mediaLink);

    const form = document.createElement("form");
    form.classList.add("d-flex", "justify-content-end", "gap-2")

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-primary")
    editButton.textContent = "Update profile";
    editButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "/profile/edit/index.html";
    });

    const logoutButton = document.createElement("button");
    logoutButton.classList.add("btn", "btn-danger");
    logoutButton.textContent = "Logout";
    logoutButton.id = "logoutButton"

    form.appendChild(editButton);
    form.appendChild(logoutButton);

    nav.appendChild(navLinks);
    nav.appendChild(form);


    //Append all elements to the section
    profileContainer.appendChild(avatarContainer);
    profileContainer.appendChild(textContainer);
    profileContainer.appendChild(nav);
    
    
   return profileContainer;
};

export function renderProfileTemplate (profileData, parent) {
    parent.append(profileTemplate(profileData));
};