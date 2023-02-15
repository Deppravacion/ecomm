import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome'

class App extends React.Component {

  state = {
    chooseLogIn: '',
  }



  render() {


    return(
      <div>
        <Welcome />
      </div>
    )

  }



}
export default App
