import React, {useState} from 'react';

function NameComponent () {
    const [user_name , name_displayed] = useState ('');
    return (
        <div>
            <p>{name_displayed}</p>
            <p>{user_name ? user_name : 'No user here'}</p>
        </div>
    );
}

export default NameComponent;
