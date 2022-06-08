import React from "react";
import UsersBar from "./usersbar/usersBar";
import s from './users.module.css'


function Users (props) {
debugger
    let usersElements = props.state.sidebar.usersPage.map(u=><UsersBar name={u.name} country={u.country} city={u.city}/>)
    return(
        <div>
            {usersElements}
            <div >
                <button className={s.showMore}>Show more</button>
            </div>
        </div>
    )
}
export default Users