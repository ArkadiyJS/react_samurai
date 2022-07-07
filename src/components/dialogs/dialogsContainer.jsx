import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
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
 
const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs);



export default DialogsContainer;