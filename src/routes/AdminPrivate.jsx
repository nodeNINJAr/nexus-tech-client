import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/shared/loader/Spinner';
import useRole from '../components/hooks/useRole';

const AdminPrivate = ({children}) => {
    const [userRole, isLoading] = useRole();
    console.log(userRole);
    const location = useLocation();
    if(isLoading) return <Spinner/>
    if(userRole ==="admin") return children;
    return <Navigate to="/login" state={{from:location}} replace='true'/>
};
AdminPrivate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminPrivate;
