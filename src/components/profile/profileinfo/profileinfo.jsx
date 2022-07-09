import React from 'react';
// import Preloader from '../../preloader/preloader';
import s from './profileinfo.module.css';
import ProfileStatus from './profileStatus';


function ProfileInfo(props) {
    
    // if (!props.profile){
    //     return<Preloader/>
    // }
    
    
    return (
        <div className={s.profile}>
            <div className=''>
                {/* <img src={props.profile.photos.small} alt='photoSmall'></img> */}

            </div>
            <div className={s.avatar}>
                {/* <img src={props.profile.photos.large} alt='avatarImgLarge'></img> */}
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>



        </div>
    )
}

export default ProfileInfo;