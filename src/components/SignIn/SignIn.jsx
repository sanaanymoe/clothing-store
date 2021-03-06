import React from 'react';

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'

import './SignIn.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({[name]: value })
    }

    render() {
        return (
          <div className="sign-in">
            <h2>I already have an account </h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handelSubmit}>
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
              />

              <CustomButton type="submit"> Sign In </CustomButton>
            </form>
          </div>
        );
    }
}

export default SignIn;