import React from "react";
import './Welcome.css'
import SignUp from '../signUp/SignUp'
import SignIn from '../signIn/SignIn'

class Welcome extends React.Component {
    state = {
        selected: '',
      }


    // handleChange({ target: {name, value}} ) {
    //     this.setState((prevState) => ({
    //     ...prevState, 
    //       [name]: value
    //     }))
    
    // }

    onClick = ({ target:{ id }}) => {
        this.setState((prevState) => ({
            ...prevState.selected, 
            selected: id,
        }))    
    }

    onChange = ({ target: {value, name}}) => {

    }
    render() {

        return(
            <div className="welcomeWrapper">
                <h1> Welcome Guest </h1>
                <div className="radioWrapper">
                    <input id="signUp" type="radio" name="memberGroup" onClick={this.onClick} />
                    <label htmlFor="signUp"> Sign Up</label>
                    <input id="signIn" type="radio" name="memberGroup" onClick={this.onClick} />
                    <label htmlFor="signIn"> Sign In</label>

                </div>
                {this.state.selected === 'signUp' && <SignUp />}
                {this.state.selected === 'signIn' && <SignIn info={this.state} />}
            </div>
        )
    }
}



export default Welcome