import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    state = {
        login: '',
        pass: '',
        errorLogin: '',
        errorPass: '',
        errorLoggedUser: '',
        users: []
    }

    async componentDidMount() {
        if (localStorage.getItem('token')
        ) {
            this.props.history.push('/weather');
        }
        const response = await fetch(`https://5f5b5ffb044570001674cd80.mockapi.io/api/v1/users`);
        const users = await response.json();
        this.setState({ users: users });
    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let errorLogin = '';
        let errorPass = '';
        if (this.state.login.length < 6 || this.state.login.length > 100) {
            errorLogin = 'min 6 symbols /max 100 symbols';
        }
        if (this.state.pass.length < 6 || this.state.pass.length > 100) {
            errorPass = 'min 6 symbols /max 100 symbols';
        }
        if (errorLogin || errorPass) {
            this.setState({ errorLogin, errorPass });
            return false;
        }
        return true;
    }

    checkLogged(login, pass) {
        let errorLoggedUser = '';
        const user = this.state.users.find(user => user.login === login && user.pass === pass);
        if (!user) {
            errorLoggedUser = 'User not found';
            this.setState({ errorLoggedUser });
            return ;
        }
        localStorage.setItem('token', 'fakeToken');
        return !!user;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate() && this.checkLogged(this.state.login, this.state.pass);
        if (isValid) {
            this.props.history.push('/weather');
        }
    }

    render() {
        return (
            <>
                <div id="container">
                    <h1>Log In</h1>
                    <div className='error' >{
                        this.state.errorLoggedUser}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="login"
                            name="login"
                            value={this.state.login}
                            onChange={this.handleChange}
                            placeholder="Login" />
                        <div className='error' >{
                            this.state.errorLogin}
                        </div>
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="pass"
                            placeholder="Password" />
                        <div className='error'>{
                            this.state.errorPass}
                        </div>
                        <button className='button-submit' type='submit' >Log in</button>
                    </form>
                </div>
            </>
        )
    }
}

export default withRouter(LoginPage);
