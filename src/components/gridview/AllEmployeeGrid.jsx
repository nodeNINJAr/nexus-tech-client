import React from 'react';
import PropTypes from 'prop-types';
import AllEmployeeCard from '../shared/card/AllEmployeeCard';

const AllEmployeeGrid = ({users}) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
           {
            users?.map(user=>(
                <AllEmployeeCard key={user?._id} user={user} />
            ))
           }
        </div>
    );
};
AllEmployeeGrid.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
    })).isRequired,
};

export default AllEmployeeGrid;
