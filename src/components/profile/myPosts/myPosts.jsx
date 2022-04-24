import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts() {
let posts = [
    {id:1, message: 'hi gayz', likesCount:12 },
    {id:2, message: 'hi gayz mayz', likesCount:15 },
    {id:2, message: 'hi dudu', likesCount:15 },
    {id:2, message: 'hi gara dada', likesCount:15 },
    
]
    let postElements = posts
        .map((p)=><Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.myPosts}>
            <div>
                <textarea>здесь будет текст</textarea>
            </div>
            <div>
                <button>add post</button>
            </div>

            <div className={s.posts}> my posts</div>
            {postElements}
        </div>
    )
}
export default MyPosts;