
import React, {useState} from "react";

import video1 from '../Video/1900.mp4';
import video2 from '../Video/19002.mp4';
import video3 from '../Video/19003.mp4';

function VideoRoom2(){   

    const [video, setVideo]=useState(video1); 
    
   function switchVideo(){ 
       
     setVideo(video2); 

    }; 
       function switchVideoAgain(){
 
       
     setVideo(video3); 

    };
     function switchVideoBack(){
  
       
     setVideo(video1); 

    }; 
    //   const videoRef = React.useRef(); 
    return(
        <div className="dictionary2">
        <div className="card2">        

       <video controls autoPlay loop muted className="video1900" 
           src={video} type="video/mp4"  />          
         <source src="movie.ogg" type="video/ogg">
        </source>
       
        <button 
        onClick={switchVideo}
         
        id="vbutton" >Switch</button>
       
        <button 
        onClick={switchVideoAgain}
         
        id="vbutton2" >2</button>
        <button 
        onClick={switchVideoBack}
         
        id="vbutton3" >3</button>
        </div>
        </div>
       
    );
    
}
export default VideoRoom2;