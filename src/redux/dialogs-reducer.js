const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Nataliya'},
        {id: 5, name: 'Nikolya'},
        {id: 6, name: 'Anastasiya'}
    ],
    messages: [
        {id: 1, message: 'Hi1'},
        {id: 2, message: 'Hi2'},
        {id: 3, message: 'Hi3'},
        {id: 4, message: 'Hi4'},
        {id: 5, message: 'Hi5'},
        {id: 6, message: 'Hi6'}
    ],
    newMessageText: 'NewMessage!!'
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ""
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}

export default dialogsReducer