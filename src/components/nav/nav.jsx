import React from 'react';
import s from'./nav.module.css';


function Navbar() {
    return (
        <nav className={s.nav__bar}>
            <div className={s.item}>
                profile
            </div>
            <div className={`${s.item} ${s.active}`}>
                musick
            </div>
            <div className={s.item}>
                messege

            </div>
            <div className={s.item}>
                setting
            </div>
        </nav>);


}
export default Navbar;