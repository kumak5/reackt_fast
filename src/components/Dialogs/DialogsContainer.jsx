import React from 'react'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        onMessageChange: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


    /*return (
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
}*/
export default DialogsContainer;