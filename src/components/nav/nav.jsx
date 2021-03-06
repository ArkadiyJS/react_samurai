import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css';


function Navbar(props) {
    return (
        <nav className={s.nav__bar}>
            <div className={s.item}>
                <NavLink to='/profile'  >Profile</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='/users' >Users</NavLink> 
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' >Message</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to='/music' >music</NavLink> 
            </div>
            <div className={s.item}>
                <NavLink to='/news' >news</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/setting' >setting</NavLink>
            </div>
        </nav>);


}
export default Navbar;