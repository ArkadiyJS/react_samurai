import React from "react";




class ProfileStatus extends React.Component{

  state={
    editMode:false
    
  }




  activateEditMode=()=>{
    this.setState({
      editMode:true,
      status: this.props.status
    })
  }
  deactivateEditMode=()=>{
    this.setState({
      editMode:false,
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange=(e)=>{
    this.state({
      status:e.currentTarget.value
    })

  }




  render(){

    return(<>

  {!this.state.editMode &&
    <div>
      <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>

    </div>
    }
    {this.state.editMode &&
    <div>
      <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>

    </div>
    }
    </>
  )
}}
export default ProfileStatus;