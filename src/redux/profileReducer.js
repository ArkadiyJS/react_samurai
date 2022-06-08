const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
     
    posts: [
      { id: 1, message: 'hi gayz', likesCount: 12 },
      { id: 2, message: 'hi gayz mayz', likesCount: 13 },
      { id: 3, message: 'hi dudu', likesCount: 14 },
      { id: 4, message: 'hi gara dada', likesCount: 15 },
    ],
    newPostText: 'samurai'
  ,}


const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy= {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;

        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;