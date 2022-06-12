const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS'

let initialState = {

  usersPage: [
    { id: 1, followed: false, fullName: 'Arkadiy', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
    { id: 2, followed: false, fullName: 'sveta', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
    { id: 3, followed: true, fullName: 'matvey', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
    { id: 4, followed: true, fullName: 'sofa', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
    { id: 5, followed: false, fullName: 'kuzya', status: 'i am boss', location: { country: 'Russia', city: 'tyumen' } },
  ],


}


const sidebarReducer = (state = initialState, action) => {
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
        return {...state, users:[...state.usersm ...action.users]}
      }






    default:
      return state;
  }
}


export const setUsersAC= (users) =>({type:SET_USERS, users})

export const followAC = (userid) => ({ type: FOLLOW, userid });
export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });
export default sidebarReducer;