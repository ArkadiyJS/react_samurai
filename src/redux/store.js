
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi gayz', likesCount: 12 },
        { id: 2, message: 'hi gayz mayz', likesCount: 15 },
        { id: 2, message: 'hi dudu', likesCount: 15 },
        { id: 2, message: 'hi gara dada', likesCount: 15 },
      ],
      newPostText: ''
    },
 
    dialogsPage: {
      dialogData: [
        { id: 1, name: 'ark' },
        { id: 2, name: 'sveta' },
        { id: 3, name: 'matvey' },
        { id: 4, name: 'sofa' },
        { id: 5, name: 'kuzya' },
      ],
      messagesData: [
        { id: 1, message: 'ark message' },
        { id: 2, message: 'sveta message' },
        { id: 3, message: 'matvey message' },
        { id: 4, message: 'sofa message' },
        { id: 5, message: 'kuzya message' },
      ],
      newMessageBody: ''
    },
    sidebar:'',
  },
  _callSubscriber() {
    console.log('change state')

  },

  getState() {

    return this._state;
  },


  subscribe(observer) {

    this._callSubscriber = observer;

  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
     this._state.sidebar= sidebarReducer(this._state.sidebar, action);
     this._subscriber(this._state);
    }
}






 
window.store = store;

export default store;