import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profileinfo/profileinfo';

function ProfileCore(props) {
    let posts = [
        {id:1, message: 'hi gayz', likesCount:12 },
        {id:2, message: 'hi gayz mayz', likesCount:15 },
        {id:2, message: 'hi dudu', likesCount:15 },
        {id:2, message: 'hi gara dada', likesCount:15 },
        
    ]
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