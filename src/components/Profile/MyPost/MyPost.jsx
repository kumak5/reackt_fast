import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";


const MyPost = (props) => {

    let newPostElement = React.createRef()

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return <div className={s.postBlock}>

        <h3>My post</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}

        </div>

    </div>
}

export default MyPost;