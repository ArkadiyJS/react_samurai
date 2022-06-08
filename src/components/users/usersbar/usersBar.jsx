import React from "react";
import s from './usersBar.module.css'


function UsersBar (props){
    let followTry =()=>{
        props.followUp()
    }
    
    return(
        <div className={s.usersBlock}>
            <div>
                <div className={s.avatar}>
                    <img alt="avaUsers"></img>
                
                </div>
            
                <div className={s.buttonFollow}>
                    <button onClick={followTry}> follow</button>

                </div>
            </div>
            
            <div className={s.usersInfo}>

                 <div>{props.name}</div>

                <div>{props.country},{props.city}</div>
            

            </div>
        </div>
    )
}
export default UsersBar;