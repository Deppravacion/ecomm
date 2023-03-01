import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import './SignIn.module.css'
import { defaultUser } from '../store/Store'
import { validateFields, testLogger } from '../vanillaJS/stateOrganizer'


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

    // validateFields = (type, value) => {
    //     //switch statement to handle each input field


    //     const { email, password } = this.state
    //     console.log(` line 42 calls: email-${email} password-${password}`);
    //     console.log(`log the defaultUser import: ${globalEmail}, deets: ${lastName}`);
    //     switch (type) {
    //         case 'email':
    //             if (email == defaultUser.email ) { console.log(`holy mowly`)}
    //     } 
    // }

    localValidation = (type, value) => validateFields()
    localLogger = () => testLogger()

    handleSubmit = (e) => {
        e.preventDefault()
        //validate the email/password to the defaultuser
        //use the prop drilled methods from Store to update global state

        // this.localValidation(e.target.name, e.target.value)
        // console.log(testLogger());
        this.localLogger()
        this.localValidation()
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