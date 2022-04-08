import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <textarea>здесь будет текст</textarea>
            <button>add post</button>

            <div className={s.posts}> my posts</div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default MyPosts;