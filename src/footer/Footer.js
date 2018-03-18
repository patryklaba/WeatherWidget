import React from 'react';
import './Footer.css';
import HourViewList from './HourViewList';


const Footer = (props) => {
    return (
        <div className="footer-wrapper">
            <div className="footer-details-panel">
                <HourViewList data={props.data} />
            </div>
        </div>
    );
}


export default Footer;