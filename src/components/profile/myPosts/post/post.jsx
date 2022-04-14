import React from "react";
import s from './post.module.css';

function Post (props) {
    return (
        <div className={s.post}>
            <img src="https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg"></img>
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>


        </div>

         
    )
}
export default Post;