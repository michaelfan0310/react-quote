import React, {useState} from "react";
import Card1 from "./Card1.js";
import quotes from "./quotes2.js";

import video from '../Video/OnceInWest.mp4';


function VideoRoom9(){
     const[shift, setShift]=useState(false);
    function ShiftCard(){
        setShift(!shift);
    };
    return(<div>{ !shift && 
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted 
       className="vidOnceWest" 
         src={video} type="video/mp4" />
         
         <source src="movie.ogg" type="video/ogg">
        </source>
       <button className="button4"
        onClick={ShiftCard}
         
        >Switch</button> 
       
       
        </div>
        </div>}
        <div>
        { shift && 
        <Card1 
             name={quotes[0].name} 
             img={quotes[0].imgURL}
             quote={quotes[0].quote} />}
        </div>
        </div>
    );
    
}
export default VideoRoom9;