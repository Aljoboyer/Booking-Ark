import React, { createContext } from 'react';
import FindHotels from '../Pages/Userpages/UserHooks/Userhooks';

export const Authcontext = createContext()
const Authprovider = ({children}) => {
    // const allcontext = FindHotels()
    return (
        <Authcontext.Provider >
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;