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

    onClick = ({ target:{ name, value, id}}) => {
        console.log(name, value, id);
        this.setState({
            selected: id,
        })
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
                {this.state.selected === 'signUp' ? <SignUp /> : null}
                {this.state.selected === 'signIn' ? <SignIn /> : null}
            </div>
        )
    }
}



export default Welcome