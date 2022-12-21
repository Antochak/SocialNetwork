import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessgesAndDialogsType} from "../../redux/state";




export const Dialogs = (props: MessgesAndDialogsType) => {

    let dialogsMap = props.dialogs.map(el=> <DialogItem name={el.name} id={el.id}/>)

    return (
        <>
            <div className={classes.dialogsMain}>
                <div className={classes.dialogs}>
                    {dialogsMap}
                </div>
                <div className={classes.messages}>
                    <Message messages={props.messages}/>
                </div>
            </div>
        </>
    )
}
