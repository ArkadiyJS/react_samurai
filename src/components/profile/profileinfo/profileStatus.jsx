import React, { useEffect, useState } from "react";




function ProfileStatus(props) {

const [editMode , setEditMode] = useState(false);
const [status , setStatus] = useState(props.status);

useEffect(()=>{
  setStatus(props.status)
},[props.status])




const activateEditMode=()=>{
  setEditMode(true)
  
}
const deactivateEditMode =(status)=>{
  setEditMode(false)
  props.updateStatus(status)
}
const onStatusChange=(e)=>{
  setStatus(e.target.value)
}


  return (<div>

    {!editMode &&
      <div>
        <span onDoubleClick={activateEditMode} >{props.status || 'status' }

        </span>

      </div>
    }
    {editMode &&
      <div>
        <input value={status} onChange={(e)=>onStatusChange(e)} autoFocus={true} onBlur={deactivateEditMode}
         ></input>
      </div>
    }

  </div>
  )
}
export default ProfileStatus;