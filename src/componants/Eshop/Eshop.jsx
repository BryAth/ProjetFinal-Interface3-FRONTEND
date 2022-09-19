import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import Style from "./Eshop.module.css"
import axios from "axios"
import { useEffect } from 'react';
import Article from '../Article/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'



const Eshop = () => {


    const [articles,setArticles] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/eshop")
        .then((res) => setArticles(res.data))
    },[])
        
return( 
    <> 
    <Navbar />
    
    <div className={Style.ShopContainer}> 
        <div className={Style.LeftSide}>

        <ul>
            {
                    articles.map(article =>(
                        <Article article={article} />
                    ))
            }
            
        </ul>

       
        </div>
        <div className={Style.Basket}>
            <div> 
            <p className={Style.PanierTop}> <FontAwesomeIcon icon={faCartPlus} className={Style.Icon} />Panier</p>
            </div>
            
            <div className={Style.PrixContainer}> 
            <p className={Style.PrixBottomRight}>Prix : BLABLAEUROS</p>
            </div>
            </div>
    </div>
    </>

    );
};

export default Eshop;