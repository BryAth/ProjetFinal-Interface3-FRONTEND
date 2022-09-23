import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Navbar from '../navbar/navbar';
import Style from './geantdesc.module.css'

const Aa = () => {

    const { id } = useParams()
    console.log(id);

    const [geant, setGeant] = useState({})

    useEffect(() => {
        console.log("ddddd");
        axios.get(`http://localhost:8080/api/geants/${id}`)
            .then((res) => { setGeant(res.data); console.log("geant", res.data) })
    }, [id])


    return (
        <>
            <Navbar />
            <div className={Style.Container}>

                <div className={Style.CardsGeants}>

                    <p>{geant.nom}</p>
                    <p>{geant.taille}</p>
                    <p>{geant.poids}</p>
                    <p>{geant.anneeCreation}</p>
                    <p>{geant.description}</p>


                </div>


                <div className={Style.images}>
                {/* <img src={geant.imgSupp[0]} alt="sdd" />
    <img src={geant.imgSupp[1]} alt="" /> */}
            
            {/* <img src={geant.imgSupp[0]} alt="sdd" />
            <img src={geant.imgSupp[1]} alt="" /> */}
           
            {
                geant.imgSupp &&
                geant.imgSupp.map(image => <img src={image} alt="dd" />)
            }
    </div>

            </div>

        
        </>
    );
};

export default Aa;