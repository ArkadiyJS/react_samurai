import { connect } from "react-redux";

import { sendMessageCreator} from "../../redux/dialogsReducer";

import Dialogs from "./dialogs";


const mapStateToProps =(state)=>{
    
    return{
        dialogsPage: state.dialogsPage,
        isAuth : state.auth.isAuth
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        sendMessage:(post)=>{
            dispatch(sendMessageCreator(post))
        },
        

    }
}
 

export default connect(mapStateToProps,mapDispatchToProps)(Dialogs)