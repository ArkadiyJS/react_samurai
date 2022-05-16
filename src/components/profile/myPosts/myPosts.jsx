import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts(props) {
    debugger;
    

    let postElements = props.posts.map((p)=><Post message={p.message} likesCount={p.likesCount} />)

    
    let addPost =()=>{
        let text = dataNewPost.current.value;
        props.addPost(text)
    }
    let dataNewPost=React.createRef();

    


    return (
        <div className={s.myPosts}>
            <div>
                <textarea ref={dataNewPost}>здесь будет текст</textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>

            <div className={s.posts}> my posts</div>
            {postElements}
        </div>
    )
}
export default MyPosts;