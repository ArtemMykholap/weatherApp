import React, { Component } from 'react';
import LoginPage from './LoginPage';
import WeatherPage from './WeatherPage';
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {

    state = {
        temp: undefined,
        feels_like: undefined,
        clouds: undefined,
        name: undefined
    }

    render() {
        const { history } = this.props;
        return (
            <>
                <Switch>
                    <Route  history={history} path='/login' component={LoginPage} />
                    <ProtectedRoute history={history} path='/weather' component={WeatherPage}/>
                    <Redirect from='/' to='/login' />
                </Switch>
            </>
        )
    }
}

export default withRouter(App);
