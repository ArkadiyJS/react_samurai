import React from 'react';
import {  authUsersThunkCreator } from '../../redux/auth-reducer';
import Header from './header';
import { connect } from "react-redux";



class HeaderContainer extends React.Component {
   componentDidMount(){
      this.props.authUsersThunkCreator()
     
   }
   render(){
    return<Header {...this.props}/>
   }
}
const mapStateToProps=(state)=>({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   
});


   

export default connect(mapStateToProps,{authUsersThunkCreator})(HeaderContainer);