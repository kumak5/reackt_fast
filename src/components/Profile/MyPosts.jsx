import React from 'react';
import s from './MyPosts.module.css';
import Post from "./MyPost/Post/Post";

const MyPosts = () => {
    return <div className={s.content}>
                <div>
            <img src='baikanur.jpg' />
        </div>
        My post
        <div className={s.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
}

export default MyPosts;