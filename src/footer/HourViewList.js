import React from 'react';
import HourView from './HourView';

const HourViewList = (props) => {
    const views = props.data.map( (view, index) => {
        return (
            <HourView 
                id={view.weather[0].id}
                temp={view.temp} 
                time={view["dt_txt"]}
                key={index} 
            />
        );
    });

    return views;
}

export default HourViewList;