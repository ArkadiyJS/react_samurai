import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css";

function Dialogs () {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
            human
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to='/dialogs/arkasha'>arkasha</NavLink> 
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/arkasha'>svetik</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/arkasha' >matysha</NavLink>
            </div>
            <div className={s.dialog}>
                <NavLink to='/dialogs/arkasha'>sofia</NavLink>
            </div>
            <div className={s.dialog} >
                <NavLink to='/dialogs/arkasha'>Kuzya</NavLink>

            </div>
            
            </div>
            
            <div className={s.messeges__item}>

                messeges
                <div className={s.messege}>ark</div>
                <div className={s.messege}>svetik</div>
                <div className={s.messege}>matvey</div>
                <div className={s.messege}>sofa </div>
                <div className={s.messege}>kuzya</div>

            </div>


        </div>
    )
}
export default Dialogs;