import React from 'react'
import './App.css'
import { Cart } from './components/cart/Cart'
import Welcome from './components/welcome/Welcome'

class App extends React.Component {

  state = {
    renderPage: 'welcome',
    membership: '',
    userName: '',
    // userPassword: '',
    // isLoggedIn: '',
    // readyToship: '',
    // hasPaid: '',
  }

  switchPage = (value) => {
    this.setState({ 
      renderPage: value
    })
  }

 


  render() {

    return(
       
      <div className="app-wrapper">
        {/* <Banner /> */}
        {/* <Store /> */}
        {this.state.renderPage == 'welcome' &&  <Welcome info={this.state} />}   
            
      </div>
    )

  }

}
export default App
