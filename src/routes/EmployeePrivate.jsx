import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/shared/loader/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useRole from '../components/hooks/useRole';

const EmployeePrivate = ({children}) => {
    const [userRole, isLoading] = useRole();
    console.log(userRole);
    const location = useLocation();
    if(isLoading) return <Spinner/>
    if(userRole ==="employee") return children;
    return <Navigate to="/login" state={{from:location}} replace='true'/>
 
 };
 EmployeePrivate.propTypes = {
     children: PropTypes.node.isRequired,
 };

export default EmployeePrivate;