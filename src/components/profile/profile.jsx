import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileinfo/profileinfo';

function ProfileCore() {
    return (
        <div className={s.profile}>
            
            <div>
                <ProfileInfo/>
                <MyPosts />
            </div>



        </div>
    )
}

export default ProfileCore;