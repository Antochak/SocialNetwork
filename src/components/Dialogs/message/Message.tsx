import classes from "../Dialogs.module.css";
import React from "react";
import {MessageTypeArr} from "../../../redux/state";



export const Message = (props: MessageTypeArr) => {
    let messageMap = props.messages.map(el=> <div>{el.message}</div>)
    return  (<div>
            <div className={classes.message}> My messages</div>
            <div>{messageMap}</div>
    </div>
    )
}