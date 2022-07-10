
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

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
  
};


const dialogsReducer = (state = initialState, action) => {

  



  switch (action.type) {


   

    case SEND_MESSAGE:
      let body = action.post;

      return {
        ...state,
        
        messagesData: [...state.messagesData, {id:6, message:body}],
        
      }
    default:
      return state;
  }


}
export const sendMessageCreator = (post) => ({ type: SEND_MESSAGE, action: post, });



export default dialogsReducer;