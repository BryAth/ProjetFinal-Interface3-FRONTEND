import React from 'react';
import Style from './TopContainer.module.css'
import Card from '../card/card'

const TopContainer = () => {
    return (
        <div className={Style.TopContainer}>
            <img src="https://www.ath.be/loisirs/folklore/ducasse-dath/actualites-ducasse-dath/2022/votez-pour-laffiche-de-la-ducasse-2022/ducasse-visuel-3.jpg/@@images/60608d89-5bf2-461f-9cfa-b5a212d4ca99.jpeg" alt="" className={Style.TopImg}/>

            <p>Bienvenue sur le site de la ducasse d'Ath !</p>  
            
            <p className={Style.TopParaph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius. Perspiciatis libero nulla sequi optio alias quo aut possimus quas. Temporibus aliquid deserunt quo expedita, officiis maiores doloremque dicta? Sit, magni provident. Reprehenderit voluptate voluptatibus doloribus sint a culpa ea autem voluptatem obcaecati quas delectus debitis, deleniti in ipsam ratione. Perferendis error in vero aliquam sit vitae! Quos, fugiat excepturi. Architecto quasi, voluptas ex iste deleniti, nisi eveniet iusto debitis magni quod cum quisquam eum.</p>
            
        </div>
    );
};

export default TopContainer;