import React from 'react'
import './MouseCursor.css'

class MouseCursor extends React.Component {

    mouseCoord(){

    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".navItems p");

    console.log(navLinks);

    window.addEventListener('mousemove',function (e){
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    })
    
    navLinks.forEach(element => {

          element.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove('link-grow');
          element.classList.remove('hover-link');
        });
      
          element.addEventListener("mouseover", () => {
          console.log("teste");
          mouseCursor.classList.add('link-grow');
          element.classList.add('hover-link');
        });
      });
    }

    componentDidMount() {
        setInterval(this.mouseCoord, 1000);
    }
  
    render(){
        return(
            <div className="cursor">  
            </div>
        )
    }
}

export default MouseCursor