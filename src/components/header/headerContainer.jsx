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
            let {id, login, email} = response.data.data
           this.props.setAuthUserData(id, login, email)}
      })
   }
   render(){
    return<Header {...this.props}/>
   }
}
const mapStateToProps=()=>({
   
});
const mapDispatchToProps=()=>{
   return{
      // setAuthUserData:(id, login, email)=>{
      //    dispatch(setAuthUserDataAC(id, login, email)
      // }
   }

   
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);