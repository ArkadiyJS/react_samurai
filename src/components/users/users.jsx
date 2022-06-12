import React from "react";
import UsersBar from "./usersbar/usersBar";
import s from './users.module.css'


function Users (props) {


    let usersElements = props.state.sidebar.usersPage.map(u=><UsersBar fullName={u.fullName} location={u.location.city}  />)
    return(
        <div>
            {usersElements}
            <div >
                <button className={s.showMore} >Show more</button>
            </div>
            
        </div>
    )
}
export default Users