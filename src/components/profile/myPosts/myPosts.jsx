import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts(props) {
    

    let postElements = props.posts.map((p)=><Post message={p.message} likesCount={p.likesCount} />)

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