import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css";


const DialogItem = (props) => {

    let path = '/dialogs/'+ props.id

    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink> 
            </div>

        </div>
    )
}
const message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}



function Dialogs (props) {

    let dialogData = [
        { id: 1, name:'ark'},
        { id: 2, name:'sveta'},
        { id: 3, name:'matvey'},
        { id: 4, name:'sofa'},
        { id: 5, name:'kuzya'},

    ]
    let dialogsElements = dialogData
        .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/> ); 
    
    
    let messagesData = [
        { id: 1, name:'ark message'},
        { id: 2, name:'sveta message'},
        { id: 3, name:'matvey message'},
        { id: 4, name:'sofa message'},
        { id: 5, name:'kuzya message'},

    ]

    let messageElements = messagesData
    .map ((message)=> <message message={message.message}/>);


    


    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
           {dialogsElements}
            
            
            </div>
            
            <div className={s.messages__item}>

               {messageElements}

            </div>


        </div>
    )
}
export default Dialogs;