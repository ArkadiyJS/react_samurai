import React from "react";
import s from './post.module.css';

function Post () {
    return (
        <div className={s.post}>
            <img src="https://i.pinimg.com/originals/a8/8b/b6/a88bb6c1cbeeafe541d381d6d15d23d1.jpg"></img>
            post 1
            <div>
            <span>like</span>
            </div>


        </div>
    )
}
export default Post;