import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../dialogs.module.css";


const DialogItem = (props) => {

    

    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to='/dialogs'></NavLink> 
            </div>

        </div>
    )
}


export default DialogItem;