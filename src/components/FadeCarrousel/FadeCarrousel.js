import { React, useState, useEffect } from 'react'
import './FadeCarrousel.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";
import image3 from "./images/print3.jpg";
import image4 from "./images/print4.jpg";

const images = [    /** Just need to add images here */
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 }
];

export default function FadeCarrousel () {

    //create counter state
    let [counter, setCounter] = useState(0);

    //image can use counter as an index
    let image = images[counter].src;

    //trigger image change in loop
    useEffect(()=>{
        let interval = setTimeout(() => setCounter(counter + 1 < images.length ? counter + 1 : 0), 3000); 
        document.getElementById("container").style.transition = "background-image 2s ease-in-out";
        return () => clearTimeout(interval); 
    }, [counter]);

    return (
        <div id="container" className="fc-container" 
            style={{ backgroundImage: `url(${image})`}} >
        </div>
    )
}