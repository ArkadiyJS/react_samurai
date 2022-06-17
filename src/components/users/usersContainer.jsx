import { connect } from "react-redux";
import { followAC , setUsersAC, unfollowAC} from "../../redux/userReducer";
import Users from "./users";



const mapStateToProps=(state)=>{
       
    return{
        users: state.usersPage.users
        

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
        }
    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;