import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import style from '../welcome/Welcome.module.css'
import { defaultUser } from '../store/Store'

import witness from '../../assets/witness.png'
import hide from '../../assets/hide.png'
import mail from '../../assets/mail.png'

class SignIn extends React.Component {
    state = {
        email: '', 
        password: '',
        errorEmail: false,
        errorPassword: false,
        eye: true, 
    }    
    
    globalEmail = (state) => this.props.updateEmail(state)
    globalPassword = (state) => this.props.updatePassword(state)
    updatePage = (state) => this.props.updatePage(state)

    eyeBlink = () => this.setState({ eye: this.state.eye ? false : true })

    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        })
    }
    
    
    validateLogIn = () => {
        const {info} = this.props
        let globalState = info.info

        for (const account of globalState.userAccounts) {
            if (this.state.email != account.email) { this.setState({ errorEmail: true })}
            if (this.state.password != account.password) { this.setState({ errorPassword: true, }) }
            if (this.state.email == account.email && this.state.password == account.password) { this.updatePage('Cart')} 
        }  
    }
    
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.validateLogIn()       
    }
    
    
    render() {
        const witnessIcon = <div  className={style.iconWrapper} onClick={this.eyeBlink}><img id='witness' src={witness} ></img></div> 
        const hideIcon = <div className={style.iconWrapper} onClick={this.eyeBlink}><img id='hide' src={hide} ></img></div> 
        const mailIcon = <div className={style.iconWrapper}><img id='mail' src={mail} ></img></div> 
        const errorEmailMessage = <div className={style.errorText}>enter the correct email </div>
        const errorPasswordMessage = <div className={style.errorText}>enter the correct password </div>
        
        
        const inputData = [
            { id: "emailField", type: "text", label: "email", name: 'email', error: this.state.errorEmail ? errorEmailMessage : null, icon: mailIcon},
            { id: "passwordField", type: this.state.eye ? 'password' : 'text', label: "password", name: 'password', error: this.state.errorPassword ? errorPasswordMessage : null, icon: this.state.eye ? witnessIcon : hideIcon},
        ]
        // const { info: { email, password } } = this.props
        // const globalState = this.props
        
        
        return (
            <form>
                <div className='container'>
                    <h2>welcome back</h2>

                    {inputData.length
                        ?
                        inputData.map((item, index) => (
                            <label key={index} htmlFor="" >

                                <div className={style.inputWrapper}>
                                <InputBase
                                    id={item.id}
                                    type={item.type}
                                    onChange={this.localChange}
                                    autoComplete='off'
                                    placeholder={item.label}
                                    name={item.name}
                                    error={item.error}
                             
                                    />
                                {item.icon}
                                </div>
                                {item.error}
                            </label>
                        ))
                        : null
                    }
                    <div className='container'>
                        <button 
                        onClick={this.handleSubmit}
                        >
                        enter
                        </button> 
                    </div>
                </div>
            </form>

        )
    }
}
export default SignIn