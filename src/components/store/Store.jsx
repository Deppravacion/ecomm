import React, { Component } from 'react'

import '../store/Store.module.css'
import Welcome from '../welcome/Welcome'
import { Cart } from '../cart/Cart'




class Store extends Component {
  state = {
    page: 'Welcome',
    email: '', 
    password: '', 
    firstName: '', 
    lastName: '',    
    street: '', 
    city: '', 
    state: '',
    zip: '',
    cartItems: [],
    payment: {},


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

    updateEmail = (state) => this.changeSubState('initUser', 'email', state )

    render() {
      const { page } = this.state
      return(
      
      <div className="storeWrapper">
        {/* <Welcome /> */}
        { page == 'Welcome' && <Welcome 
        info={this.state}
        
        /> }
        { page == 'Cart' && <Cart /> }
        { page == 'Shipping' && <Welcome /> }
        { page == 'Payment' && <Welcome /> }
        { page == 'Confirmation' && <Welcome /> }

      </div>
      )
    }
}

export default Store
    
