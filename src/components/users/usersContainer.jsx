import { connect } from "react-redux";
import { followUpCreator } from "../../redux/sidebarReducer";
import Users from "./users";



const mapStateToProps=(state)=>{
    return{
        state: state
        

    }
}
const mapStateToDispatch =(dispatch)=>{
    return{
        followup:()=>{dispatch(followUpCreator())} 
    }
}


const UsersContainer = connect(mapStateToProps,mapStateToDispatch)(Users);
export default UsersContainer;