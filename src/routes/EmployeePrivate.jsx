import React from 'react';
import useAuth from '../components/hooks/useAuth';

const EmployeePrivate = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
 
 
    if(loading) return <Spinner/>
    if(user) return children
    return <Navigate to="/login" state={{from:location}} replace='true'/>
 
 };
 EmployeePrivate.propTypes = {
     children: PropTypes.node.isRequired,
 };

export default EmployeePrivate;