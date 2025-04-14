import React from 'react';

function Greeting({ timeOfDay }) {
    const message = 
        timeOfDay === 'morning' ? "Good morning!" :
        timeOfDay === 'afternoon' ? "Good afternoon!" :
        timeOfDay === 'evening' ? "Good evening!" : // Added evening case
        "Hello!"; // Added default case

    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default Greeting;