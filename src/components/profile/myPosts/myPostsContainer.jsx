import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./myPosts";





function MyPostsContainer(props) {
   
   
    


    let addPost =()=>{
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange =(text)=>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    
    
    

    

    return (<MyPosts updateNewPostText={onPostChange} 
        addPost={addPost}
           state={props.state}  />)
}
export default MyPostsContainer;