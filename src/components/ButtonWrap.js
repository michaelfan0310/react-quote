import React from 'react';
import Button from 'react-bootstrap/Button';
import './ButtonWrap.css';

function ButtonWrap(){
  return(
  <div className="buttonWrapper">
   <>
    <Button variant="outline-light" href="https://michaelfan0310.github.io/react-quote/">React</Button>{' '} 
     <Button variant="outline-light" href="https://michaelfan0310.github.io/special/aquarium">Special</Button>{' '} 

     <Button variant="outline-light" href="https://michaelfan0310.github.io/news/pandemic.html">News</Button>{' '} 

     <Button variant="outline-light" href="https://michaelfan0310.github.io/michael2020/CSSPhotoGallery.html">Moments</Button>{' '}  

  <Button variant="outline-light" href="https://michaelfan0310.github.io/travel/videoWeb.html">Travel</Button>{' '}  

  <Button variant="outline-light" href="https://michaelfan0310.github.io/blog/simon/">Game</Button>{' '}   
  <Button variant="outline-light" href="https://github.com/michaelfan0310/deep-library/tree/gh-pages">Library</Button>{' '}      
   </>   
    </div>
);
}

export default ButtonWrap;