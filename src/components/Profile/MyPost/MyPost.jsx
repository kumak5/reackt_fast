import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPost = (props) => {

    let newPostElement = React.createRef()

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return <div className={s.postBlock}>

        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>
                    Add post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}

        </div>

    </div>
}

export default MyPost;