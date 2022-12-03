import React from "react";
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brainicon.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2 shadow-hover::after: inherit" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
             <div className="Tilt-inner pa3"> 
              <img style={{paddingTop: '25px'}} alt="brainicon" src={brain}/> 
             </div>
            </Tilt>
        </div>
    );
}

export default Logo;