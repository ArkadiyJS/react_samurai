import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css';


function Navbar() {
    return (
        <nav className={s.nav__bar}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activelink}>profile</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='/musick' activeClassName={s.activelink}>musick</NavLink> 
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activelink}>messege</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activelink}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/setting' activeClassName={s.activelink}>setting</NavLink>
            </div>
        </nav>);


}
export default Navbar;