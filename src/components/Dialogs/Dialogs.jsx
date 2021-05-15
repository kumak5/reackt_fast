import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import Post from "../Profile/MyPost/Post/Post";


const Dialogs = (props) => {

    let dialogsElemenst = props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map( m =><Message message={m.message}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElemenst}
        </div>

        <div className={s.messages}>
            {messageElements}
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
</div>
}
export default Dialogs;