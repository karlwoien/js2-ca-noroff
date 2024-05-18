import { getPosts } from "../api/posts/get.mjs";
import { renderPostsTemplate } from "../templates/post.mjs";

export async function setSearchPostListener() {
    const searchInput = document.querySelector("#searchInput");
    const feed = document.querySelector("#feed");

    searchInput.addEventListener("input", async () => {
        const searchText = searchInput.value.toLowerCase();
        const allPosts = await getPosts();

        // Filter posts by matching the search text against post author name, post body content or post title content. Also checking for null values before accessing properties
        const filteredPosts = allPosts.filter(post =>
            (post.author && post.author.name && post.author.name.toLowerCase().includes(searchText)) ||
            (post.body && post.body.toLowerCase().includes(searchText)) ||
            (post.title && post.title.toLowerCase().includes(searchText))
        );

        feed.innerHTML = "";  // Clear the feed
        renderPostsTemplate(filteredPosts, feed);  // Render the filtered posts
    });
}