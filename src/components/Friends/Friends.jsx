import React from 'react'
import s from './Friends.module.css'


const Friends = (props) => {

    let dialogsElemenst = props.fiends.map(d=><Friends name={d.name} id={d.id}/>)

      return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElemenst}
        </div>
</div>
}
export default Friends;