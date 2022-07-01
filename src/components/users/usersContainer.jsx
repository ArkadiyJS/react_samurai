import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalCountAC, setToggleIsFetchingAC } from "../../redux/userReducer";


import UsersPureCom from "./usersPureCom";

import Preloader from "../preloader/preloader";
import {getUsers} from "../../api/api";



class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true)

        getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })

    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        getUsers(p, this.props.pageSize)
            .then(data => { this.props.setUsers(data.items)
                                this.props.toggleIsFetching(false) })


    }

    render() {
        

        return <>
        <UsersPureCom currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unFollow={this.props.unFollow}
            followUp={this.props.followUp}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            isFetching={this.props.isFetching}
        />
        {this.props.isFetching ? <Preloader/> : null}
        </>

    }

}



const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,

        pageSize: state.usersPage.pageSize,

        totalUsersCount: state.usersPage.totalUsersCount,

        currentPage: state.usersPage.currentPage,

        isFetching: state.usersPage.isFetching,


    }

}
const mapDispatchToProps = (dispatch) => {

    return {

        followUp: (userid) => {
            dispatch(followAC(userid));
        },

        unFollow: (userid) => {
            dispatch(unfollowAC(userid));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },

        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(setToggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);