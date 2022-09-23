import React from 'react';

import Navbar from '../navbar/navbar';
import Style from './FormCollaboratif.module.css'
import { useNavigate } from 'react-router';

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const url = "http://localhost:8080/api/galerie"

const FormCollaboratif = () => {
    const navigate = useNavigate()

    const [imgLink, setImgLink] = useState([]);


    useEffect(() => {
        // axios.get(url)
        //     .then((res) => console.log(res))
    })

    const postdata = (file) => {
        
        // console.log(imgLink);
        const data = new FormData()
        data.append('imgLink',file)

        
        

        axios.post(url, 
            data,
            {   headers : { 
                "Content-Type" : "multipart/form-data"
                            }
            }
        )
            .then((res) => navigate("/galerie"))
    }


    return (
        <>
            <Navbar />



            <div className={Style.FormContainer}>

                <div className={Style.CardForm}>
                    <p className={Style.topParah}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum praesentium qui voluptas, impedit officiis numquam!</p>
                    <div className={Style.InputForm}>
                        <label htmlFor="">Rentrez un lien vu que je suis naze et je sais pas comment upload une photo</label>
                        <input type="file" onChange={(e) => postdata(e.target.files[0])} />
                    </div>
                    <div className={Style.InputForm}>

                        {/* <button onClick={postdata} >Envoyer</button>
                     */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default FormCollaboratif;