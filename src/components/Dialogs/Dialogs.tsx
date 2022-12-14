import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type dialogType = {
    name: string
    id: number
}
type messageType = {
    message: string
}

const DialogItem = (props: dialogType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active} >
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: messageType) => {
    return  (
        <div className={classes.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <>
            <div className={classes.dialogsMain}>
                <div className={classes.dialogs}>
                    <DialogItem name={'Antocha'} id={1} />

                </div>
                <div className={classes.messages}>
                    <Message message={'hello world'}/>
                       
                </div>
            </div>
        </>
    )
}
