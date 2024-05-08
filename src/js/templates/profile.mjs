// Functionality to template out and render profile on profile page

//profile template function needs styling updates so it renders better on page.
export function profileTemplate (profileData) {

    // main div element
    const profileContainer = document.createElement("div");
    profileContainer.classList.add("row")

    //column for avatar/profile picture
    const avatarContainer = document.createElement("div")
    avatarContainer.classList.add("col-auto")

    const profileIcon = document.createElement ("i");
    profileIcon.classList.add("bi", "bi-person-circle", "fs-2")
    
    avatarContainer.appendChild(profileIcon);

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

    const followButton = document.createElement("button");
    followButton.classList.add("btn", "btn-primary");
    followButton.textContent = "Follow";

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-secondary")
    editButton.textContent = "Edit profile";

    form.appendChild(followButton);
    form.appendChild(editButton);

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