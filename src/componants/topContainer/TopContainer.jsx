import React from 'react';
import Style from './TopContainer.module.css'
import Card from '../card/card'
import img from './Mariage_40.jpg'
import { useRef } from 'react';
import { useEffect } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import {gsap} from 'gsap'


const TopContainer = () => {
    // const circleRef = useRef(null)

    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() =>{
    //     gsap.to('#topScroll',{
    //         x:400,
    //         duration : 3,
    //         scrollTrigger : {
    //             trigger : '#testscroll',
    //             markers : true,
    //             start : "center 400",
    //             end : "center 800",
                
    //             scrub : 10
    //         }
    //     }
           
    //         )
    // },[])
    return (
        <div className={Style.TopContainer}>

<img src="http://image.noelshack.com/fichiers/2022/38/2/1663670869-302530800-618808756479199-6147456415745838394-n.jpg" id='topScroll' alt="" className={Style.TopImg}/>


            <p id='testscroll' className={Style.test}>Bienvenue sur le site de la ducasse d'Ath !</p>  
            
            <p className={Style.TopParaph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius. Perspiciatis libero nulla sequi optio alias quo aut possimus quas. Temporibus aliquid deserunt quo expedita, officiis maiores doloremque dicta? Sit, magni provident. Reprehenderit voluptate voluptatibus doloribus sint a culpa ea autem voluptatem obcaecati quas delectus debitis, deleniti in ipsam ratione. Perferendis error in vero aliquam sit vitae! Quos, fugiat excepturi. Architecto quasi, voluptas ex iste deleniti, nisi eveniet iusto debitis magni quod cum quisquam eum.</p>
            
            <img src={img} alt="" className={Style.imgtourne}/>
            
            <p className={Style.TopParaph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere explicabo praesentium, illo quam velit sed, delectus aspernatur, cum aut numquam mollitia ratione recusandae doloribus quidem a ipsum ut facilis iure nulla assumenda culpa et veniam minus. Debitis inventore, nisi non repellat voluptates tempora reprehenderit accusamus hic facere quisquam eveniet tempore nostrum expedita corporis voluptas minima officia iste, modi blanditiis molestias a mollitia praesentium possimus. Nihil, in eveniet blanditiis vel vero voluptatibus mollitia fugiat accusantium quod reprehenderit ex.
            </p>

        </div>
    );
};

export default TopContainer;