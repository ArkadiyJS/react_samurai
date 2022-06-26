import React from "react";
import s from './users.module.css'
import * as axios from "axios";




class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { 
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
             })

    }
    
    onPageChanged = (p)=>{
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { this.props.setUsers(response.data.items) })
    
    
    }

    render() {
        // Math.ceil (this.props.totalUsersCount / this.props.pageSize); вместо 10
        let pagesCount = 10;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (


            <div className={s.usersBlock}>


                <div className={s.pages}> {pages.map((p) => {
                    return (
                        <span onClick={(e)=>this.onPageChanged(p)} className={this.props.currentPage === p && s.selectedPage}>{p} </span>
                    )
                })}
                </div>
                    

                {
                    this.props.users.map(u => <div key={u.id} >
                        <span>
                            <div className={s.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : 'https://cdn.shazoo.ru/484333_3dxRqRs9wd_btntemp_1.png'} alt="avaUsers"></img>

                            </div>

                            <div className={s.buttonFollow}>
                                {u.followed
                                    ? <button onClick={() => { this.props.unFollow(u.id) }}> unfollow</button>
                                    : <button onClick={() => { this.props.followUp(u.id) }}>follow </button>}


                            </div>
                        </span>

                        <span className={s.usersInfo}>
                            <span>
                                <div>{u.name}</div>

                                <div>{u.status != null ? u.status : 'здесь должен быть статус=)'}</div>
                            </span>
                            <span>
                                <div></div>

                                <div></div>
                            </span>
                        </span>

                    </div>)




                }
            </div>)

    }

}

export default Users