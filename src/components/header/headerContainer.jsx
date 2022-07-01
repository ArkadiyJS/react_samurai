import axios from 'axios';
import React from 'react';
import { setAuthUserDataAC } from '../../redux/auth-reducer';
import Header from './header';
import { connect } from "react-redux";


class HeaderContainer extends React.Component {
   componentDidMount(){
      axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
         withCredentials: true
      })
      .then(response=>{
         
         if(response.data.resultCode===0){
            let {email, id, login, } = response.data.data
           this.props.setAuthUserData(email, id, login, )}
      })
   }
   render(){
    return<Header {...this.props}/>
   }
}
const mapStateToProps=(state)=>({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   
});


   const mapDispatchToProps = (dispatch) => {
      
      return{
         setAuthUserData:(email, id, login, )=>{
            dispatch(setAuthUserDataAC(email, id, login, ))
         }

   }}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);