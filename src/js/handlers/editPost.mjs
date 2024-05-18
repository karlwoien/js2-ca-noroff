import { getPost } from "../api/posts/get.mjs";
import { updatePost } from "../api/posts/update.mjs"
import { load } from "../storage/storageHandler.mjs";

// Function to check if the author of the post is the logged in user
async function isUserLoggedIn(postAuthor) {
    const { name } = await load("profile");
    return postAuthor === name;
}

// Function to show or hide the updateDelete section on view post by ID page based on logged-in status
async function showUpdateDeleteSection(postAuthor) {
    const updateDeleteSection = document.getElementById("updateDelete");
    if (await isUserLoggedIn(postAuthor)) {
        updateDeleteSection.style.display = 'block';
    } else {
        updateDeleteSection.style.display = 'none';
    }
}

// Function to set up the edit post form with event listeners
export async function setEditPostFormListener () {
    const url = new URL (location.href);
    const id = url.searchParams.get("id");

    const post = await getPost(id);

    await showUpdateDeleteSection(post.author.name);

    if (!await isUserLoggedIn(post.author.name)) {
        return;
    }

    const form = document.querySelector("#edit-post");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

       

        form.title.value = post.title;
        form.body.value = post.body;
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", (event)=> {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;
    
            updatePost(post).then((response) => {
                location.reload();
                });
        });
    };    
};