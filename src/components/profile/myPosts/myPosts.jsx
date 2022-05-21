import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";

function MyPosts(props) {
    
    

    let postElements = props.posts.map((p)=><Post message={p.message} likesCount={p.likesCount} />)

    
    let addPost =()=>{
        let text = dataNewPost.current.value;
        props.addPost(text)
        dataNewPost.current.value = ''; 

    }
    let  dataNewPost=React.createRef();

    
    let onPostChange=()=>{};

    return (
        <div className={s.myPosts}>
            <div>
                <textarea ref={dataNewPost} value={props.newPostText} onChange={} >здесь будет текст</textarea>
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