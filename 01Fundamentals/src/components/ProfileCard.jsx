import React from 'react';

function ProfileCard() {
    const styles = {
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: 'lightgray',
        color: 'black'
    };

    return (
        <div style={styles}>
            <h2>
                Object Styles
            </h2>
            <p>We are learning about styles in React</p>
        </div>
    );
}

export default ProfileCard;
