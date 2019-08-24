import React from 'react';

const navStyle = {
    display: 'flex',
    justifyContent: 'flex-end'
};

const Navigation = () => (
    <nav style={navStyle}>
        <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
    </nav>
);

export default Navigation;
