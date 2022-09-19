import React from 'react';

import Navbar from '../navbar/navbar';
import Style from './FormCollaboratif.css'
import { useNavigate } from 'react-router';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const FormCollaboratif = () => {
    const navigate = useNavigate()
    const [name,setName] = useState([])
    const [age,setAge] = useState([])
    const [photoGallery,setPhotoGallery] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name , age)
    };

    // useEffect(() => {
    //     axios.post("http://localhost:8080/api/galerie")
    //     .then((res) => console.log(res)
        
    //     )},[])


    return (
            <>
        <Navbar />
        <div className={Style.BodyCollabo}>
            <p>Bienvenue sur la galerie collaborative !</p>
            <p>C'est ici que vous pourrez poster vos photos amateurs.</p>

        
            <div>

                <div> 
                <form onSubmit={handleSubmit}>
                <input type="file" multiple />
                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <input type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}/>
                
                <button onClick={() => {
                    navigate('/galerie')
                }}
                >GOING TO GALLERY !</button>

                <button>SUBMIT</button>                </form>
        
                </div>
            </div>
        </div>
        </>
    );
};

export default FormCollaboratif;