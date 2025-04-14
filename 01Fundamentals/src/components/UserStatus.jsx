import React from 'react';

function UserStatus({ loggedIn, isAdmin }) {
    return (
        <div>
            {loggedIn && isAdmin && <p>Welcome Admin!</p>}
            {loggedIn && !isAdmin && <p>Welcome User!</p>}
        </div>
    );
}

export default UserStatus;