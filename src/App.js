import React from "react";

import Card from "./components/Card";
import quote from "./components/quotes";
// eslint-disable-next-line
import quotes from "./components/quotes2";
import "./App.css";
import Navbar from "./components/Navbar";
import Avatar2 from "./components/Avatar2";
import VideoRoom from "./components/VideoRoom.js";
import VideoRoom2 from "./components/VideoRoom2.js";
import VideoRoom3 from "./components/VideoRoom3.js";
import VideoRoom4 from "./components/VideoRoom4.js";
import VideoRoom5 from "./components/VideoRoom5.js";
import VideoRoom6 from "./components/VideoRoom6.js";
// eslint-disable-next-line
import Card1 from "./components/Card1.js";

import 'bootstrap/dist/css/bootstrap.min.css';
// import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import ButtonWrap from './components/ButtonWrap.js';

function createCard(quote){
    return (
        <Card
        key ={quote.id}
        name= {quote.name}
        img={quote.imgURL}
        sp={quote.speech} 
        sp2={quote.speech2} 
        sp3={quote.speech3} 
        sp4={quote.speech4} 
        // onClick={}
        />
    );
}
function App() {
    console.log(quote);
  return(<React.Fragment>
    
   
      
      <h1 className="heading">Michael's <Avatar2 /> Matrix</h1>
      <p>Click unmute button & enjoy the music</p>

     
       <Navbar /> 
       <div className="cardbox">
      <VideoRoom />
      <VideoRoom2 />
      <VideoRoom3 />
    
      
      <div>
          {quote.map(createCard)}                  
      </div>
      
      <VideoRoom4 />
      <VideoRoom5 />
      <VideoRoom6 />
      
      </div>
           
       {/* <a className="pointerKitchen" href="https://www.michaelfan0310.ml/react-kitchen/">React-Kitchen</a> */}
     
      <ButtonWrap />
</React.Fragment>
  );
}

export default App;
