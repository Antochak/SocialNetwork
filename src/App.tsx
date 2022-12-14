
import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

export function App() {
  return (
    <div className="app-wrapper ">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Route path="/dialogs" render={()=><Dialogs />}/>
            <Route path="/profile" render={()=><Profile />}/>
        </div>
    </div>
  );
}
