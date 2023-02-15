import './App.css'
import './components/welcome/Welcome'





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
