import * as axios from "axios";
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../redux/profileReducer';
import ProfileCore from './profile';
import s from './profile.module.css';
// import {useHref} from 'react-router-dom'




class ProfileContainer extends React.Component{
    
    componentDidMount(){
    //   let userId = this.props.match.params.userId;
    //   if ( !userId ) {
    //     userId = 2
    //}
    
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/')
        .then(response=> {
            
            this.setUserProfile(response.data);
            
            
            

        });
        
    }




    render(){
        return (
        <div className={s.profile}>
            
            <div>
                <ProfileCore {...this.props} profile={this.props.profile}/>
                
            </div>
            
        </div>

        )
    }
}

const mapStateToProps= (state)=>{
    
    return{
    profile: state.profilePage.profile
}

}
const mapDispatchToProps=(dispatch)=>{
    
    return{
    setUserProfile:(profile)=>{
        dispatch(setUserProfileAC(profile))
    }
    }
    
}
// let WithUrlDataContainerComponent=useHref(ProfileContainer)

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer);











