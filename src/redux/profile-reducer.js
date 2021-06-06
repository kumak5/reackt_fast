const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 0},
        {id: 1, message: 'It\'s my first post!', likesCount: 25},
        {id: 2, message: 'H22!', likesCount: 25},
        {id: 3, message: 'Hi33', likesCount: 25}
    ],
    newPostText: '!!!test!!!'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            // debugger
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {return {type: UPDATE_NEW_POST_TEXT, newText: text}}


export default profileReducer