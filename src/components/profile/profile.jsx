import React from 'react';
import s from './profile.module.css';
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './profileinfo/profileinfo';

function ProfileCore(props) {
    debugger
    
    
    return (
        <div className={s.profile}>
            
            <div>
                <ProfileInfo />
                <MyPostsContainer    />
            </div>
            
        </div>
    )
}

export default ProfileCore;