import {React, useEffect} from 'react'
import './ProjectCover3.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";
import image3 from "./images/foto1.jpg";


export default function ProjectCover2() {

    const image = [
        {alt: 'image1', src:image1 , id:'image1'},
        {alt: 'image2', src:image2, id:'image2'},
    ];

    let onHover = ()=>{
        
        let contentHover = document.getElementsByClassName("text");

        for (var i = 0; i<contentHover.length; i++){
        contentHover[i].style.color = "black";
        }

        console.log(contentHover);
    }

    let onLeave = ()=>{
        
        let contentHover = document.getElementsByClassName("text");

        for (var i = 0; i<contentHover.length; i++){
        contentHover[i].style.color = "white";
        }

        console.log(contentHover);
    }
        
    const imageShow = image.map(image=>{
        return (
        <div className="container" onMouseOver={onHover} onMouseLeave={onLeave}>
            <li><img src = {image.src}></img>
            <p className="text">{image.id}</p>
            </li>
        </div>)
    });

    return (
        
        <div>
            <ul>{imageShow}</ul>
        </div>
    )
}
