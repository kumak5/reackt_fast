import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
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
            <Post message='Hi, how are you?' likesCount='0'/>
            <Post message='It`s my first post' likesCount='25'/>

        </div>

    </div>
}

export default MyPost;