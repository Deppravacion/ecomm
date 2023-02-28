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


    testChange = ({ target: {name, value }}) => {
        this.setState((preState) => ({
            ...preState.email, 
            email: value,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //validate the email/password to the defaultuser
        //use the prop drilled methods from Store to update global state
    }

    render() {
        const inputData = [
            { type: "text", label: "email", name: 'email', error: 'it broke' },
            { type: "text", label: "password", name: 'userPassword', error: 'it broke' },
            { type: "submit", label: "submit", name: 'submit', error: 'it broke' }
        ]
        const { info: { email, password } } = this.props


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
                                    onChange={this.testChange}
                                    autoComplete='off'
                                    placeholder={item.label}
                                    name={item.name}
                                    error={item.error}
                                />
                            </label>
                        ))
                        : null
                    }

                </div>
            </form>

        )
    }
}
export default SignIn