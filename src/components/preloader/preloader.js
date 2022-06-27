import React from "react"
import preloader from '../../assets/preloader.gif'
function Preloader(props){
    return(
        <div>
            <img src={preloader} alt='preloader'/>
        </div>
    )
}
export default Preloader;