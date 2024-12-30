import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Context 생성
export const IPContext = createContext();

export const IPProvider  = ({children}) => {
    const [ip, setIP] = useState('10.150.150.105:3000');
    return(
        <IPContext.Provider value={{ ip, setIP }} >
            {children}
        </IPContext.Provider>
    )
}

IPProvider.propTypes = {
    children: PropTypes.node.isRequired,
};