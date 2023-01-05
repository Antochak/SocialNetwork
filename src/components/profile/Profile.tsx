import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./posts/MyPosts";
import {ProfileInfo} from "./profile-info/ProfileInfo";
import {PostObjType} from "../../redux/state";

type ProfilePropsType = {
    postObj: PostObjType[]
    addPost: ()=>void
    ChangeNewPostText: (newText: string)=>void
    newPostText: string
}
export const Profile = (props: ProfilePropsType)=> {

    return (<div className={classes.content}>
        <ProfileInfo/>
        <MyPosts postObj={props.postObj}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 ChangeNewPostText={props.ChangeNewPostText}/>
        Main content
    </div>)
}