import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./header.module.css';

function Header (props){
    return(
        <div className={s.header__line}>
            <div className={s.logo_head}>
                <img  src="http://getdrawings.com/vectors/assassin-vector-33.jpg" alt='logo'></img>
                
            </div>
            
            <div className={s.loginBlock}>
            <NavLink to={'/login'}>login</NavLink>
            </div>
        </div>
    )
}

export default Header;