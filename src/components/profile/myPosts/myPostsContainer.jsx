import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./myPosts";


const mapStateToProps=(state)=>{
    return{
        state: state
        
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
    updateNewPostText:(text)=>{
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);

    },
    addPost:()=>{
        dispatch(addPostActionCreator());

    }

}}


const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;