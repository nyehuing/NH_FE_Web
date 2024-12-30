import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Context 생성
export const IPContext = createContext();

export const IPProvider  = ({children}) => {
    const [ip, setIP] = useState('nh-7d9d.onrender.com');
    return(
        <IPContext.Provider value={{ ip, setIP }} >
            {children}
        </IPContext.Provider>
    )
}

IPProvider.propTypes = {
    children: PropTypes.node.isRequired,
};