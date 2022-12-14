import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./post/Post";

export const MyPosts =( )=> {
    return (<div className={classes.content}>
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.mypost}>
                <Post message={'Недовольный'} like={20}/>
                <Post message={'Злой'} like={15}/>
            </div>


        </div>
    </div>)
}