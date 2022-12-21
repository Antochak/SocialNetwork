import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./posts/MyPosts";
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostObjTypeArr} from "../../redux/state";


export const Profile = (props: PostObjTypeArr)=> {

    return (<div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postObj={props.postObj}/>
        Main content
    </div>)
}