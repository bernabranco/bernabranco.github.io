import {React, useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'; 

export default function Navbar() {

    let [counter, setCounter] = useState(1);

    useEffect(()=>{

        const home = document.getElementById("home");
        const work = document.getElementById("work");
        const info = document.getElementById("info");

        if(counter === 1){
            home.classList.remove("navItems");
            home.classList.add("navItems-active"); 

            work.classList.remove("navItems-active");
            work.classList.add("navItems");
            info.classList.remove("navItems-active");
            info.classList.add("navItems");

        } else  if(counter === 2){
            work.classList.remove("navItems");
            work.classList.add("navItems-active"); 
            
            home.classList.remove("navItems-active");
            home.classList.add("navItems");
            info.classList.remove("navItems-active");
            info.classList.add("navItems");

        } else if(counter === 3){
            info.classList.remove("navItems");
            info.classList.add("navItems-active"); 
            
            home.classList.remove("navItems-active");
            home.classList.add("navItems");
            work.classList.remove("navItems-active");
            work.classList.add("navItems");  
        } 

    },[counter]);
    
    return (
        
        <div className="navBar">

                <div className="containerLogo">
                    <Link to="/home">
                    <div className="navLogo" ><p>RELEASE</p></div>
                    </Link>
                </div>

                <div className="containerItems"> 

                    <Link to = "/info">
                    <div id="info" className="navItems" onClick={()=>setCounter(3)}><p>Info</p></div>
                    </Link>            
                
                    <Link to = "/work">
                    <div id ="work" className="navItems" onClick={()=>setCounter(2)}><p>Work</p></div>
                    </Link>

                    <Link to = "/home">
                    <div id="home" className="navItems" onClick={()=>setCounter(1)}><p>Home</p></div>
                    </Link> 
                </div>
                
        </div>   
    )
   
}
