import React, { Component } from 'react';
import Form from './Form';
import Weather from './Weather';



class App extends Component {

    state = {
        temp: undefined,
        feels_like: undefined,
        clouds: undefined,
        name: undefined

    }


    getWeather = async (e) => {
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&appid=26e1f90fef4f24b668a3ee9669a5d7ce&units=metric`)
        const data = await api_url.json()
        console.log(data)
        
        this.setState({
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            name: data.name
        })
    }
    render() {
        return (
            <>
                <Form getWeather={this.getWeather} />
                <Weather
                    temp={this.state.temp}
                    feels_like={this.state.feels_like}
                    name={this.state.name} />
            </>
        )
    }
}
export default App