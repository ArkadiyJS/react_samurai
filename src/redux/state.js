import {rerenderEntireTree} from '../render';

let state = {
  profilePage: {
    posts: [
    {id:1, message: 'hi gayz', likesCount:12 },
    {id:2, message: 'hi gayz mayz', likesCount:15 },
    {id:2, message: 'hi dudu', likesCount:15 },
    {id:2, message: 'hi gara dada', likesCount:15 },
    ],
    newPostText:''
  },

  dialogsPage: {
    dialogData: [
    { id: 1, name:'ark'},
    { id: 2, name:'sveta'},
    { id: 3, name:'matvey'},
    { id: 4, name:'sofa'},
    { id: 5, name:'kuzya'},
   ],
    messagesData: [
    { id: 1, message:'ark message'},
    { id: 2, message:'sveta message'},
    { id: 3, message:'matvey message'},
    { id: 4, message:'sofa message'},
    { id: 5, message:'kuzya message'},
    ],
  }
}
export let addPost = ()=>{
  let newPost ={
    id: 5,
    message:state.profilePage.newPostText ,
    likesCount: 0,
  };
  
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText='';
  rerenderEntireTree(state);
}

  export let addMessage = (newDataMessage)=>{
    let newMessage = {
      id: 6,
      message:newDataMessage
    }
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree(state);

  }
  export let updateNewPostText = (newText)=>{
    state.profilePage.newPostText=newText;
    
    rerenderEntireTree(state);

  }



export default state;