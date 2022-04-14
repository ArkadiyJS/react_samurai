import React from 'react';
import s from'./nav.module.css';


function Navbar() {
    return (
        <nav className={s.nav__bar}>
            <div className={s.item}>
               <a href='/profile'>profile</a> 
               
            </div>
            <div className={`${s.item} ${s.active}`}>
                musick
            </div>
            <div className={s.item}>
                <a href='/dialogs'>messege</a>

            </div>
            <div className={s.item}>
                setting
            </div>
        </nav>);


}
export default Navbar;