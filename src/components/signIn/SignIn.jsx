import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import './SignIn.css'




class SignIn extends React.Component {

    state = {

    }

    render() {
        const inputData = [
            { type: "text", label: "email", name: 'userEmail', error: 'it broke' },
            { type: "text", label: "password", name: 'userPassword', error: 'it broke' }
        ]

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
                                    value={inputData && inputData[item.name]}
                                    // onChange={this.onChange}
                                    autoComplete='off'
                                    placeholder={item.label}
                                    name={item.name}
                                    error={item.error}
                                // onBlur={this.onBlur}
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