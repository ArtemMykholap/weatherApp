import React, { Component } from 'react';
import LoginPage from './LoginPage';
import WeatherPage from './WeatherPage';
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

class App extends Component {

    
    state = {
        temp: undefined,
        feels_like: undefined,
        clouds: undefined,
        name: undefined
    }

    render() {
        const { history } = this.props

        return (
            <>
                <Switch>
                    <Route history={history} path='/login' component={LoginPage} />
                    <Route history={history} path='/weather' component={WeatherPage}/>
                    <Redirect from='/' to='/login' />
                </Switch>
            </>
            // <>
            //     <Form getWeather={this.getWeather} />
            //     <Weather
            //         temp={this.state.temp}
            //         feels_like={this.state.feels_like}
            //         name={this.state.name} />
            // </>
        )
    }
}
export default withRouter(App)