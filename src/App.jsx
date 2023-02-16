import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome'

class App extends React.Component {

  state = {
    chooseLogIn: '',
    isLoggedIn: '',
    readyToship: '',
    mofoPaid: '',
  }



  render() {

    return(
      <div>
        <Welcome />
        {/* {this.state.chooseLogIn == 'signIn' && console.log('klasdjflsadjf') } */}
        {/* {this.state.chooseLogIn == 'paid' && console.log('klasdjflsadjf') } */}
        {/* {this.state.chooseLogIn == 'signIn' && console.log('klasdjflsadjf') } */}
      </div>
    )

  }

}
export default App
