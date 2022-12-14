import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./posts/MyPosts";
import {ProfileInfo} from "./profile-info/ProfileInfo";

export const Profile =( )=> {
    return (<div className={classes.content}>
        <ProfileInfo/>
        <MyPosts/>
        Main content
    </div>)
}