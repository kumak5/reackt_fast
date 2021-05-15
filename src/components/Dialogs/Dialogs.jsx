import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPost/Post/Post";


const Dialogs = (props) => {

    let dialogsElemenst = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()

    let addMassage = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElemenst}
        </div>

        <div className={s.messages}>
            {messageElements}
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMassage}>
                        Add post
                    </button>
                </div>
            </div>
        </div>
    </div>
}
export default Dialogs;