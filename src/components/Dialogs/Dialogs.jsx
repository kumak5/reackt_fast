import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

let dialogs = [
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Nataliya'},
    {id: 4, name: 'Nikolya'},
    {id: 5, name: 'Anastasiya'}
]

let messages = [
    {id: 1, message: 'Hi1'},
    {id: 2, message: 'Hi2'},
    {id: 3, message: 'Hi3'},
    {id: 4, message: 'Hi4'},
    {id: 5, message: 'Hi5'},
    {id: 6, message: 'Hi6'}
]

let dialogsElemenst = dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)

let messageElements = messages.map( m =><Message message={m.message}/>)

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElemenst}
            {/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
            {/*<DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
        </div>

    <div className={s.messages}>
        {messageElements}
        {/*<Message message={messages[0].message}/>*/}
        {/*<Message message={messages[1].message}/>*/}
    </div>
</div>
}
export default Dialogs;