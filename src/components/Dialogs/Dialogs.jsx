import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>Kolya</div>
            <div className={s.dialog}>Vasya</div>
            <div className={s.dialog}>Petya</div>
            <div className={s.dialog}>Nataliya</div>
            <div className={s.dialog}>Anastasiya</div>
        </div>
        <div className={s.messages}>
            <div className={s.dialog}>Hi</div>
            <div className={s.dialog}>HIHI</div>
            <div className={s.dialog}>WOW</div>
        </div>
    </div>
}
export default Dialogs;