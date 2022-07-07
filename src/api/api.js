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
  getUsersProfile() {
    return instance.get('profile/').then(response => response.data)
  },

  followUp(userid) {
    return instance.post(`follow/${userid}`)


  },
  unFollow(userid) {
    return instance.delete(`follow/${userid}`)
  },
  authLogin(){
    return instance.get('auth/me');
  }
  
}
