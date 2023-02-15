import React from "react";

class Welcome extends React.Component {
    state = {
        chooseLogIn: '',
      }


    // handleChange({ target: {name, value}} ) {
    //     this.setState((prevState) => ({
    //     ...prevState, 
    //       [name]: value
    //     }))
    
    // }

    onClick = (e) => {
        e.target.name === 'signUp'
    }

    render() {

        return(
            <div>
                <h1> Welcome to the store </h1>
                <div>Sign In or Create Account</div>
                <input type="radio" name="signUp" onClick={this.onClick} />
                <input type="radio" name="signIn" onClick={this.onClick} />
            </div>
        )
    }
}



export default Welcome 