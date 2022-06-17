import React from "react";
import s from './users.module.css'
// import * as axios from "axios";
// axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//     debugger
//     props.setUsers(response.data.items)
// });



function Users (props) {
    if (props.users.length === 0){
            props.setUsers([
                { id: 1, photoUrl:'https://i.rutab.net/upload/2021/userfiles/4162271003167507.jpg', followed: true, fullName: 'Arkadiy', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
                { id: 2, photoUrl:'https://www.stgames.it/wp-content/uploads/2016/03/hearthstone-pala-skin.jpg',followed: true, fullName: 'sveta', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
                { id: 3, photoUrl:'https://wow.zamimg.com/uploads/screenshots/normal/714905-.jpg',followed: true, fullName: 'matvey', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
                { id: 4, photoUrl:'https://i.pinimg.com/736x/d3/b2/3e/d3b23e3202032540bbaf7ce0518a7f17--warcraft-art-world-of-warcraft.jpg',followed: true, fullName: 'sofa', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
                { id: 5, photoUrl:'https://phonoteka.org/uploads/posts/2021-07/1625631588_16-phonoteka-org-p-kot-v-dospekhakh-art-krasivo-17.jpg',followed: true, fullName: 'kuzya', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
        ])
    }
   
     return <div className={s.usersBlock}>
            {
                props.users.map(u=><div key={u.id} >
                    <span>
                        <div className={s.avatar}>
                            <img src={u.photoUrl} alt="avaUsers"></img>
                
                         </div>
            
                        <div className={s.buttonFollow}>
                            {u.followed 
                                ? <button onClick={()=>{props.unFollow(u.id)}}> unfollow</button>
                                :<button onClick={()=>{props.followUp(u.id)}}>follow </button>}
                    

                        </div>
                    </span>
            
                    <span className={s.usersInfo}>
                        <span>
                            <div>{u.fullName}</div>

                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>

                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    
                </div>)



            
            }
        </div>
    
        }
export default Users