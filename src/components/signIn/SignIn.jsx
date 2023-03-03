import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import style from '../welcome/Welcome.module.css'
import { defaultUser } from '../store/Store'
// import { testLogger } from '../vanillaJS/stateOrganizer'

import witness from './witness.png'

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
    updatePage = (state) => this.props.updatePage(state)

    validateFields = (type, value) => {
        const localState = this.state
        let isValidated = false
        if (localState.email == defaultUser.email 
            && localState.password == defaultUser.password
            ) 
            {
                this.globalEmail(this.state.email)
                this.globalPassword(this.state.password)       
                this.updatePage('Cart')
            }  
        return localState
    }

    localLogger = () => testLogger() // testing importing functions
    exploringDefaultUser = () => {
        // const { email, password, firstName } = defaultUser
        console.log(defaultUser.email  );
        const globalState = this.props.info.info
        console.log(globalState.page )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateFields()

        // console.log(testLogger());
        // this.localLogger()//functional and works
        // this.localValidation()
        // this.exploringDefaultUser()

        
    }

    render() {
       const witnessIcon = <img src={witness} className="passwordIcon"></img>

        const inputData = [
            { type: "text", label: "email", name: 'email', error: 'it broke', },
            { type: "password", label: "password", name: 'password', error: 'it broke', },
        ]
        const { info: { email, password } } = this.props
        const globalState = this.props
        
        
        return (
            <form>
                <div className='container'>
                    <h2>Sign In</h2>

                    {inputData.length
                        ?
                        inputData.map((item, index) => (
                            <label key={index} htmlFor="" >

                                <div className={style.inputWrapper}>
                                <InputBase
                                    type={item.type}
                                    onChange={this.localChange}
                                    autoComplete='off'
                                    placeholder={item.label}
                                    name={item.name}
                                    error={item.error}
                                    />
                                </div>
                            </label>
                        ))
                        : null
                    }
                    
                    {witnessIcon}
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