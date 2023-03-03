import React, { Component } from "react";
import styles from './Welcome.module.css'
import SignUp from '../signUp/SignUp'
import SignIn from '../signIn/SignIn'

class Welcome extends React.Component {
  //membership is local state. on submit will affect ( majorStateComponents: account:)
  state = {
    membership: '',

  }

  handleChange({ target: {name, value}} ) {
    this.setState((prevState) => ({
    ...prevState, 
      [name]: value
    }))
  
  }

  // onInputChange = ({target: {name, value}}) => {
  //   console.log(`onChange log `);
  //   switch(name) {
  //     case 'userName':

  //     this.setState((prevState) => ({
  //       ...prevState.userName,
  //       userName: value,
  //     }))
  //     break
  //   }
  // }
    
  
  onClick = ({ target:{ id }}) => {
    this.setState((prevState) => ({
        ...prevState.membership, 
        membership: id,
    }))    
  }



    render() {
        
       const onInputChange =  this.props
       const {...state} = this.props
        return(
            <div className={`${styles.welcomeWrapper}`}>
                <h1> e.Market </h1>
                <div className="radioWrapper">
                  <input id="signUp" type="radio" name="radbutton" onClick={this.onClick} />
                  <label htmlFor="signUp"> Sign Up</label>

                  <input id="signIn" type="radio" name="radbutton" onClick={this.onClick} />
                  <label htmlFor="signIn"> Sign In</label>

                </div>
                {this.state.membership === 'signUp' && <SignUp />}
                
                {this.state.membership === 'signIn' && <SignIn 
                info={state} 
                updatePage={this.props.updatePage}
                onChange={this.handleChange}
                updateEmail={this.props.updateEmail} 
                updatePassword={this.props.updatePassword} 
                />}
            </div>
        )
    }
}



export default Welcome