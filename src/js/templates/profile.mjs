// Functionality to template out and render profile on profile page

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