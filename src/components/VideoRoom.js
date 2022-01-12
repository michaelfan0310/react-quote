import React, {useState} from "react";



import video from '../Video/Teheran.mp4';
import video1 from '../Video/OnceAmerica.mp4';

function VideoRoom(){
    const[clip,setClip]=useState(video);
    const[toggle,setToggle]=useState(false);
    function SwitchClip(){
   
       setToggle(!toggle);
       if(!toggle){
         setClip(video1);
    }else{
        setClip(video);
    }
    };
    return(
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted 
          src={clip} type="video/mp4" />
        
         <source src="movie.ogg" type="video/ogg">
        </source>      
       <button className="button2" onClick={SwitchClip}>Switch</button>
       
        </div>
        </div>);
       
    
}
export default VideoRoom;