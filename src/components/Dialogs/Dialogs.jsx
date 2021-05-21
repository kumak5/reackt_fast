import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
debugger
    let state=props.dialogsPage

    let dialogsElemenst = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = state.messages.map(m => <Message message={m.message}/>)

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElemenst}
        </div>

        <div className={s.messages}>
            <div>{messageElements}</div>
            <div>
                <div>
                    <textarea placeholder='Enter you`r message'
                              onChange={onMessageChange}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>
                        Add post
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default Dialogs;