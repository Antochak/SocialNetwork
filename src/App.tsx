
import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addPost, TypeState} from "./redux/state";

type StateType = {
    appState:TypeState
    ChangeNewPostText:(newText: string)=>void
}

export function App(props: StateType) {
  return (
    <div className="app-wrapper ">
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Route path="/dialogs"
                   render={()=>
                       <Dialogs dialogs={props.appState.dialogPage.dialogs}
                            messages={props.appState.dialogPage.messages}
                            addPost={addPost}/> }/>
            <Route path="/profile"
                   render={()=>
                       <Profile postObj={props.appState.profilePage.postObj}
                            addPost = {addPost}
                            newPostText={props.appState.profilePage.newPostText}
                            ChangeNewPostText={props.ChangeNewPostText}
                   />
                   }
            />
        </div>
    </div>
  );
}
// function HelloMessage (props: MessageType) {
//     const NewPostRef = React.createRef<HTMLTextAreaElement>()
//     const addPost = () => {
//         alert(NewPostRef.current?.value )
//     }
//
//     return (
//         <div>
//             {props.message}
//             <button onClick={addPost}>Add Post</button>
//             <textarea ref={NewPostRef}></textarea>
//         </div>
//     )
// }
