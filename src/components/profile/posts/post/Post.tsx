import React from 'react';
import classes from './Post.module.css';

export type Posttype = {
    message: string
    like: number
}
export const Post =(props: Posttype)=> {

    return (<>
            <div className={classes.item}>

                <img src="https://cdnn1.lt.sputniknews.com/img/233/62/2336296_0:2:2832:1595_1920x0_80_0_0_4ec54ab3d50b8296d859add9da8fd64a.jpg" />
            </div>
        <div>
        <span>{props.message}</span>
        <span>{props.like}</span>
        </div>

    </>)
}