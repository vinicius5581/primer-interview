import React from 'react';
import './Alert.css';

const Alert = ({msg, clear}) => (
    <div className="alert">
        <div>
            <button onClick={clear}>X</button>
            <h1>{msg}</h1>
        </div>        
    </div>  
);

export default Alert;