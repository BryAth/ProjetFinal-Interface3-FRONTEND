import React, { useState } from 'react';
import Style from './Login.module.css'
import Navbar from '../navbar/navbar';
import { useEffect } from 'react';


const Login = () => {
    const [pseudo, setPseudo] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        //! todo naviguer si user connected
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        //! todo dispatch action login en fournissant email et password  
    }

    return (
        <div>
            <Navbar />

            <div className={Style.FlexForm}>

                <div className={Style.CardForm}>
                    <form action="">
                        <div>
                            <label htmlFor="">Pseudo/Email : </label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Mot de passe : </label>
                            <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit' onClick={handleSubmit}>Se connecter !</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;