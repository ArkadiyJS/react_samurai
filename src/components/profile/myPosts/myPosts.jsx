import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";




function MyPosts(props) {
    debugger
    let postElements =
        props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = () => {
            props.addPost();
        }
        
    let newPostElement =React.createRef();
    
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text); 
    }
    
    
    let currentTextArea = props.newPostText

    

    return (
        <div className={s.myPosts}>
            
            <div>
                <textarea onChange={onPostChange} value={currentTextArea} ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>

            <div className={s.posts}> my posts</div>
            
            {postElements}
        </div>
     )
}
export default MyPosts;