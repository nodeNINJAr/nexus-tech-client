import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../components/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/shared/loader/Spinner';

const PrivateRoute = ({children}) => {
   const {user, loading} = useAuth();
   const location = useLocation();
   if(loading) return <Spinner/>
   if(user) return children
   return <Navigate to="/login" state={{from:location}} replace='true'/>

};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
