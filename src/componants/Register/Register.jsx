import React from 'react';
import Style from './Register.module.css'
import Navbar from '../navbar/navbar'
import { useState } from 'react';

import { useEffect } from 'react';
import { registerUser } from '../../store/actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';



const Register = () => {


    const isConnected = useSelector(state => state.identification.isConnected)
    const [pseudo, setPseudo] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        if (isConnected) {
            navigate("/")
        }
        
    },[isConnected])

    const postdata = (e) => {
        e.preventDefault();
        dispatch(registerUser({ pseudo, firstname, lastname, password, email }))






    }


    return (
        <>
            <Navbar />


            <div className={Style.FlexForm}>
                <div className={Style.CardForm}>
                    <form action="">
                        <div>
                            <label htmlFor="">Entrez votre pseudo  </label>
                            <input type="text" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Entrez votre prénom </label>
                            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Entrez votre nom </label>
                            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Entrez votre mot de passe </label>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Entrez votre adresse e-mail</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <button type='submit' onClick={postdata}>Send</button>


                    </form>
                </div>


            </div>
        </>
    );
};

export default Register;