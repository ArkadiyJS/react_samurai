import React from "react";


import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";





function DialogsContainer (props) {
    
    
    
    let onSendMessageClick =()=>{
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange=(body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        state={props.state}/>)
}
export default DialogsContainer;