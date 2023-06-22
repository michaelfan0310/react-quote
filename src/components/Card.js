// eslint-disable-next-line
import { exp } from "prelude-ls";
import React, {useState} from "react";
import Avatar from "./Avatar";
// import Detail from "./Detail";
import './Card.css';
import $ from "jquery";
import VideoRoom9 from "./VideoRoom9";

// import quotes from "./quotes";
// import $ from 'jquery';

function Card(props){
    const quoteOriginal=props.sp;
    // eslint-disable-next-line
    const quoteAdd=props.sp3;
    const [toggle, setToggle]=useState(false);
    const [quote, setQuote]=useState(quoteOriginal);
    const [iscard, setCard]=useState(false);
  

    function switchQuote(){
        const quoteNew=props.sp2;
        // for(let i=1;i<quotes.length;i++){
        //    quoteNew=props.quote[i];
        // }
        
        setToggle(!toggle);
    if (!toggle){
        setQuote(quoteNew);  
        $('.info').css('font-style','italic');}
    else 
        {setQuote(quoteOriginal); 
        $('.info').css('font-style','normal');
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
    {!iscard &&   <dl className="dictionary toMiddle ">
        <div className="cardback">
            <div className="top">
            <dt>
                <h2 className="name">{props.name}</h2>
                </dt>
                <Avatar img={props.img} />
                
                <button             
                onClick={switchQuote}     
                >Switch
                </button>  

               <button className="button3"           
                onClick={switchCard}       
                >S2
                </button>            
         </div>

            <div className="bottom" >
              <dd className="info">
              {/* <div className="info" > */}
            
              {quote}         
              </dd>           
            </div>
          </div>        
        </dl>
        
        }
        
        { iscard && <VideoRoom9 />}
    </div>
     
);
}

export default Card;