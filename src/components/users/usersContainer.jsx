import React from "react";
import { connect } from "react-redux";
import { followThunkCreator,  unFollowThunkCreator, setCurrentPage, setTotalCount,  getUsersThunkCreator } from "../../redux/userReducer";
import UsersPureCom from "./usersPureCom";
import Preloader from "../preloader/preloader";




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
        
        this.props.getUsersThunkCreator(currentPage,this.props.pageSize)
       
    }

    render() {


        return <>
            <UsersPureCom currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollowThunkCreator={this.props.unFollowThunkCreator}
                followThunkCreator={this.props.followThunkCreator}
                pageSize={this.props.pageSize}
                
            />
            {this.props.isFetching ? <Preloader /> : null}
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


export default connect(mapStateToProps,
     {followThunkCreator,  unFollowThunkCreator,
     setCurrentPage, setTotalCount, 
     getUsersThunkCreator,
    
    })(UsersContainer);