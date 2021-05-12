import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPost/Post/Post";
import MyPost from "./MyPost/MyPost";



const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPost posts={props.posts}/>
    </div>
}

export default Profile;