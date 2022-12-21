
import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AppPropsType} from "./redux/state";

type StateType = {
    appState: AppPropsType
}

export function App(props: StateType) {
  return (
    <div className="app-wrapper ">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Route path="/dialogs" render={()=><Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/> }/>
            <Route path="/profile" render={()=><Profile postObj={props.appState.postObj}/>}/>
        </div>
    </div>
  );
}
