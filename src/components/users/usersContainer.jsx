import { connect } from "react-redux";
import { followAC , setUsersAC, unfollowAC, setCurrentPageAC, setTotalCountAC} from "../../redux/userReducer";
import Users from "./usersClass";




const mapStateToProps=(state)=>{
    
    return{
        users: state.usersPage.users,

        pageSize: state.usersPage.pageSize,

        totalUsersCount: state.usersPage.totalUsersCount,

        currentPage: state.usersPage.currentPage,
        

    }
    
}
const mapDispatchToProps =(dispatch)=>{
    
    return{

        followUp:(userid)=>{
            dispatch(followAC(userid));
        } ,
        
        unFollow:(userid)=>{
            dispatch(unfollowAC(userid));
        } ,

        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(currentPage)=>{
        dispatch(setCurrentPageAC(currentPage))},

        setTotalCount:(totalCount)=>{
            dispatch(setTotalCountAC(totalCount))
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;