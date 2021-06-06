import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElemenst = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.messages.map(
        m => <Message message={m.message} key={m.id}/>
        )

    // let newMessageText = state.newMessageText

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElemenst}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea
                        value={state.newMessageText}
                        onChange={onMessageChange}
                        placeholder='Enter you`r message'
                    />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Add post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;