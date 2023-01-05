import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {ChangeNewPostText, state, subscribe} from './redux/state'

 const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} ChangeNewPostText={ChangeNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree()
subscribe(renderEntireTree)