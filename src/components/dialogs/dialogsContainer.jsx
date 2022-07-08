import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import { withAuthRedirect } from "../HOCredirect/withAuthRedirect";
import Dialogs from "./dialogs";


const mapStateToProps =(state)=>{
    
    return{
        dialogsPage: state.dialogsPage,
        isAuth : state.auth.isAuth
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },

    }
}
 







export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs )