import React from 'react';
import s from './content.module.css';

function ContentCore() {
    return (
        <div className={s.content__core}>
            <div className=''>
                <img src='https://cdnn21.img.ria.ru/images/07e4/06/1a/1573521462_0:0:3072:2048_1920x0_80_0_0_c1be7ae0a6a6817dbaa30531631a2528.jpg'></img>
                
                </div>
            <div className={s.avatar}>
                <img src='https://avatars.mds.yandex.net/get-zen_doc/29485/pub_5a0e944d5f49676fac141fd6_5a0e94b08651652c74dc803e/scale_1200'>
                </img>
                аватарка</div>
            <div className={s.posts}>
                мои посты
                <div className={s.item} >посты 0</div>
                <div className={s.item}>посты 1</div>
                <div className={s.item}>посты 2</div>
            </div>

        </div>
    )
}

export default ContentCore;