let state = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi, how are you?', likesCount: 0},
            {id: 1, message: 'It\'s my first post!', likesCount: 25},
            {id: 2, message: 'H2!', likesCount: 25},
            {id: 3, message: 'Hi3', likesCount: 25}
        ],
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
        ]
    },

    sidebare: [
        {id: 1, name: 'Kolya'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'}
    ]
}


export default state;