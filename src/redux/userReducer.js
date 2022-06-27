const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';

let initialState = {
  users:[],
  pageSize: 5,
  totalUsersCount:0,
  currentPage:1,
  isFetching:true,
}





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
        return {...state, users:action.users}
      }
      case SET_CURRENT_PAGE:{
        return {...state, currentPage:action.currentPage}
      }
      case SET_TOTAL_COUNT:{
        return {...state, totalUsersCount:action.totalCount}

      }
      case TOGGLE_IS_FETCHING :{
        return {...state, isFetching: action.isFetching}
      }






    default:
      return state;
  }
}
export const setToggleIsFetchingAC=(isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})

export const setUsersAC= (users) =>({type:SET_USERS, users});

export const followAC = (userid) => ({ type: FOLLOW, userid });

export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });

export const setCurrentPageAC = (currentPage)=>({type: SET_CURRENT_PAGE,currentPage })
export const setTotalCountAC =(totalCount)=>({type:SET_TOTAL_COUNT, totalCount})

export default userReducer;