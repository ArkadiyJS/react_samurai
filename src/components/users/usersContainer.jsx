import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalCountAC, setToggleIsFetchingAC } from "../../redux/userReducer";

import * as axios from "axios";
import UsersPureCom from "./usersPureCom";

import Preloader from "../preloader/preloader";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })

    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { this.props.setUsers(response.data.items)
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

        isFetching: state.userPage.isFetching,


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