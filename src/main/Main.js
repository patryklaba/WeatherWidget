import React, { Component } from 'react';
import './Main.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            city: 'Rzeszów',
            data: [],
            imgPath: ''
        }
        this.handleCityChange = this.handleCityChange.bind(this);
        this.updateWeatherData = this.updateWeatherData.bind(this);
    }
    
    componentDidMount() {
        this.getWeatherData();
        this.getPlaceImage();
    }

    getWeatherData() {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&lang=pl&cnt=5&APPID=${process.env.REACT_APP_WEATHERMAP_API_KEY}`;
        
        fetch(apiUrl)
            .then( response => response.json())
            .then( data => this.storeWeatherData(data))
            .catch( error => console.log(error));
    }

    getPlaceImage() {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.city}&key=${process.env.REACT_APP_GOOGLEPLACE_API_KEY}`;
        fetch("https://cors-anywhere.herokuapp.com/"+apiUrl)
            .then(response => response.json())
            .then(data => this.storePlaceImgUrl(data))
            .catch(error => console.log(error));
    }

    storePlaceImgUrl(data) {
        const photoRef = data.results[0].photos[0].photo_reference;
        const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxheight=350&photoreference=${photoRef}&key=${process.env.REACT_APP_GOOGLEPLACE_API_KEY}`;
        this.setState({
            imgPath: imgUrl
        });
    }

    storeWeatherData(data) {
        const weather = data.list.map( item => {
            const { main, weather, dt_txt } = item;
            return {temp: main.temp, weather, dt_txt };
        });
        this.setState({ data: weather });
    }

    handleCityChange(e) {
        this.setState({
            city: e.target.value
        });
    }

    updateWeatherData() {
        this.getWeatherData();
        this.getPlaceImage();
    }

    

    render() {     
        const style = {
            background: `linear-gradient(135deg, rgba(92, 207, 249, 0.753) 0%,rgba(38, 9, 125, 0.85) 100%), url(${this.state.imgPath})`,
            backgroundSize: 'cover'
        } 
        return (<div className="widget-wrapper">
            <Header 
                    style={style}
                    city={this.state.city} 
                    data={this.state.data[0]}
                    cityChange={this.handleCityChange}
                    updateWeatherData={this.updateWeatherData}
            />
            <Footer data={this.state.data} />
        </div>)
        
    }
}

export default Main;