import React from 'react';


const City = ({cityName, onDouble }) => {
    return (
        <p 
            className="city"
            onDoubleClick={onDouble}
            onTouchEnd={onDouble}
        >
            {cityName}
        </p>
    );
}

export default City;