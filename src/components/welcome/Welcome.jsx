import React, { Component } from "react";
import './Welcome.module.css'
import SignUp from '../signUp/SignUp'
import SignIn from '../signIn/SignIn'

class Welcome extends React.Component {
    state = {
        membership: '',
      }


    handleChange({ target: {name, value}} ) {
        this.setState((prevState) => ({
        ...prevState, 
          [name]: value
        }))
    
    }

    onChangeInput = ({target: {name, value}}) => {
        console.log(`onChange log `);
        switch(name) {
          case 'userName':
    
          this.setState((prevState) => ({
            ...prevState.userName,
            userName: value,
          }))
          break
        }
      }
      

    onClick = ({ target:{ id }}) => {
        this.setState((prevState) => ({
            ...prevState.membership, 
            membership: id,
        }))    
    }

    // onChange = ({ target: {value, name}}) => {

    // }


    render() {
        
       const onChangeInput =  this.props
       const {...state} = this.props
        return(
            <div className="welcomeWrapper">
                <h1> Welcome  </h1>
                <div className="radioWrapper">
                    <input id="signUp" type="radio" name="memberGroup" onClick={this.onClick} />
                    <label htmlFor="signUp"> Sign Up</label>
                    <input id="signIn" type="radio" name="memberGroup" onClick={this.onClick} />
                    <label htmlFor="signIn"> Sign In</label>

                </div>
                {this.state.membership === 'signUp' && <SignUp />}
                {this.state.membership === 'signIn' && <SignIn info={state} onChange={this.handleChange} />}
            </div>
        )
    }
}



export default Welcome