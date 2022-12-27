import React, {RefObject} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostObjTypeArr} from "../../../redux/state";



export const MyPosts =(props: PostObjTypeArr )=> {
    let postMap = props.postObj.map(el => <Post message={el.message} like={el.likes}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
    const addPost = () => {
        let text = newPostElement.current?.value
        if (text !== null) {
            alert(text)
        }
    }
    return (<div className={classes.content}>
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.mypost}>
                {postMap}
            </div>
        </div>
    </div>)
}