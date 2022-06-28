{
    props.users.map(u => <div key={u.id} >
        <span>
            <div >
                {/* <NavLink to={'/profile*'+ u.id}> */}
                <img src={u.photos.small != null ? u.photos.small : 'https://cdn.shazoo.ru/484333_3dxRqRs9wd_btntemp_1.png'} alt="avaUsers"></img>
                {/* </NavLink> */}
            </div>

            <div >
                {u.followed
                    ? <button onClick={() => { props.unFollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { props.followUp(u.id) }}>follow </button>
                }


            </div>
        </span>

        <span >
            <span>
                <div>{props.u.name}</div>

                <div>{props.u.status != null ? props.u.status : 'здесь должен быть статус=)'}</div>
            </span>
            
        </span>

    </div>)




}