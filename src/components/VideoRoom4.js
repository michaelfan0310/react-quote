import React, {useState} from "react";

import clip1 from '../Video/Michael.mp4';
import clip2 from '../Video/Schind.mp4';


function VideoRoom4(){
    const [clip, setClip]=useState(clip1);
    const [tog,setTog]=useState(false);

       function SwitchClip(){
           setTog(!tog);
           if(!tog){
           setClip(clip2);
        }else{
               setClip(clip1);
           }
       }
    return(
        <div className="dictionary2">
        <div className="card2">

        

       <video controls autoPlay loop muted className="video1" 
          src={clip} type="video/mp4" />
        
         <source src="movie.ogg" type="video/ogg">
        </source>

        <button className="buttonSec" onClick={SwitchClip}>Switch</button>      
       
        </div>
        </div>
    );
    
}
export default VideoRoom4;