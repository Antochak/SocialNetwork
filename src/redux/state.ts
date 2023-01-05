let rerenderEntireTree = () => {
    console.log('state changed')

}

export type PostObjType = {
    id: number
    message: string
    likes: number
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}
export type ProfilePageType = {
    postObj:  PostObjType[]
    newPostText: string
   // addPost: (message: string)=>void
   // ChangeNewPostText: (newText: string)=>void
}
export type DialogPageType ={
    dialogs: DialogType[]
    messages: MessageType[]
}
export type SideBarType = {

}
export type MessageTypeArr = {
    messages: MessageType[]
}
export type TypeState = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBarPage: SideBarType
}
export type MessgesAndDialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
    addPost: (message: string)=>void
}

export let state: TypeState = {
    profilePage: {
        postObj: [
            {id: 1, message: 'how are you', likes: 121},
            {id: 1, message: 'its my first post', likes: 12541},
            {id: 2, message: 'yoyoyooy', likes: 34},
            {id: 3, message: 'it-incubator', likes: 62},
            {id: 4, message: 'it-kamasutra', likes: 1},
            {id: 5, message: 'kolya kakaet every day', likes: 46}
        ],
        newPostText: 'some text'
    },
    dialogPage: {
        dialogs: [{id: 1, name: 'Antocha'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Kolya'},
            {id: 5, name: 'Lexa'},
            {id: 6, name: 'Vasya'}],
        messages: [{id: 1, message: 'hi'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'yq'},
            {id: 4, message: 'memes'},
            {id: 5, message: 'i love memes'},
            {id: 6, message: 'stop kaking'}],
    },
    sideBarPage: {}
}

export let addPost = () => {
    let newPost: PostObjType = {id: 5, message: state.profilePage.newPostText, likes: 0}
    state.profilePage.postObj.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const ChangeNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}