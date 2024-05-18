import { removePost } from "../api/posts/delete.mjs";

export function setDeletePostListener() {
    const deleteButton = document.getElementById("deleteButton");

    const url = new URL (location.href);
    let id = url.searchParams.get("id");

    if (deleteButton) {
        deleteButton.addEventListener("click", function() {
            removePost(id).then(response => {
                    location.href = "/feed/index.html";
                })
                .catch(error => {
                    console.error("Failed to delete post:", error);
                });
        });
    }
};