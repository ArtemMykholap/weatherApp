import React, { Component } from 'react';


const initialState = {
    login: '',
    pass: '',
    errorLogin: '',
    errorPass: ''
}


class Form extends Component {
    state = {
        login: '',
        pass: '',
        errorLogin: '',
        errorPass: ''
    }

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
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
            errorLogin = 'min 6 symbols /max 100 symbols'
        }
        if (this.state.pass.length < 6  || this.state.pass.length > 100) {
            errorPass = 'min 6 symbols /max 100 symbols'
        }
        if (errorLogin || errorPass) {
            this.setState({ errorLogin, errorPass });
            return false;
        }
        return true
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(this.props.getWeather())
        }
    }

    render() {

        return (
            <>
                <div id="container">
                    <h1>Log In</h1>
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
export default Form