import React from 'react';
import useRole from '../components/hooks/useRole';

const DashBoard = () => {
    const [userEmail] = useRole();
    console.log(userEmail);
    return (
        <div>
            <h1>hello from dashboard</h1>
        </div>
    );
};

export default DashBoard;