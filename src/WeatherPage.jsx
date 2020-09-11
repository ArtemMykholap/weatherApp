import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class WeatherPage extends Component {

    state = {
        temp: undefined,
        feels_like: undefined,
        clouds: undefined,
        name: undefined
    }

    componentDidMount() {
        this.getWeather();
    }

    logoutHandler = () => {
        localStorage.removeItem('token');
        this.props.history.push('/login');
    }

    getWeather = async (e) => {
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&appid=7d95edd951366cb58ffa02a3e995ed3a&units=metric`);
        const data = await api_url.json();
        this.setState({
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            name: data.name
        });
    }

    render() {
        return (
            <>
                <div className="weather__info" >
                    <span className="info first">My City: {this.state.name} </span>
                    <span className='info'>Temperature: {this.state.temp} ℃</span>
                    <span className='info'>Feels Like: {this.state.feels_like} ℃</span>
                </div>
                <button className='logout' onClick={this.logoutHandler}>Log out</button>
            </>
        )
    }
}

export default withRouter(WeatherPage);
