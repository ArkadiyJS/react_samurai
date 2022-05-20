import {rerenderEntireTree} from '../render';

let state = {
  profilePage: {
    posts: [
    {id:1, message: 'hi gayz', likesCount:12 },
    {id:2, message: 'hi gayz mayz', likesCount:15 },
    {id:2, message: 'hi dudu', likesCount:15 },
    {id:2, message: 'hi gara dada', likesCount:15 },
    ],
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
export let addPost = (postMessage)=>{
  let newPost ={
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);


}
export default state;