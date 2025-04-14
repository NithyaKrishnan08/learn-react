import React from 'react';
import { FaBeer } from 'react-icons/fa';

function IconComponent() {
    const iconStyle = {
        fontSize: '30px',
        color: 'gold'
    };

    return (
        <div>
            <FaBeer 
                style={iconStyle} 
                title="Cheers!"
            />
        </div>
    );
}

export default IconComponent;
