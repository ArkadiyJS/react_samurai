import React from "react";

import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./messages/messages";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";





function Dialogs (props) {
    debugger;
    let state=props.store.getState()
    
    
    let dialogsElements = props.store.dialogPage
        .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/> ); 
    
    
   

    let messageElements = props.messagesData
    .map ((message)=> <Message message={message.message}/>);

    let newMessageBody =state.newMessageBody;
    let onNewMessageChange = (e)=>{
       let body = e.textarea.value
        props.store.dispatch( updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator())

    }
    


    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
           {dialogsElements}
            
            
            </div>
            
            <div className={s.messages__item}>

               {messageElements}
               <textarea  value={newMessageBody}  onChange={onNewMessageChange}></textarea>
               <button onClick={onSendMessageClick}>add message</button>

            </div>


        </div>
    )
}
export default Dialogs;