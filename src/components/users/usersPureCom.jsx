import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import s from './users.module.css'

// // Math.ceil (this.props.totalUsersCount / this.props.pageSize); вместо 10!
// let pagesCount = 10;
// let pages = [];
// for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i);
// }


function UsersPureCom(props) {

    

    let pagesCount = 10;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (


        <div className={s.usersBlock}>


            <div className={s.pages}>
                {pages.map((p) => {
                    return <span onClick={(e) => props.onPageChanged(p)}
                        className={props.currentPage === p && s.selectedPage}>{p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                        
                            <NavLink to={'/profile/'+ u.id}>
                            <img alt="avatarUser" src={u.photos.small != null ? u.photos.small : 'https://i.pinimg.com/originals/a8/6f/7d/a86f7d00f556203f9b43abff6ca6e9de.jpg'} />
                            </NavLink>
                        </div>
                        <div >
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":'3a17e2ad-7a32-44d3-a695-70588fd52fad'
                                    }
                                })
                                .then(response=>{
                                    if (response.data.resultCode===0){
                                        props.unFollow(u.id)

                                    }
                                })
                                    
                                    
                                     }}>unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                        withCredentials:true,
                                        headers:{
                                            "API-KEY":'3a17e2ad-7a32-44d3-a695-70588fd52fad'
                                        }
                                    })
                                    .then(response=>{
                                        if (response.data.resultCode===0){
                                            props.followUp(u.id)

                                        }
                                    })  }}>follow </button>
                            }
                        </div>


                    </span>
                    <span >
                        <span>
                            <div>{u.name}</div>

                            <div>{u.status != null ? u.status : 'здесь должен быть статус=)'}</div>
                        </span>

                    </span>





                </div>

                )
            }



        </div>
    )
}
export default UsersPureCom;