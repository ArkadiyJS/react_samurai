import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css';


function Navbar() {
    return (
        <nav className={s.nav__bar}>
            <div className={s.item}>
                <NavLink to='/profile'  >profile</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='/musick' >musick</NavLink> 
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' >message</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='/news' >News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/setting' >setting</NavLink>
            </div>
        </nav>);


}
export default Navbar;