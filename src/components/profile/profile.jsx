import React from 'react';
import s from './profile.module.css';
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfileInfo from './profileinfo/profileinfo';

function ProfileCore(props) {
    
    
    
    return (
        <div className={s.profile}>
            
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer    />
            </div>
            
        </div>
    )
}

export default ProfileCore;