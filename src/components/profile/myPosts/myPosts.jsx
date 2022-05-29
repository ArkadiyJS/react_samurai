import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";




function MyPosts(props) {
    
    
    

    

    return (
        <div className={s.myPosts}>
            <div>
                <textarea  ></textarea>
            </div>
            <div>
                <button >add post</button>
            </div>

            <div className={s.posts}> my posts</div>
            <Post/>
        </div>
     )
}
export default MyPosts;