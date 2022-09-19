import React from 'react';
import Style from './Login.module.css'
import Navbar from '../navbar/navbar';
const Login = () => {
    return (
        <div> 
            <Navbar />
        
        <div className={Style.FlexForm}>
            
            <div className={Style.CardForm}> 
            <form action="">
                <div>
                    <label htmlFor="">Pseudo/Email : </label>
                    <input type="text" />
                </div>
                <div>  
                    <label htmlFor="">Mot de passe : </label>
                    <input type="password" name="" id="" />
                </div>
                <button>BLABLA</button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Login;