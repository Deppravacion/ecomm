import React from 'react'
import './App.css'
import { Cart } from './components/cart/Cart'
import Welcome from './components/welcome/Welcome'

class App extends React.Component {

  state = {
    renderPage: 'welcome',
    membership: '',
    userName: '',
    userPassword: '',
    isLoggedIn: '',
    readyToship: '',
    hasPaid: '',
  }

  switchPage = (value) => {
    this.setState({ 
      renderPage: value
    })
  }



  render() {

    return(
      <div>
       
        {this.state.renderPage =='welcome' &&  <Welcome info={this.state} />}
        {this.state.renderPage =='signIn' &&  <SingIn />}
        {this.state.renderPage =='signUp' &&  <SignUp />}
        {this.state.renderPage =='cart' &&  <Cart />}
        {this.state.renderPage =='checkout' &&  <Checkout />}
        {this.state.renderPage =='confirmation' &&  <Confirmation />}
      </div>
    )

  }

}
export default App
