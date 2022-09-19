import React from 'react';
import Carrousel from '../Carrousel/Carrousel';
import Navbar from '../navbar/navbar';
import TopContainer from '../topContainer/TopContainer';

import TopVideo from '../TopVideo/TopVideo';



const Home = () => {
    return (
        <div>

            <Navbar />
            <TopVideo />
            <TopContainer />
            <Carrousel />
            
            

        
            
        </div>
    );
};

export default Home;