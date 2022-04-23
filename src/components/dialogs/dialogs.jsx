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
const Messege = (props) => {
    return(
        <div className={s.messege}>{props.messege}</div>
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
    let messagesData = [
        { id: 1, name:'ark messege'},
        { id: 2, name:'sveta messege'},
        { id: 3, name:'matvey messege'},
        { id: 4, name:'sofa messege'},
        { id: 5, name:'kuzya messege'},

    ]


    return (

        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
            Dialogs
            <DialogItem  name='ark' id='1' />
            <DialogItem  name='sveta' id='2' />
            <DialogItem  name='matvey' id='3' />
            <DialogItem  name='sofa' id='4' />
            <DialogItem  name='kuzya' id='5' />
            
            
            </div>
            
            <div className={s.messeges__item}>

                messeges
                <Messege messege='hi'/>
                <Messege messege='hi gayz'/>
                <Messege messege='yo'/>
                <Messege messege='buu'/>

            </div>


        </div>
    )
}
export default Dialogs;