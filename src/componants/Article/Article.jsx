import React from 'react';
import Style from './Article.module.css'

const Article = ({article}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        
<div className={Style.ShopCard}>   
            
                
        <p>Blabla {article.nomarticle}</p>
        <p>{article.prixArticle}</p>
        <p>{article.descriptionArticle}</p>
        <img src={article.img} alt="" />
        <form onSubmit={(e) =>handleSubmit(e)}> 
        <button>Ajouter</button>
        <button>Supprimer</button>
        </form>
            
       
            
        
</div>
        
    );
};

export default Article;