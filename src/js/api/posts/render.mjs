
import { getPosts } from "./get.mjs";
import {renderPostsTemplate} from "../../templates/post.mjs"


// Function to render posts to feed page. 

export async function renderPosts () {

const posts = await getPosts();

const container = document.getElementById("#feed");

renderPostsTemplate(posts, container);
};
