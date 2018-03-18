import React from 'react';
import { getIconImage } from '../DataHelper';

const Icon = ({ id }) =>  {
    return <i className={getIconImage(id)}></i>
}

export default Icon;