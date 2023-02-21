import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import './SignIn.module.css'




class SignIn extends React.Component {



    render() {
        const inputData = [
            { type: "text", label: "username", name: 'userName', error: 'it broke' },
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
                                    // value={inputData && inputData[item.name]}
                                    // onChange={this.props.onChangeInput}
                                    // onChange={() => this.props.handleChange}
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