import React from "react";
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import image from '../images/faviconSmall.png';

class Navbar extends React.Component{
  state={isLight:true}

  render(){
    const {isLight}=this.state
    return(
 <div>     
 <nav className="navbar fixed-top navbar-expand-xl navbar-light" style={{backgroundColor: "#010d1a0c"}} id="mainNav" >

    <div className="container">
      <a className="navbar-brand cursor "           href="https://www.michaelfan.ml/" onClick={this.changeBackground} style={isLight?{backgroundColor: "#010d1a0c"}: {backgroundColor: "coral"}}>
      <img id="faviconSmall"
          src={image} alt="icon" width="40px" height="24px" />
          Michael's Blog</a>
      <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
        aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </Button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.michaelfan.ml">Home</a>
      
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.michaelfan.ml/vue_aboutme/">About</a>
          </li>
          <li className="nav-item">
        <a className="nav-link" href="https://www.michaelfan.ml/testWord/">Post</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="https://socialist-syrup-01160.herokuapp.com/">Contact</a>
          </li>
        </ul>
        <div className="col-lg-8 text-end">
          
  <Button variant="success" href="https://dry-taiga-95009.herokuapp.com/">SignUp</Button>{' '}
  

        </div>
      </div>
    </div>
  </nav>
  </div>   
 );
}
changeBackground=()=>{
  const isLight=this.state.isLight
  this.setState({isLight:!isLight})
}

}
export default Navbar;

