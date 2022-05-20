import React from "react";

import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./messages/messages";





function Dialogs (props) {
    
    
    let dialogsElements = props.dialogData
        .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/> ); 
    
    
   

    let messageElements = props.messagesData
    .map ((message)=> <Message message={message.message}/>);

    let addMessage = ()=> {
        let text = newMessagesElement.current.value;
        props.addMessage(text);
        newMessagesElement.current.value = '';

    }
    let newMessagesElement = React.createRef();


    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
           {dialogsElements}
            
            
            </div>
            
            <div className={s.messages__item}>

               {messageElements}
               <textarea ref={newMessagesElement}></textarea>
               <button onClick={addMessage}>add message</button>

            </div>


        </div>
    )
}
export default Dialogs;