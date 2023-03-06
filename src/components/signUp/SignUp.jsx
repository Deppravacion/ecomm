import React from "react";
import { InputBase } from '../inputBase/InputBase'
import style from '../welcome/Welcome.module.css'
import witness from '../../assets/witness.png'
import hide from '../../assets/hide.png'
import mail from '../../assets/mail.png'
import city from '../../assets/city.png'
import numbers from '../../assets/numbers.png'
import usa from '../../assets/usa.png'
import textOnly from '../../assets/textOnly.png'
import street from '../../assets/street.png'

class SignUp extends React.Component {

    state = {
        email: '', 
        password: '',
        passwordCheck: '',
        errorDuplicateUser: false,           
        errorEmail: false,
        errorPassword: false,
        errorPasswordCheck: false,
        errorEmpty: false,
        errorFirstName: false, 
        errorLastName: false, 
        errorZip: false, 
        eye: true, 
    }

    updatePage = (state) => this.props.updatePage(state)

    eyeBlink = () => this.setState({ eye: this.state.eye ? false : true })

    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        })
    }

        
    validateSignUp = () => {
        const {info} = this.props
        let globalState = info.info

        for ( const account of globalState.userAccounts) {
            //does user already exist
            if (this.state.email == account.email) { return this.setState({ errorDuplicateUser: true })}
            //validate email
            //
        }


    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateSignUp()
    }

    render() {
        const witnessIcon = <div  className={style.iconWrapper} onClick={this.eyeBlink}><img id='witness' src={witness} ></img></div> 
        const hideIcon = <div className={style.iconWrapper} onClick={this.eyeBlink}><img id='hide' src={hide} ></img></div> 
        const mailIcon = <div className={style.iconWrapper}><img id='mail' src={mail} ></img></div> 
        const streetIcon = <div className={style.iconWrapper}><img id='street' src={street} ></img></div> 
        const textIcon = <div className={style.iconWrapper}><img id='textIcon' src={textOnly} ></img></div> 
        const cityIcon = <div className={style.iconWrapper}><img id='city' src={city} ></img></div> 
        const usaIcon = <div className={style.iconWrapper}><img id='usa' src={usa} ></img></div> 
        const numbersIcon = <div className={style.iconWrapper}><img id='numbers' src={numbers} ></img></div> 

        const inputData = [
            { id: "emailField", type: "text", label: "email", name: 'email', error: this.state.errorEmail ? 'emailerror' : null, icon: mailIcon},
            { id: "passwordField", type: this.state.eye ? 'password' : 'text', label: "password", name: 'password', error: this.state.errorPassword ? 'error' : null, icon: this.state.eye ? witnessIcon : hideIcon},
            { id: "passwordFieldCheck", type: this.state.eye ? 'password' : 'text', label: "re.Enter password", name: 'passwordCheck', error: this.state.errorPasswordCheck ? 'error' : null, icon: this.state.eye ? witnessIcon : hideIcon},
            { id: "firstNameField", type: "text", label: "first.Name", name: 'firstName', error: this.state.errorFirstName ? 'nameErr' : null, icon: textIcon},
            { id: "lastNameField", type: "text", label: "last.Name", name: 'lastName', error: this.state.errorLastName ? 'nameERR' : null, icon: textIcon},

            { id: "streetField", type: "text", label: "street", name: 'street', error: this.state.errorEmpty ? 'nameERR' : null, icon: streetIcon},
            { id: "cityField", type: "text", label: "city", name: 'city', error: this.state.errorEmpty ? 'nameERR' : null, icon: cityIcon},
            { id: "usaField", type: "text", label: "state", name: 'state', error: this.state.errorEmpty ? 'nameERR' : null, icon: usaIcon},
            { id: "zipField", type: "text", label: "zip", name: 'zip', error: this.state.errorZip ? 'nameERR' : null, icon: numbersIcon},
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