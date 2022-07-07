
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


import { profileThunkCreator } from '../../redux/profileReducer';

import ProfileCore from './profile';
import s from './profile.module.css';
// import {useHref} from 'react-router-dom'




class ProfileContainer extends React.Component{
    
    componentDidMount(){
    //   let userId = this.props.match.params.userId;
    //   if ( !userId ) {
    //     userId = 2
    //}
    
    this.props.profileThunkCreator();
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
    profile: state.profilePage.profile,
    
}

}
// compose(withAuthRedirect)(ProfileContainer)
// let WithUrlDataContainerComponent=useHref(ProfileContainer)

export default connect(mapStateToProps,{profileThunkCreator})(ProfileContainer);











