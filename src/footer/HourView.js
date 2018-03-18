import React from 'react';
import Icon from '../header/Icon';

const HourView = (props) => {
    const time = props.time.slice(11,16);
    return (
        <div className="day-view">
            <div className="day-view-time">
                {time}
            </div>
            <div className="day-view-weather">
                <Icon id={props.id} />
            </div>
            <div className="day-view-date">{Math.floor(props.temp)}&deg;</div>
        </div>
    );
}

export default HourView;