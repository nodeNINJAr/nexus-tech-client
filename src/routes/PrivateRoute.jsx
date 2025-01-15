import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../components/hooks/useAuth';
import { Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';

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
