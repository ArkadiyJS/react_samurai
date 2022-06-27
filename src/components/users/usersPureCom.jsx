import React from "react";
import s from './users.module.css'




function UsersPureCom(props) {


    
    let pagesCount = 10;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    
    return (
        <div>

            <div className={s.usersBlock}>


                <div className={s.pages}> {pages.map((p) => { return <span onClick={(e) => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage}>{p} </span>})}
                </div>


                {
                    props.users.map(u => <div key={u.id} >
                        <span>
                            <div className={s.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : 'https://cdn.shazoo.ru/484333_3dxRqRs9wd_btntemp_1.png'} alt="avaUsers"></img>

                            </div>

                            <div className={s.buttonFollow}>
                                {u.followed
                                    ? <button onClick={() => { props.unFollow(u.id) }}> unfollow</button>
                                    : <button onClick={() => { props.followUp(u.id) }}>follow </button>}


                            </div>
                        </span>

                        <span className={s.usersInfo}>
                            <span>
                                <div>{props.u.name}</div>

                                <div>{props.u.status != null ? props.u.status : 'здесь должен быть статус=)'}</div>
                            </span>
                            <span>
                                <div></div>

                                <div></div>
                            </span>
                        </span>

                    </div>)




                }
            </div>


        </div>

    )
}
export default UsersPureCom;