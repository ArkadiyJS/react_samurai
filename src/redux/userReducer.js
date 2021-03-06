import { usersAPI } from '../api/api.js'



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
export const toggleIsFetching=(isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})

export const setUsers= (users) =>({type:SET_USERS, users});

export const followUpSuccess = (userid) => ({ type: FOLLOW, userid });

export const unFollowSuccess = (userid) => ({ type: UNFOLLOW, userid });

export const setCurrentPage = (currentPage)=>({type: SET_CURRENT_PAGE,currentPage })
export const setTotalCount =(totalCount)=>({type:SET_TOTAL_COUNT, totalCount})

export const getUsersThunkCreator=(currentPage,pageSize,p)=>{
  return (dispatch)=>{
    dispatch(toggleIsFetching(true))
    
    usersAPI.getUsers(currentPage,pageSize)
      .then(data => {

        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
      })
  }
}

export const followThunkCreator=(userId)=>{
  return (dispatch)=>{
    dispatch(toggleIsFetching(true, userId))
  
    usersAPI.followUp(userId).then(response=>{

      if (response.data.resultCode===0){
          dispatch(followUpSuccess(userId))

      }
      dispatch(toggleIsFetching(false, userId))
  })
}

}


export const unFollowThunkCreator=(userId)=>{
    return(dispatch)=>{
      dispatch(toggleIsFetching(true, userId))
      
    usersAPI.unFollow(userId).then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unFollowSuccess(userId))
            dispatch(toggleIsFetching(false, userId))
          }
    })
  }
}











export default userReducer;