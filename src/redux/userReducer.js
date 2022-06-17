const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS'

let initialState = {users:[]}





const userReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {

          if (u.id === action.userid) {

            return { ...u, followed: true };
          }

          return u;
        })

      }


    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {

          if (u.id === action.userid) {

            return { ...u, followed: false };
          }

          return u;
        })

      }
      case SET_USERS:{
        return {...state, users:[...state.users, ...action.users]}
      }






    default:
      return state;
  }
}


export const setUsersAC= (users) =>({type:SET_USERS, users});

export const followAC = (userid) => ({ type: FOLLOW, userid });

export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });



export default userReducer;