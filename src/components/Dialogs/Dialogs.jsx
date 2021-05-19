import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPost/Post/Post";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElemenst = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map(m => <Message message={m.message}/>)

    let newMessageText = props.newMessageText

    let onMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageTextCreator(body))
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
                    <button onClick={onMessageClick}>
                        Add post
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default Dialogs;