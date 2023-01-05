import React, {ChangeEvent, RefObject} from 'react';
import classes from './MyPosts.module.css';
import {Post} from "./post/Post";
import {PostObjType} from "../../../redux/state";

type MyPostsPropsType = {
    postObj: PostObjType[]
    addPost: (text: string)=>void
    newPostText: string
    ChangeNewPostText: (newText: string)=>void
}

export const MyPosts =(props: MyPostsPropsType)=> {
    let postMap = props.postObj.map(el => <Post message={el.message} like={el.likes}/>)

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
    const addPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.addPost(text)
            props.ChangeNewPostText('')
        }
    }
    const onChangePostInput = () => {
        let text = newPostElement.current?.value
        if (text){
            props.ChangeNewPostText(text)
        }
    }

    return (<div className={classes.content}>
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onChangePostInput}/>
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