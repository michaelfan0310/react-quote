// eslint-disable-next-line
// import { exp } from "prelude-ls";
import React, {useState} from "react";
import Avatar from "./Avatar";
// import quotes from "./quotes2.js";
import './Card.css';

import VideoRoom9 from "./VideoRoom9";
import $ from 'jquery';

function Card1(props){
    const quoteOriginal="Be thankful for everything that happens in your life; it's all an experience."
    // eslint-disable-next-line
    const quoteAdd=props.quote3;
    const [toggle, setToggle]=useState(false);
    const [quote, setQuote]=useState(quoteOriginal);
    const [iscard, setCard]=useState(false);
  

    function switchQuote(){
        const quoteNew="Respect other people's feelings. It might mean nothing to you, but it could mean everything to them."
        setToggle(!toggle);
    if (!toggle){
        setQuote(quoteNew);  
        $('.info').css('color','black');}
    else 
        {setQuote(quoteOriginal); 
        $('.info').css('color','#116530bla');
    }
      
    }
    
    function switchCard(){
        
    //   const quoteAdd2=props.quote4;
        setCard(!iscard);

        // if(!toggle){        
        // setQuote(quoteAdd);
        //   $('.info').css('color','#1e81b0');          
    
    }          
    

return (

    <div>
    {!iscard &&   <dl className="dictionary">
        <div className="cardback">
            <div className="top">
            <dt>
                <h2 className="name">{props.name}</h2>
                </dt>
                <Avatar img={props.img} />

               <button className="sbutton3"           
                onClick={switchCard}       
                >Switch
                </button>   
                <button className="sbutton3"           
                onClick={switchQuote}       
                >S2
                </button>       
             </div>
            <div className="bottom" >
              <dd className="info">
              {/* <div className="info" > */}
            
        {quote}         
             
                      
            {/* </div> */}
              {/* <Detail 
              style={{color:"blue"}}
                detailInfo={quote}                
               /> */}
               </dd>           
            </div>
        </div>
        
        </dl>
        
        }
        
        { iscard && <VideoRoom9 />}
    </div>
     
);
}

export default Card1;