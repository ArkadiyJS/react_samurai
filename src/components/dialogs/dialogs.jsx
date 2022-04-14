import React from "react";
import s from "./dialogs.module.css";

function Dialogs (props) {
    return (
        <div className={s.dialogs}>
            <div className={s.human}>
            human
            </div>
            
            <div className={s.messege}>

                messege
            </div>


        </div>
    )
}
export default Dialogs;