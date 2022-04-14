import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <textarea>здесь будет текст</textarea>
            <button>add post</button>

            <div className={s.posts}> my posts</div>
            <Post message= 'hi, how are you?' />
            <Post message='GOOOD my first post' />
            <Post />
            <Post />
        </div>
    )
}
export default MyPosts;