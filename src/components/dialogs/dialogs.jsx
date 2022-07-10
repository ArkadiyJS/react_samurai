import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./dialogItem/dialogItem";
import Message from "./messages/messages";

import { Field, reduxForm } from "redux-form";






function Dialogs (props) {
    
    let dialogsElement= props.dialogsPage.dialogData.map(d=><DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messagesData.map(m=><Message message={m.message}/>)
    
    
    let addNewMessage=(values)=>{ 
        props.sendMessage(values.post);
    }
    
    
    
    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
           
            {dialogsElement}
            
            </div>
            
            <div className={s.messages__item}>
                {messagesElements}
               <postAreaElementReduxForm onSubmit={addNewMessage}/>
               
               

            </div>
        </div>
    )
}

const PostElementsForm=(props)=>{
    
    
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name='post' component='textarea'/>
            <button>add message</button>
        </form>
    )
}


export let postAreaElementReduxForm = reduxForm({form:'post'})(PostElementsForm)







export default Dialogs;