import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Style from './Gallerie.module.css'
import FsLightbox from 'fslightbox-react'

const Gallerie = ({ image }) => {

    const photos = []
    
    
//    const blabla = image.map(photo => (
//        photo.push(Object.keys(photo.imgLink))
//     ))
    const [toggler, setToggler] = useState(false)
    // // const photos = (Object.values(image)[1]);
    // console.log("Console log photos" , photos); 
    // const photo =((Object.values(image)))
    // console.log(photo)
    // const newArray = photos.push(photo)
    // console.log(newArray);
    // console.log(photo.join(""));


    useEffect(() => {
        
    })
    return (
        <>
            <div className={Style.CollabContainer}>
                <div className={Style.blabla}>
                    <img src={image.imgLink} alt="" />
                </div>
            </div>



            <button onClick={() => setToggler(!toggler)}>
                Toggle Lightbox
            </button>
            <FsLightbox
                toggler={toggler}
                sources={[
                
                    'https://picsum.photos/id/237/536/354'
                

                ]}
            />
        </>
    );
};

export default Gallerie;