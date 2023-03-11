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

  onClick = ({target:{id}}) => {
    this.setState({membership: id})
  }

  render() {        
    const {...state} = this.props
    return(
      <div className={styles.welcomeWrapper}>
        <h1> e.Market </h1>
        <div className={styles.radioWrapper}>
        <div>
          <input id="signUp" type="radio" name="radbutton" onClick={this.onClick} />
          <label htmlFor="signUp"> sign.Up</label>
        </div>
        <div>
          <input id="signIn" type="radio" name="radbutton" onClick={this.onClick} />
          <label htmlFor="signIn"> sign.In</label>
        </div>          

      </div>
      {this.state.membership === 'signUp' && <SignUp 
        info={state} 
        onChange={this.handleChange}
        updatePage={this.props.updatePage}
        addUserToUserAccounts={this.props.addUserToUserAccounts}
      />}
      
      {this.state.membership === 'signIn' && <SignIn 
        info={state} 
        onChange={this.handleChange}
        updatePage={this.props.updatePage}
      />}
      </div>
    )
  }
}



export default Welcome