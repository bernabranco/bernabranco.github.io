import React from 'react'
import './ProjectCover2.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";

export default function ProjectCover2() {

    //IMAGE BANK
    const image = [
        {src:image1 , id:'Clouds', description: 'Shader Series - December 2020'},
        {src:image2, id:'Madani', description: 'Photography - November 2020'},
        {src:image2, id:'Instalation', description: 'Instalation - October 2020'},
    ];
    
    //ITERATE THROUGH IMAGES IN BANK
    const imageShow = image.map(image=>{
        return (
        
        <div className="pc-container">
            <li className="pc-li"><img className="pc-img" src = {image.src} key={image.id} alt={image.id}></img>
            <p className="text">{image.id}</p>
            <p className="text2">{image.description}</p>
            </li>
        </div>)
    });

    return (
        <div>
            <ul className="pc-ul">{imageShow}</ul>
        </div>
    )
}
