import React, {useState} from 'react'
import './Gallery.css'

import image1 from "./images/print1.jpg";
import image2 from "./images/print2.jpg";
import image3 from "./images/print3.jpg";
import image4 from "./images/print4.jpg";
import image5 from "./images/foto1.jpg";

export default function Gallery() {

  let imageBank = [
    {alt: 'image1', src: image1, id: 'image1' },
    {alt: 'image2', src: image2, id: 'image2' },
    {alt: 'image3', src: image3, id: 'image3' },
    {alt: 'image4', src: image4, id: 'image4' },
    {alt: 'image5', src: image5, id: 'image5' },
  ];

  let [images, setImages] = useState([...imageBank]);

  let addImage = () => {
    var number = Math.random()*imageBank.length;
    number = Math.trunc(number);
    images.push(imageBank[number]);
    setImages([...images]);
  }
  
  let removeAllImages = () => {
    setImages([]);
  }

  let removeImage = () => {
    images.pop();
    setImages([...images]);
  }
  
  let imageList = images.map(image=>{
    return <li><img src={image.src}></img></li>;
  })

  return (
    <div className="container">

      <div className="button-container">
      <button onClick={addImage}>add</button>
      <button onClick={removeAllImages}>remove all</button>
      <button onClick={removeImage}>remove</button>
      </div>
      
      <div className="gallery-container">
      <ul>
        {imageList}
      </ul>
      </div>
  </div>
  );
}


