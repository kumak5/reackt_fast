import React from 'react'
import s from './../Dialogs.module.css'


const Message = (props) => {
    return <div className={s.dialog}>

        {/*<img src='ava3.jpg'/>*/}
        <span  className={s.circle} />{props.message}

    </div>


}

export default Message;
