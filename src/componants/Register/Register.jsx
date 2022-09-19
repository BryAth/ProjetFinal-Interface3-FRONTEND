import React from 'react';
import Style from './Register.module.css'
import Navbar from '../navbar/navbar'

const Register = () => {
    return (
        <> 
        <Navbar />
        

        <div className={Style.FlexForm}>
                    <div className={Style.CardForm}>
            <form action="">
                <div> 
            <label htmlFor="">Entrez votre pseudo  </label>
            <input type="text" />
                </div>
                <div> 
            <label htmlFor="">Entrez votre prénom </label>
            <input type="text" />
                </div>
                <div>
            <label htmlFor="">Entrez votre nom </label>
            <input type="text" />
                </div>
                <div> 
            <label htmlFor="">Entrez votre mot de passe </label>
            <input type="password" name="" id="" />
                </div> 
                <div>
            <label htmlFor="">Entrez votre adresse e-mail</label>
            <input type="email" name="" id="" />
                </div>

            <button>Send</button>


            </form>
            </div>


        </div>
        </>
    );
};

export default Register;