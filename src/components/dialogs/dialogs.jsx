import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./messages/messages";






function Dialogs (props) {
    
    let dialogsElement= props.state.dialogsPage.dialogData.map(d=><DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.dialogsPage.messagesData.map(m=><Message message={m.message}/>)
    
    let currentMessage = props.state.dialogsPage.newMessageBody;

    let onSendMessageClick=()=>{
        props.sendMessage();
    }
    
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
           
            {dialogsElement}
            
            </div>
            
            <div className={s.messages__item}>
                {messagesElements}
               
               <textarea value={currentMessage}  onChange={onNewMessageChange}></textarea>
               <button onClick={onSendMessageClick} >add message</button>

            </div>
        </div>
    )
}
export default Dialogs;