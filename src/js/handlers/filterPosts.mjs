// Functionality to filter posts on feed page

import { getPosts} from "../api/posts/get.mjs";
import { renderPostsTemplate } from "../templates/post.mjs";


export async function filterPosts () {

    const filterForm = document.querySelector("#filter")
    const feed = document.querySelector("#feed")

    // Render feed base on the selected option
    filterForm.addEventListener("change", async () => {
        const allPosts = await getPosts();
        let posts;
        const selectedOption = filterForm.value;
        
        // clear feed
        feed.innerHTML = "";

        //handle selection
        if (selectedOption === "media") {
            //get posts with media
            posts = allPosts.filter(post => post.media && post.media.trim() !== "");
        } else if (selectedOption === "noMedia") {
            //get posts without media
            posts = allPosts.filter(post => !post.media || post.media.trim() === "");
        } else {
            //get all posts
            posts = allPosts;
        }

        renderPostsTemplate(posts, feed);

    });
};