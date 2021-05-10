import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/dialogs/'+props.id

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name='Kolya' id='1'/>
            <DialogItem name='Vasya' id='2'/>
            <DialogItem name='Petya' id='3'/>
            <DialogItem name='Nataliya' id='4'/>
            <DialogItem name='Anastasiya' id='5'/>
        </div>
        <div className={s.messages}>
            <Message message='Hi1'/>
            <Message message='Hi2'/>
            <Message message='Hi3'/>
        </div>
    </div>
}
export default Dialogs;