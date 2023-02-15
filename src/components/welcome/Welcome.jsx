import React from "react";

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

    onClick = ({ target:{ name, value, checked}}) => {
        console.log(name, value, checked);
        
    }

    render() {

        return(
            <div>
                <h1> Welcome G </h1>
                <div>Sign In or Create Account</div>
                <input type="radio" name="signUp" onClick={this.onClick} />
                <input type="radio" name="signIn" onClick={this.onClick} />
                {this.state.selected === 'signUp' ? <SignIn /> : <SignUp />}
                {/* {this.state === 'signUp' ? <SignUp /> : null} */}
            </div>
        )
    }
}



export default Welcome