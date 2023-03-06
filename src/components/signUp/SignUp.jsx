import React from "react";
import { InputBase } from '../inputBase/InputBase'
import style from '../welcome/Welcome.module.css'
import witness from '../../assets/witness.png'
import hide from '../../assets/hide.png'
import mail from '../../assets/mail.png'

class SignUp extends React.Component {

    state = {
        email: '', 
        password: '',
        passwordCheck: '',           
        errorEmail: false,
        errorPassword: false,
        errorPasswordCheck: 'false',
        errorName: 'false', 
        errorZip: 'false', 
        eye: true, 
    }

    updatePage = (state) => this.props.updatePage(state)

    eyeBlink = () => this.setState({ eye: this.state.eye ? false : true })

    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        })
    }

        
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const witnessIcon = <div  className={style.iconWrapper} onClick={this.eyeBlink}><img id='witness' src={witness} ></img></div> 
        const hideIcon = <div className={style.iconWrapper} onClick={this.eyeBlink}><img id='hide' src={hide} ></img></div> 
        const mailIcon = <div className={style.iconWrapper}><img id='mail' src={mail} ></img></div> 

        const inputData = [
            { id: "emailField", type: "text", label: "email", name: 'email', error: this.state.errorEmail ? 'emailerror' : null, icon: mailIcon},
            { id: "passwordField", type: this.state.eye ? 'password' : 'text', label: "password", name: 'password', error: this.state.errorPassword ? 'error' : null, icon: this.state.eye ? witnessIcon : hideIcon},
            { id: "passwordFieldCheck", type: this.state.eye ? 'password' : 'text', label: "re-enter password", name: 'passwordCheck', error: this.state.errorPasswordCheck ? 'error' : null, icon: this.state.eye ? witnessIcon : hideIcon},
            { id: "firstNameField", type: "text", label: "firstName", name: 'firstName', error: this.state.errorName ? 'nameErr' : null, icon: mailIcon},
            { id: "lastNameField", type: "text", label: "lastName", name: 'lastName', error: this.state.errorName ? 'nameERR' : null, icon: mailIcon},
        ]

        return(
<form>
                <div className='container'>
                    <h2>welcome to e.Market</h2>

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
export default SignUp