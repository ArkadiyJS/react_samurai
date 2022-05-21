import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileinfo/profileinfo';

function ProfileCore(props) {
    
    return (
        <div className={s.profile}>
            
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText}/>
            </div>



        </div>
    )
}

export default ProfileCore;