// Functionality to template out and render posts and post to site

//Post template function needs styling updates so it renders better on page.
export function postTemplate (postData) {
    const postContainer = document.createElement("article");
    postContainer.classList.add ("row", "border", "rounded", "pt-3", "mb-2", "bg-white");
    
    const postLink = document.createElement ("a");
    postLink.href = `/feed/post/index.html?id=${postData.id}`
    postContainer.append(postLink);

    const postHeader = document.createElement ("div");
    postHeader.classList.add ("col-auto");
    postLink.append(postHeader);

    const postProfileAvatar = document.createElement ("i");
    postProfileAvatar.classList.add("bi", "bi-person-circle",)
    postHeader.append(postProfileAvatar)

    const postText= document.createElement("div")
    postText.classList.add ("col", "text-start")

    const profileName = document.createElement ("p")
    profileName.classList.add ("card-title", "fw-bold")
    profileName.innerText = postData.author.name;
    postHeader.append(profileName)

    const createdDate = document.createElement ("p")
    createdDate.classList.add("text-muted");
    createdDate.innerText = postData.created;
    postHeader.append(createdDate)

    const title = document.createElement ("p");
    title.innerText = postData.title;
    postText.append(title);

    const bodyText = document.createElement ("p");
    bodyText.classList.add("fw-normal")
    bodyText.innerText = postData.body;
    postText.append(bodyText);

    if (postData.media) {
    const media = document.createElement ("img")
    media.classList.add("card-img", "img-fluid", "mt-2")
    media.src = postData.media;
    media.alt = postData.title;
    postText.append(media);
    }
    
    postContainer.append(postText);
    
    return postContainer;
};

export function renderPostTemplate (postData, parent) {
    parent.append(postTemplate(postData));
};

export function renderPostsTemplate (postDataList, parent) {
    const postHtml = postDataList.map(postTemplate);
    parent.append(...postHtml);
};