import React from 'react';

const CityEdit = ({ cityName, onChange, onBlur }) => {
    return (
        <input 
            className="city-edit"
            type="text"
            value={cityName}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}


export default CityEdit;