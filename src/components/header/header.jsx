import React from 'react';
import s from'./header.module.css';

function Header (){
    return(
        <div className={s.header__line}>
            <div className={s.logo_head}>
                <img  src="http://getdrawings.com/vectors/assassin-vector-33.jpg" alt='logo'></img>
                
            </div>
        </div>
    )
}

export default Header;