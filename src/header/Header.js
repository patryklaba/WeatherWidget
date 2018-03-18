import React, { Component } from 'react';
import './Header.css';
import Icon from './Icon';
import City from './City';
import CityEdit from './CityEdit';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }

        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleDoubleClick() {
        this.setState({
            edit: this.changeEditState()
        });
    }

    handleChange(e) {
        this.props.cityChange(e);
    }

    changeEditState() {
        return !this.state.edit;
    }

    handleBlur() {
        this.setState({
            edit: this.changeEditState()
        });
        this.props.updateWeatherData();
    }
    render() {
        let temperature = 0;
        let description = '';
        let icon = '';
        if(this.props.data) {
            const { temp , weather } = this.props.data;
            temperature = temp;
            description = weather[0].description;
            icon = weather[0].id;
        }
        return (
        <div className="header-wrapper" style={this.props.style}>
            <Icon id={icon}/>
            <p className="temperature">{Math.floor(temperature)}&deg;</p>
            {!this.state.edit ? 
                <City 
                    cityName={this.props.city}
                    onDouble={this.handleDoubleClick}/> :
                <CityEdit 
                    cityName={this.props.city}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                 />
            }
            <p className="weather-status">{description}</p>
        </div>
        );
    }
}


export default Header;