import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileinfo/profileinfo';

function ProfileCore(props) {
    
    return (
        <div className={s.profile}>
            
            <div>
                <ProfileInfo/>
                <MyPosts posts={posts}/>
            </div>



        </div>
    )
}

export default ProfileCore;