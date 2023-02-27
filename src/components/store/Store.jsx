import React, { Component } from 'react'
import { userData, majorStateComponents, accounts } from '../vanillaJS/stateOrganizer'

import '../store/Store.module.css'
import Welcome from '../welcome/Welcome'

class Store extends Component {
  state = {
    page: 'Welcome',
    account: '',
    userData,
  }

  changeState = (name, state) => {
      this.setState({
      [name]: state,
    })
  }

  changeSubState = (name, sub, state) => {
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        [sub]: state,
      },
    }))
  }

  resetState = () => {
    this.setState({
      
    })
  }

    updateEmail = (state) => this.changeSubState('userData', 'email', state )

    render() {

      return(
      
      <div className="storeWrapper">
        <Welcome />
        
          {/* <Banner 
          updateEmail={this.updateEmail}
          />  */}
          {/* <Pages />             */}
      </div>
      )
    }
}

export default Store
    
