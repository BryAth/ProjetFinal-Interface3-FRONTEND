import React from 'react';
import Style from './test.module.css'
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import Card from '../card/card';

const Test = () => {

    const [data,setData] = useState([])
    
    useEffect( () =>{
        axios
        .get("http://localhost:8080/api/geants")
        .then((res)  => setData(res.data))
    },[])
    return (
        <div>
            <ul>
                {data.map((geant) => <Card key={geant._id} geant={geant}/> )}
            </ul>
        </div>
    );
};

export default Test;