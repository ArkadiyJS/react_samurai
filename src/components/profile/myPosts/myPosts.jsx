import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts() {
let postData = [
    {id:1 }
]

    return (
        <div className={s.myPosts}>
            <div>
                <textarea>здесь будет текст</textarea>
            </div>
            <div>
                <button>add post</button>
            </div>

            <div className={s.posts}> my posts</div>
            <Post message='hi, how are you?' likesCount='0' />
            <Post message='GOOOD my first post' likesCount='23' />
            <Post />
            <Post />
        </div>
    )
}
export default MyPosts;