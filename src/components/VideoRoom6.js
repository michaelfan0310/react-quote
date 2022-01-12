import React from "react";

import video from '../Video/forrest.mp4';

function VideoRoom6(){
    return(
        <div className="dictionary2">
        <div className="card2">
        

       <video controls autoPlay loop muted className="video3">
          <source src={video} type="video/mp4" >
          </source>
         <source src="movie.ogg" type="video/ogg">
        </source>
        </video>
      
        </div>
        </div>
    );
    
}
export default VideoRoom6;