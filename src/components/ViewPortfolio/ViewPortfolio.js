import {React, useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import './ViewPortfolio.css'
import arrow from './icons/right_arrow.svg';

export default function ViewPortfolio(){

    const [counter,setCounter] = useState(0)
    const [transition, setTransition] = useState(false);

    useEffect(()=>{

        let interval = setInterval(()=>setCounter(counter+1),500);
        let arrow = document.getElementById("vp-arrow");

        //toggle SetSum
        if(counter % 2 === 0){
            setTransition(false);
        } else{
            setTransition(true);
        }

        if(transition){
            arrow.classList.add("vp-animation");
        } else {
            arrow.classList.remove("vp-animation");
        }

        arrow.style.transition = "left 0.9s ease";

        return () => clearInterval(interval); 

    },[counter,transition,setTransition])

    return (
        <div className="vp-container">
            <div className="vp-head1"><h1>Full Portfolio</h1></div>
           
            <div className="vp-arrow">
            <Link activeClass="active" to="pc-container" spy={true} smooth={true}>
            <img id = "vp-arrow" className="viewp-arrow" src={arrow} alt = 'scroll'></img>
            </Link>
            </div>
           
            <div className="vp-head2"><h1>Full Portfolio</h1></div>
        </div>
    )
}