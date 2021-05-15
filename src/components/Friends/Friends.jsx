import React from 'react'
import s from './Friends.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Friends = (props) => {

    let dialogsElemenst = props.fiends.map(d=><Friends name={d.name} id={d.id}/>)

      return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElemenst}
        </div>
</div>
}
export default Friends;