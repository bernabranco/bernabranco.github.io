import React from 'react'
import './Carrousel.css'

import image1 from "./images/print1.jpg";
import image3 from "./images/print3.jpg";
import image4 from "./images/print4.jpg";

class ImageShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          bgImage: `url(${image1})`,
      }
    }


    render(){
        return(
            <div className="container" style={{ backgroundImage: this.state.bgImage}} >

                <div className="text-container">
                <h1 id ="nome" className="text">-------- Bernardo Branco</h1>
                <div><h2 className="heading">Digital Artist</h2></div>
                <div><h2 className="heading">X----------</h2></div>
                <div><h2 className="heading">IT Enthusiast</h2></div>
                </div>
                
                <div className="button-container">
                <button className="button" onClick={() => this.setState({ bgImage: `url(${image1})` })}></button>
                <button className="button" onClick={() => this.setState({ bgImage: `url(${image4})` })}></button>
                <button className="button" onClick={() => this.setState({ bgImage: `url(${image3})` })}></button>  
                </div>

            </div>
        )
    }
}

export default ImageShow