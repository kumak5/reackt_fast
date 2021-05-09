import React from 'react';
import s from './MyPosts.module.css';
import Post from "./MyPost/Post/Post";

const MyPosts = () => {
    return <div >
        <div>
            <img src='baikanur.jpg'/>
        </div>
        My post
        <div className={s.posts}>
            <Post message='Hi, how are you?' likesCount='0'/>
            <Post message='It`s my first post' likesCount='25'/>

        </div>

    </div>
}

export default MyPosts;