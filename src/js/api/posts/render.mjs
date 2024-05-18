
import { getPosts } from "./get.mjs";
import { getPost } from "./get.mjs";
import {renderPostsTemplate} from "../../templates/post.mjs"
import { renderPostTemplate } from "../../templates/post.mjs";

// Function to render posts to feed page. 

export async function renderPosts () {

const posts = await getPosts();

const container = document.getElementById("feed");

renderPostsTemplate(posts, container);
};

// Function to render single post to feed/post page.

export async function renderPost () {

    const url = new URL (location.href);
    let id = url.searchParams.get("id");

    const post = await getPost(id);
    
    const container = document.getElementById("#single-post");
    
    renderPostTemplate(post, container);
    };
