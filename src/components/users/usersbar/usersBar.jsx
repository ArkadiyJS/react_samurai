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
                    <img src='https://i.pinimg.com/736x/d9/2d/6a/d92d6a2e69b6ea8f48a04e9e5453dc8f--warcraft-art-world-of-warcraft.jpg' alt="avaUsers"></img>
                
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