import React, { Component } from 'react'

import '../store/Store.module.css'
import Welcome from '../welcome/Welcome'
import { Cart } from '../cart/Cart'


export const defaultUser = {
  email: 'default@estore.com', 
  password: 'Password123', 
  firstName: 'John', 
  lastName: 'Denver',    
  street: '2001 Blake St', 
  city: 'Denver', 
  state: 'CO',
  zip: '80205',
}

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

    updateEmail = (state) => this.changeState('email', state )
    updatePassword = (state) => this.changeState('password', state )

    render() {
      const { page } = this.state
      return(
      
      <div className="storeWrapper">
        {/* <Welcome /> */}
        { page == 'Welcome' && <Welcome st
        info={this.state}
        updateEmail={this.updateEmail}
        updatePassword={this.updatePassword}

        
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
    
