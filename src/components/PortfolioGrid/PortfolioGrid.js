import React from 'react'
import './PortfolioGrid.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";
import image3 from "./images/print3.jpg";


export default function ProjectCover() {

    const image = [
        {alt: 'image1', src:image1, id:'image1'},
        {alt: 'image2', src:image2, id:'image2'},
        {alt: 'image2', src:image2, id:'image3'},
        {alt: 'image3', src:image3, id:'image4'},
        {alt: 'image1', src:image1, id:'image5'},
        {alt: 'image1', src:image1, id:'image6'},
        {alt: 'image1', src:image1, id:'image7'},
        {alt: 'image1', src:image1, id:'image8'},
        {alt: 'image1', src:image1, id:'image9'},
        
    ];

    const imageShow = image.map(image=>{
        return (
        <div className="pg-container">
            <li className="pg-li">
               <img className="pg-img" src = {image.src} alt={image.id}></img>
               <p id = {image.id} className="pg-p">{image.id}</p>
            </li>
        </div>)
    });

    return (
        <div>
            <ul className="pg-ul">{imageShow}</ul>
        </div>
    )
}
