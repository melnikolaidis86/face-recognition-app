import React from 'react';
import Tilt from "react-tilt";
import logoImage from './demo-logo.png';

import './logo.css';

const Logo = () => (
    <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img alt='logo' src={logoImage} />
            </div>
        </Tilt>
    </div>
);

export default Logo;
