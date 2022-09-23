import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import Gallerie from '../Gallerie/Gallerie';
import Style from "./GallerieCollaborative.module.css"
import Navbar from '../navbar/navbar';
const url = "http://localhost:8080/api/galerie"

const GallerieCollaborative = () => {

    const [img, setImg] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setImg(res.data))
    }, [])
    return (
        <>
            <Navbar />
            <div className={Style.center}>
                <h1>Bienvenue sur la gallerie ! </h1>
                {
                    img.map(image =>
                    (
                        <Gallerie image={image} />
                    ))
                }
            </div>
        </>
    );
};

export default GallerieCollaborative;