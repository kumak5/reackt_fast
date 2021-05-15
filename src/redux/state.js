let rerenderEntireTree = () =>{
    console.log('stat chenged')
}

let state = {
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
        newMessageText: 'NewMessage'
    },

    sidebare: [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'}
    ]
}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)


}

export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newMessage) =>{
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export const subscribe = (observer) =>{
    rerenderEntireTree=observer
}

export default state;