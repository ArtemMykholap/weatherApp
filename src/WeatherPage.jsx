import React,{Component} from 'react';


class Weather extends Component {
     
    state = {
        temp: undefined,
        feels_like: undefined,
        clouds: undefined,
        name: undefined
    }


    componentDidMount(){
        this.getWeather()
    }


    getWeather = async (e) => {
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&appid=26e1f90fef4f24b668a3ee9669a5d7ce&units=metric`)
        const data = await api_url.json()
        this.setState({
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            name: data.name
        })
    }

    render() {
        return (
            <>
                    <div className="weather__info" >
                        <span className="info first">My City: {this.state.name} </span>
                        <span className='info'>Temperature: {this.state.temp} ℃</span>
                        <span className='info'>Feels Like: {this.state.feels_like} ℃</span>
                    </div> 
            </>
        )
    }
}


export default Weather

