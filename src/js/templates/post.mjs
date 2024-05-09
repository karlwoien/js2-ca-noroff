// Functionality to template out posts and post to site

export function postTemplate (postData) {

    // Main div element
    const postContainer = document.createElement("article");
    postContainer.classList.add ("row", "border", "rounded", "pt-3", "mb-2", "bg-white");
    
    // Make the entire postContainer clickable
    postContainer.style.cursor = "pointer";
    postContainer.onclick = function() {
        window.location.href = `/feed/post/index.html?id=${postData.id}`;
    };

    //Column for avatar/profile image
    const avatarContainer = document.createElement ("div");
    avatarContainer.classList.add ("col-auto");

    if (postData.author.avatar) {
        const profileAvatar = document.createElement("img");
        profileAvatar.classList.add ("profile-image", "rounded-circle", "me-2"),
        profileAvatar.src = postData.author.avatar;
        profileAvatar.alt = postData.author.name + "profile avatar";
        avatarContainer.append(profileAvatar);
    } else {
        const noProfileAvatar =document.createElement("div");
        noProfileAvatar.classList.add("profile-image", "rounded-circle", "me-2")
        avatarContainer.append(noProfileAvatar);

        const profileAvatar = document.createElement ("i");
        profileAvatar.classList.add("bi", "bi-person-circle")
        noProfileAvatar.append(profileAvatar)
    }
    
    //Column for content
    const contentContainer= document.createElement("div")
    contentContainer.classList.add ("col", "text-start")

    const profileName = document.createElement ("p")
    profileName.classList.add ("card-title", "fw-bold")
    profileName.innerText = postData.author.name;

    const createdDate = document.createElement ("p")
    createdDate.classList.add("text-muted");
    const dateObject = new Date (postData.created);
    const formattedDate = dateObject.toISOString().split("T")[0];
    createdDate.innerText = formattedDate;

    const title = document.createElement ("p");
    title.innerText = postData.title;

    const bodyText = document.createElement ("p");
    bodyText.classList.add("fw-normal")
    bodyText.innerText = postData.body;

    contentContainer.appendChild(profileName);
    contentContainer.appendChild(createdDate);
    contentContainer.appendChild(title);
    contentContainer.appendChild(bodyText);

    if (postData.media) {
    const media = document.createElement ("img")
    media.classList.add("post-image", "img-fluid", "mt-2", "mb-3")
    media.src = postData.media;
    media.alt = postData.title;
    contentContainer.append(media);
    }
    
    // Append all to main div
    postContainer.appendChild(avatarContainer);
    postContainer.appendChild(contentContainer);
    
    return postContainer;
};

export function renderPostTemplate (postData, parent) {
    parent.append(postTemplate(postData));
};

export function renderPostsTemplate (postDataList, parent) {
    const postHtml = postDataList.map(postTemplate);
    parent.append(...postHtml);
};