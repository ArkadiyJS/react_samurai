import * as axios from "axios";


const instance =axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY":'3a17e2ad-7a32-44d3-a695-70588fd52fad'

  }
});


export const getUsers=(currentPage,pageSize)=>{
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}
export const getUsersProfile=()=>{
  return instance.get('profile/').then(response => response.data)
} 