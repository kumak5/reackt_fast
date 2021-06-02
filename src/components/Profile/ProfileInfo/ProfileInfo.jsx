import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div className={s.profileImg}>
            <img src='baikanur.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>
}

export default ProfileInfo;