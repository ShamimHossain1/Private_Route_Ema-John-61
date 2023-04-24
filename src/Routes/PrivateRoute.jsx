import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProviders/AuthProviders';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);

    if(loading){
        return (  <div className="text-center mt-24">
        <Spinner size="xl" aria-label="Center-aligned spinner example" />
      </div>)
    }

    if(user){
        return children;
    }
    
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;