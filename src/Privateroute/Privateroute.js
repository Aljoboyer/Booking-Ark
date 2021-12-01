import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Context/useAuth';

const Privateroute = ({children}) => {
    const {user,isloading} = useAuth();

    const location = useLocation()

    if(isloading)
        {
            return <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
            </div>
        }
    if(user.email)
        {
            return children;
        }
    return <Navigate to="/login" state={{from: location}} />
};

export default Privateroute;