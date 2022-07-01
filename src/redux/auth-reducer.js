const SET_USER_DATA = 'SET_USER_DATA'




let initialState ={
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state =initialState,action )=>{
  switch(action.type){
    case SET_USER_DATA:
      return{
        ...state,
        ...action.data,
        isAuth:true,
        login:action.login,
      }






    default:
      return state;
  }

}

export const setAuthUserDataAC = (id, login, email) =>({type: SET_USER_DATA, data:id, login, email})



export default authReducer;