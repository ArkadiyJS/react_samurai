import React from "react";

import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./messages/messages";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";





function Dialogs (props) {
    
    
    


    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
           <DialogItem/>
            
            
            </div>
            
            <div className={s.messages__item}>

               <Message/>
               <textarea  ></textarea>
               <button >add message</button>

            </div>


        </div>
    )
}
export default Dialogs;