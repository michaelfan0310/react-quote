import React, {useState} from "react";
import Card2 from "./Card2.js";
import quotes from "./quotes2.js";


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

    const[shift, setShift]=useState(false);
   
    function SwitchCard(){   
        setShift(!shift);
     };
    return(<div>{ !shift && 
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted className="video1"
          src={clip} type="video/mp4" />
        
         <source src="movie.ogg" type="video/ogg">
        </source>      
       <button className="buttonSec" onClick={SwitchClip}>Svideo</button>

       <button className="buttonSec" onClick={SwitchCard}>Qcard</button>
       
        </div>
        </div>} 
        <div>
           { shift && 
             <Card2 
             name={quotes[3].name} 
             img={quotes[3].imgURL}
             quote={quotes[3].quote} />}
        </div>
        </div>);
       
    
}
export default VideoRoom;