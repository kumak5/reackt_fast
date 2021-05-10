import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {

    let posts = [
        {id: 0, message:'Hi, how are you?', likesCount: 0},
        {id: 1, message:'It\'s my first post', likesCount: 25}
    ]

    let postsElements = posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)

    return <div className={s.postBlock}>

        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}

        </div>

    </div>
}

export default MyPost;