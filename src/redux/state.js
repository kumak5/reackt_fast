const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likesCount: 0},
                {id: 1, message: 'It\'s my first post!', likesCount: 25},
                {id: 2, message: 'H2!', likesCount: 25},
                {id: 3, message: 'Hi3', likesCount: 25}
            ],
            newPostText: '!!!test!!!'
        },

        dialogsPage: {
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
        },

        sidebare: [
            {id: 1, name: 'Kolya'},
            {id: 2, name: 'Vasya'},
            {id: 3, name: 'Petya'}
        ]
    },
    _collSubscriber() {
        console.log('stat chenged')
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._collSubscriber = observer
    },
    addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._collSubscriber(this._state)
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage
        this._collSubscriber(this._state)
    },

    dispatch(action) {//{tepe:'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._collSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._collSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body
            this._collSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ""
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._collSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}


export default store
window.store = store