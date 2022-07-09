import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": '3a17e2ad-7a32-44d3-a695-70588fd52fad'

  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  getUsersProfile(userid) {
    return profileAPI.getProfile(userid)
  },

  followUp(userid) {
    return instance.post(`follow/${userid}`)


  },
  unFollow(userid) {
    return instance.delete(`follow/${userid}`)
  },
  
  
}
export const authAPI ={
  authLogin(){
    return instance.get('auth/me');
  },

}

export const profileAPI ={

  getProfile(userid){
    return instance.get(`profile/${userid}`)
    .then(response => response.data)
  },
  getStatus(userid){
    return instance.get(`profile/status/${userid}`)
  },
  updateStatus(status){
    return instance.put(`profile/status`,{status:status})
  }

}
