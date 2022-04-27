import React from 'react';
import s from './profileinfo.module.css';


function ProfileInfo(props) {
    return (
        <div className={s.profile}>
            <div className=''>
                <img src='https://cdnn21.img.ria.ru/images/07e4/06/1a/1573521462_0:0:3072:2048_1920x0_80_0_0_c1be7ae0a6a6817dbaa30531631a2528.jpg' alt='coreImg'></img>

            </div>
            <div className={s.avatar}>
                <img src='https://avatars.mds.yandex.net/get-zen_doc/29485/pub_5a0e944d5f49676fac141fd6_5a0e94b08651652c74dc803e/scale_1200' alt='avatarImg'>
                </img>
            </div>
            



        </div>
    )
}

export default ProfileInfo;