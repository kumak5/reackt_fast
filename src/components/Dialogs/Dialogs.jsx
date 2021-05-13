import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElemenst = props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map( m =><Message message={m.message}/>)

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElemenst}
        </div>

    <div className={s.messages}>
        {messageElements}
    </div>
</div>
}
export default Dialogs;