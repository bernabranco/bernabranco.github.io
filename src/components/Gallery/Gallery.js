import React from 'react'
import './Gallery.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";
import image3 from "./images/print3.jpg";
import image4 from "./images/print4.jpg";
import image5 from "./images/foto1.jpg";

export default function Gallery() {

  let imageBank = [
    {src: image1, id: 'image1' },
    {src: image2, id: 'image2' },
    {src: image3, id: 'image3' },
    {src: image4, id: 'image4' },
    {src: image5, id: 'image5' },
  ];

  let imageList = imageBank.map(image=>{
    return <li className = "gallery-li"><img className = "gallery-img" src={image.src} key={image.id} alt={image.id}></img></li>;
  })


  return (
      <div className="gallery-container">
      <ul className = "gallery-ul">
        {imageList}
      </ul>
      </div>
  );
}


