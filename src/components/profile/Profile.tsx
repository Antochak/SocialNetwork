import React from 'react';
import classes from './Profile.module.css';
import {MyPosts} from "./posts/MyPosts";

export const Profile =( )=> {
    return (<div className={classes.content}>
        <img src="https://bobak.ru/wp-content/uploads/2013/05/group_of_marmots_by_Ronald_Wittek.jpg" height='40%' alt=""/>
        <div>Ava + description
            <img width="200px" src="https://s.ura.news/1200_675/images/news/upload/news/338/287/1052338287/353087_Deny_meteorita_v_Gosudarstvennom_istoricheskom_muzee_Yuzhnogo_Urala_Chelyabinsk_muzey_bober_bobr_chuchelo_bobra_250x0_3438.2188.225.139.jpg"/>
        </div>
        <div>
        <MyPosts/>
        </div>

        Main content
    </div>)
}