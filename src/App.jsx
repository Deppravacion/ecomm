import './App.css'
import './components/radButtons/RadButtons'



class App extends React.Component {

  state = {
    chooseLogIn: '',
  }

  handleChange({ target: {name, value}} ) {
    this.setState((prevState) => ({
      ...prevState, 
      [name]: value
    }))

  }

  render() {
    const radioData = [
      {
        title: "Sign In", 
        id: "signIn", 
        type: "radio", 
        name: "chooseLogIn", 
        value: "signIn"
      },
      {
        title: "Sign Up", 
        id: "signUp", 
        type: "radio", 
        name: "chooseLogIn", 
        value: "signUp"
      }
    ]

    return(
      <div>
        <h1>
        Welcome to the store
        </h1>
        <div>Sign In or continue as a Guest</div>
        {radioData.length 
        ? radioData.map((item, index) => (
          type={item.type}
          value={}
        )) 
        }
      </div>
    )

  }



}
export default App
