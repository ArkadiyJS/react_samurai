import React from "react";
import UsersBar from "./usersbar/usersBar";
function Users (props) {
debugger
    let usersElements = props.state.sidebar.usersPage.map(u=><UsersBar name={u.name} country={u.country} city={u.city}/>)
    return(
        <div>
            {usersElements}
            <div>
                <buttom>Show more</buttom>
            </div>
        </div>
    )
}
export default Users