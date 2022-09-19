import React from 'react';
import Style from './TopVideo.module.css'
import video from './Le Coucher Du Soleil - 111204.mp4'
const TopVideo = () => {
    return (
        <div className={Style.TopVideo}>
            <video src={video} autoPlay loop muted/>
        </div>
    );
};

export default TopVideo;