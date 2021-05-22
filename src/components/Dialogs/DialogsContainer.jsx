import React from 'react'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onMessageChange = (body) => {
                        store.dispatch(updateNewMessageTextCreator(body))
                    }
                    return <Dialogs updateNewMessageBody={onMessageChange}
                                    sendMessage={onSendMessageClick}
                                    dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;