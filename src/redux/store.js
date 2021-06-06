import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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

        sidebar: [
            {id: 1, name: 'Kolya'},
            {id: 2, name: 'Vasya'},
            {id: 3, name: 'Petya'}
        ]
    },
    _collSubscriber() {
        console.log('state chenged')
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._collSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._collSubscriber(this._state)
    }
}

window.store = store
export default store
