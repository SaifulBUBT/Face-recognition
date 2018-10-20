import React from 'react';
import './Logo.css';
import brain from './brain.png';
import Tilt from 'react-tilt';

const Logo = () =>{
    return (
        <div>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 100, width: 100, marginLeft:'20px' }} >
             <div className="Tilt-inner pa3"> 
                <img style={{paddingTop:'5px'}} alt='logo' src={brain} />
              </div>
             
            </Tilt>
            
        </div>
    )
}

export default Logo;