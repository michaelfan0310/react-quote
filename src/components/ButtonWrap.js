import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonWrap.css';

function ButtonWrap(){
  return(
  <div className="buttonWrapper">
   <>
    <Button variant="outline-light" href="http://michaelfan.tk/react-quote/">React</Button>{' '} 
     <Button variant="outline-light" href="http://michaelfan.tk/special/aquarium.html">Special</Button>{' '}                                 
     <Button variant="outline-light" href="https://www.michaelfan0310.ml/vue_music">Vue</Button>{' '} 
     <Button variant="outline-light" href="http://michaelfan.tk/library/">Library</Button>{' '}  

     <Button variant="outline-light" href="https://www.michaelfan0310.ml/news/pandemic.html">News</Button>{' '} 

     <Button variant="outline-light" href="https://www.michaelfan0310.ml/michael2020/CSSPhotoGallery.html">Moments</Button>{' '}  

  <Button variant="outline-light" href="https://www.michaelfan0310.ml/travel/videoWeb.html">Travel</Button>{' '}   
    
   </>   
    </div>
);
}

export default ButtonWrap;