import React, { Component } from 'react'

import '../store/Store.module.css'
import Welcome from '../welcome/Welcome'
import Cart from '../cart/Cart'

class Store extends Component {
  state = {
    page: 'Welcome',
    userAccounts: [
      {
        email: 'default@estore.com', 
        password: 'Password123', 
        firstName: 'John', 
        lastName: 'Denver',    
        street: '2001 Blake St', 
        city: 'Denver', 
        state: 'CO',
        zip: '80205',
        cartItems: [],
        payment: {},
        promo: '',
      },
    ],

  }

  changeState = (name, state) => {
      this.setState({
      [name]: state,
    })
  }

  addUser = (user) => {
    this.setState({
      userAccounts: [...this.state.userAccounts, user]
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
    updatePage = (state) => this.changeState('page', state)

    addUserToUserAccounts = (user) => this.addUser(user)

    render() {
      const { page } = this.state
      return(
          
        <div className="storeWrapper">
        {/* <Welcome /> */}
        { page == 'Welcome' && <Welcome st
        info={this.state}
        updatePage={this.updatePage}
        addUserToUserAccounts={this.addUserToUserAccounts}


        
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
    
