const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState={
     
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
  };


const dialogsReducer = (state=initialState, action) => {

  let stateCopy = {
    ...state,
  // messagesData: [...state.messagesData]
};
  

    switch (action.type) {
      

        case UPDATE_NEW_MESSAGE_BODY:

            
            stateCopy.newMessageBody = action.body;
            
            return stateCopy;
            
        case SEND_MESSAGE:
          
            
            let body = stateCopy.newMessageBody;
            stateCopy.messagesData.push({ id: 6, message: body });
            stateCopy.newMessageBody = '';
            
            return stateCopy;
        default:
            return state;
    }


}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });


export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });
export default dialogsReducer;