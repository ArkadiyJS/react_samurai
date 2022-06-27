const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE ='SET_USER_PROFILE';

let initialState ={
     
    posts: [
      { id: 1, message: 'hi gayz', likesCount: 12 },
      { id: 2, message: 'hi gayz mayz', likesCount: 13 },
      { id: 3, message: 'hi dudu', likesCount: 14 },
      { id: 4, message: 'hi gara dada', likesCount: 15 },
    ],
    newPostText: 'samurai',
    profile: null,
  }


const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts,newPost],
                newPostText:'',
            };
            
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
           return {
               ...state,
               newPostText: action.newText,
            };
        case SET_USER_PROFILE:{
            return {
                ...state, profile: action.profile
            }
        }
            

        default:
            return state;
    }
}

export const setUserProfileAC = (profile) => ({type:SET_USER_PROFILE , action:profile })

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;