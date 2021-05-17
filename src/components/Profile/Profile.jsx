import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPost/Post/Post";
import MyPost from "./MyPost/MyPost";



const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPost posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
               />
    </div>
}

export default Profile;