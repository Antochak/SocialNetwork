import React, {RefObject} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {MessgesAndDialogsType} from "../../redux/state";




export const Dialogs = (props: MessgesAndDialogsType) => {

    let dialogsMap = props.dialogs.map(el=> <DialogItem name={el.name} id={el.id}/>)
    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()
    const addNewMessage = () => {
        let textMessage = newMessageElement.current?.value;
        alert(textMessage)
    }
    return (
        <>
            <div className={classes.dialogsMain}>
                <div className={classes.dialogs}>
                    {dialogsMap}
                </div>
                <div className={classes.messages}>
                    <Message messages={props.messages}/>
                </div>
                <textarea ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addNewMessage}>Add Message</button>
                </div>

            </div>
        </>
    )
}
