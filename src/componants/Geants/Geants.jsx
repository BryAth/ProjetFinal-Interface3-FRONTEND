import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Card from "../card/card";
import Style from './Geant.module.css'


const Geants = () => {

    const [geants,setGeants] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:8080/api/geants")
        .then((res) => setGeants(res.data))
    },[])

    return (
        <div> <Navbar /> 
        <div className={Style.Container}>
            
            <ul>
                {
                    geants.map(geant => 
                        (
                            <Card geant={geant}/>
                        ))
                }
            </ul>
        </div>
        </div>
    );
};

export default Geants;