import {React, useState, useEffect} from 'react'
import './ViewPortefolio.css'

import icon from './icons/right_arrow.svg';

export default function ViewPortefolio() {

    const [counter,setCounter] = useState(0)
    const [transition, setTransition] = useState(false);

    useEffect(()=>{

        let interval = setInterval(()=>setCounter(counter+1),500);
        let icon = document.getElementById("vp-icon");

        if(counter % 2 === 0){
            setTransition(false);
        } else{
            setTransition(true);
        }

        if(transition){
            icon.classList.add("vp-icon-animation");
        } else {
            icon.classList.remove("vp-icon-animation");
        }

        icon.style.transition = "left 1s ease-in-out";

        return () => clearInterval(interval); 

    },[counter,transition,setTransition])

    return (
        <div className = 'vp-container'>
            <div className = 'vp-text-container'>
            <h1 className = 'vp-text'>Full Portfolio</h1>
            </div>
            <div className = 'vp-icon-container'> 
            <img id = 'vp-icon' className = 'vp-icon' src={icon} alt = 'arrow'/>
            </div>
        </div>
    )
}