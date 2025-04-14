import React, { useState } from 'react';

function EventDemo() {
    const [buttonText, setButtonText] = useState("Click the button");
    const [copyText, setCopyText] = useState("Try to copy this text");
    const [hoverBgColor, setHoverBgColor] = useState("white");
    
    const handleButtonClick = () => {
        setButtonText("Button Clicked!");
    };
    
    const handleCopy = (e) => {
        e.preventDefault();
        setCopyText("Text Copied!");
    };
    
    const handleMouseEnter = () => {
        setHoverBgColor("lightyellow");
    };
    
    const handleMouseLeave = () => {
        setHoverBgColor("white");
    };

    return (
        <div>
            <h2>Event Demo</h2>
            
            <button onClick={handleButtonClick}>Click Me</button>
            <p>{buttonText}</p>
            
            <div>
                <p onCopy={handleCopy}>{copyText}</p>
            </div>
            
            <div>
                <p 
                    style={{ backgroundColor: hoverBgColor, padding: '10px' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Hover over me to change the background color
                </p>
            </div>
        </div>
    );
}

export default EventDemo;

