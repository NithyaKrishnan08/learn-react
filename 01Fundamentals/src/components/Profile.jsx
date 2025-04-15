import React, { useState } from 'react';

function Profile() {
    const [profile, setProfile] = useState({
        name: 'John',
        age: 20
    });

    const handleInputName = (e) => {
        setProfile({ ...profile, name: e.target.value });
    };

    const handleInputAge = (e) => {
        setProfile({ ...profile, age: e.target.value });
    };

    return (
        <div>
            <h2>Profile</h2>
            <input 
                type="text"
                value={profile.name}
                onChange={handleInputName}
                placeholder="Enter name"
            />
            <input 
                type="number"
                value={profile.age}
                onChange={handleInputAge}
                placeholder="Enter age"
            />
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </div>
    );
}

export default Profile;

