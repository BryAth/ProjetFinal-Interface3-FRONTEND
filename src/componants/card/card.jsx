import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './card.module.css'





const Card = ({ geant }) => {

    console.log(geant)


    return (
        <div className={Style.container}>
            <div className={Style.Card}>
                <div className={Style.infos}>
                    <p>{geant.nom}</p>
                    <div className={Style.der}>
                        <p className={Style.Desc}>{geant.description} </p>
                        
                        <NavLink to={`/details/${geant._id}`}>
                            <div className={Style.ButtonButton}>
                                <button>En savoir + !</button>
                            </div>
                        </NavLink>
                    </div>
                    <div className={Style.imgCenter}></div>
                    <img src={geant.img} alt="" />.
                </div>

            </div>
        </div>




    );
};

export default Card;