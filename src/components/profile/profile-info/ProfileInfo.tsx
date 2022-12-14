
import React from "react";
import classes from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (<div>
            <div className={classes.profileBackgroundImage}>
                <img src="https://pibig.info/uploads/posts/2021-05/1620767538_5-pibig_info-p-les-panorama-priroda-krasivo-foto-6.jpg" alt=""/>
            </div>
                <div className={classes.descriptionBlock}>
                    Ava + description
                </div>
    </div>

    )
}