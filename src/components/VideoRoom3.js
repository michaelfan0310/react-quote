import React, {useState} from "react";

import video3 from '../Video/OutAf.mp4';
import video4 from '../Video/AngryRiver3.mp4';
import video5 from '../Video/AngryRiver.mp4';
import video6 from '../Video/CityIntheSky.mp4';

function VideoRoom3(){
    const[clip,setClip]=useState(video3);
    const[toggle,setToggle]=useState(false);
    function SwitchClip(){   
       setToggle(!toggle);
       if(!toggle){
         setClip(video3);
    }else{
        setClip(video4);
    }};
    function SwitchClip2(){
           setToggle(!toggle);
       if(!toggle){
         setClip(video5);
    }else{
        setClip(video6);
    }}; 
    
    
    return(
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted className="video3" src={clip} type="video/mp4" />
         
         <source src="movie.ogg" type="video/ogg">
        </source>
         <button className="button2" onClick={SwitchClip}>Switch</button>

       <button className="button2" onClick={SwitchClip2}>S2</button>
       
        </div>
        </div>
    );
    
}
export default VideoRoom3;