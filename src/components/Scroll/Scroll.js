import {React, useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './Scroll.css'

import scroll from './icons/scroll.svg';

export default function Scroll(){

    const [counter,setCounter] = useState(0)
    const [transition, setTransition] = useState(false);

    useEffect(()=>{

        let interval = setInterval(()=>setCounter(counter+1),500);
        let scroll = document.getElementById("scroll");

        //toggle SetSum
        if(counter % 2 === 0){
            setTransition(false);
        } else{
            setTransition(true);
        }

        if(transition){
            scroll.classList.add("scroll-animation");
        } else {
            scroll.classList.remove("scroll-animation");
        }

        scroll.style.transition = "top 0.5s ease-in-out";

        return () => clearInterval(interval); 

    },[counter,transition,setTransition])

    return (
        <div className="scroll-container">
            <div className="sc-head1"><h1>Featured Projects</h1></div>
           
            <div className="sc-arrow">
            <Link activeClass="active" to="pc-container" spy={true} smooth={true}>
            <img id = "scroll" className="scroll-arrow" src={scroll} alt = 'scroll'></img>
            </Link>
            </div>
           
            <div className="sc-head2"><h1>Featured Projects</h1></div>
        </div>
    )
}