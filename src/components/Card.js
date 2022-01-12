// eslint-disable-next-line
import { exp } from "prelude-ls";
import React, {useState} from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import './Card.css';
import $ from "jquery";
import VideoRoom9 from "./VideoRoom9";
// import $ from 'jquery';

function Card(props){
    const quoteOriginal=props.quote;
    // eslint-disable-next-line
    const quoteAdd=props.quote3;
    const [toggle, setToggle]=useState(false);
    const [quote, setQuote]=useState(quoteOriginal);
    const [iscard, setCard]=useState(false);
  

    function switchQuote(){
        const quoteNew=props.quote2;
        setToggle(!toggle);
    if (!toggle){
        setQuote(quoteNew);  
        $('.info').css('color','#998CEB');}
    else 
        {setQuote(quoteOriginal); 
        $('.info').css('color','#116530');
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
                <h2 className="name">{props.name}</h2></dt>
                <Avatar img={props.img}/>
                
               <button className="button3"           
                onClick={switchCard}       
                >S2
                </button>    


                <button               
                onClick={switchQuote}     
                >Switch
                </button>
                
                

                
              
            </div>
            <div className="bottom" >
              <dd >
              <Detail 
              style={{color:"blue"}}
                detailInfo={quote}                
               />
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