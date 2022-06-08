const ADD_POST = 'ADD-POST';

let initialState = {

    usersPage: [
      { id: 1, name: 'Arkadiy', country: 'Russia',city:'tyumen' },
      { id: 2, name: 'sveta' , country: 'Russia',city:'tyumen'},
      { id: 3, name: 'matvey' , country: 'Russia',city:'tyumen'},
      { id: 4, name: 'sofa' , country: 'Russia',city:'tyumen'},
      { id: 5, name: 'kuzya' , country: 'Russia',city:'tyumen'},
    ],
    friendCheck: [
      { id: 1, flag:true, },
      { id: 2, flag:true, },
      { id: 3,  flag:true,},
      { id: 4, flag:false, },
      { id: 5, flag:false, },
    ],
    status:'status text',
}


const sidebarReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case ADD_POST:
       return {
           ...state,
           friendCheck: action.flag,
        };
        

    default:
        return state;
}
}
  



export const followUpCreator = () => ({ type: ADD_POST });
export default sidebarReducer;