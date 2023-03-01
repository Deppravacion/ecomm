import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import './SignIn.module.css'


class SignIn extends React.Component {
    state = {
        email: '', 
        password: '',

    }

    
    
    // onInputChange = ({ target: { name, value } }) => {
        //     switch (name) {
    //         case 'email':
    //             this.setState((prevState) => ({
    //                 ...prevState.email,
    //                 email: value,
    //             }))
    //             break
    //         default:
    //             console.log(`sorry you broke it`);
    //     }
    // }


    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        })
    }
    
    globalEmail = (state) => this.props.updateEmail(state)
    globalPassword = (state) => this.props.updatePassword(state)

    handleSubmit = (e) => {
        e.preventDefault()
        //validate the email/password to the defaultuser
        //use the prop drilled methods from Store to update global state

 
        this.globalEmail(this.state.email)
        this.globalPassword(this.state.password)
    }

    render() {
        const inputData = [
            { type: "text", label: "email", name: 'email', error: 'it broke' },
            { type: "text", label: "password", name: 'password', error: 'it broke' },
        ]
        const { info: { email, password } } = this.props
        const globalState = this.props
        
        
        return (
            <form>
                <div className="inputWrapper">
                    <h2>Sign In</h2>

                    {inputData.length
                        ?
                        inputData.map((item, index) => (
                            <label key={index} htmlFor="" >
                                <InputBase
                                    type={item.type}
                                    // onChange={this.props.onChangeInput}
                                    // onChange={() => this.props.handleChange}
                                    // onChange={this.onInputChange}
                                    onChange={this.localChange}
                                    autoComplete='off'
                                    placeholder={item.label}
                                    name={item.name}
                                    error={item.error}
                                />
                            </label>
                        ))
                        : null
                    }
                    <button 
                    onClick={this.handleSubmit}
                    >
                    enter
                    </button> 
                </div>
            </form>

        )
    }
}
export default SignIn