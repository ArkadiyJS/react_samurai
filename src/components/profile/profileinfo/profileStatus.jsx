import React from "react";




function ProfileStatus (props){
  return(<>
    <div>
      <span>{props.status}</span>

    </div>
    <div>
      <input value={props.status}></input>

    </div>
    </>
  )
}
export default ProfileStatus;