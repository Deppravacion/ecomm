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
        errorDuplicateUser: false,           
        errorEmail: false,
        errorPassword: false,
        errorPasswordCheck: false,
        errorEmpty: false,
        errorFirstName: false, 
        errorLastName: false, 
        errorZip: false, 
        // 
        eye: false, 
        email: '', 
        password: '',
        passwordCheck: '',
        firstName: '', 
        lastName: '', 
        street: '',
        city: '',
        state: '', 
        zip: '',   
    }
    
    updatePage = (state) => this.props.updatePage(state)
    addUserToUserAccounts = (user) => { this.props.addUserToUserAccounts(user)}    
    eyeBlink = () => this.setState({ eye: this.state.eye ? false : true })
    
    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        },)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validateSignUp()
    }

    validateSignUp = () => {
        const {info} = this.props
        let globalState = info.info
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        const lettersRegex = /^[a-zA-Z]+$/
        const numbersRegex = /^[0-9]+$/
        
        for ( const account of globalState.userAccounts) {
            if (this.state.email == account.email) { 
                return this.setState({errorDuplicateUser: true})
            } else if (this.state.email != account.email) {
                this.setState({errorDuplicateUser: false})
            }
        }

        if (!emailRegex.test(this.state.email)) { 
            return this.setState({errorEmail: true})
        } else if (emailRegex.test(this.state.email)) {
            this.setState({errorEmail: false})
        }

        if (this.state.password != this.state.passwordCheck) {
            return this.setState({errorPasswordCheck: true})
        } else if (this.state.password == this.state.passwordCheck) {
            this.setState({errorPasswordCheck: false})
        }
        
        if (!lettersRegex.test(this.state.firstName)) { 
            return this.setState({errorFirstName: true})
        } else if (lettersRegex.test(this.state.firstName)) {
            this.setState({errorFirstName: false})
        }

        if (!lettersRegex.test(this.state.lastName)) { 
            return this.setState({errorLastName: true})
        } else if (lettersRegex.test(this.state.lastName)) {
            this.setState({errorLastName: false})
        }

        if (!numbersRegex.test(this.state.zip)) { 
            return this.setState({errorZip: true})
        } else if (numbersRegex.test(this.state.zip)) {
            this.setState({errorZip: false})
        }
        
        this.completeSignUp()
    }

    completeSignUp = () => {
        let newUser = {
            email: this.state.email,
            password: this.state.password, 
            firstName: this.state.firstName, 
            lastName: this.state.lastName,
            street: this.state.street, 
            city: this.state.city, 
            state: this.state.state,
            zip: this.state.zip,
            cartItems: [],
            payment: {},
            promo: '',        
        }     
        this.addUserToUserAccounts(newUser)
        this.updatePage('Cart')     
    }

    render() {
        
        //icon images
        const witnessIcon = <div  className={style.iconWrapper} onClick={this.eyeBlink}><img id='witness' src={witness} ></img></div> 
        const hideIcon = <div className={style.iconWrapper} onClick={this.eyeBlink}><img id='hide' src={hide} ></img></div> 
        const mailIcon = <div className={style.iconWrapper}><img id='mail' src={mail} ></img></div> 
        const streetIcon = <div className={style.iconWrapper}><img id='street' src={street} ></img></div> 
        const textIcon = <div className={style.iconWrapper}><img id='textIcon' src={textOnly} ></img></div> 
        const cityIcon = <div className={style.iconWrapper}><img id='city' src={city} ></img></div> 
        const usaIcon = <div className={style.iconWrapper}><img id='usa' src={usa} ></img></div> 
        const numbersIcon = <div className={style.iconWrapper}><img id='numbers' src={numbers} ></img></div> 
        //error snippets
        const errorDuplicateUser = <div className={style.errorText}>the user already exists please sign.In</div>
        const errorEmail = <div className={style.errorText}>correct e.mail format please</div>
        const errorLetter = <div className={style.errorText}>only letters please</div>
        const errorNumber = <div className={style.errorText}>only munbers please</div>
        const errorPasswordCheck = <div className={style.errorText}>passwords must match</div>

        const inputData = [
            { id: "emailField", type: "text", label: "email", name: 'email', error: this.state.errorEmail ? errorEmail : null 
            || this.state.errorDuplicateUser ? errorDuplicateUser : null, icon: mailIcon},
            { id: "passwordField", type: this.state.eye ? 'text' : 'password', label: "password", name: 'password', error: this.state.errorPassword ? 'error' : null, icon: this.state.eye ? witnessIcon : hideIcon},
            { id: "passwordFieldCheck", type: this.state.eye ? 'text' : 'password', label: "re.Enter password", name: 'passwordCheck', error: this.state.errorPasswordCheck ? errorPasswordCheck : null, icon: this.state.eye ? witnessIcon : hideIcon},
            { id: "firstNameField", type: "text", label: "first.Name", name: 'firstName', error: this.state.errorFirstName ? errorLetter : null, icon: textIcon},
            { id: "lastNameField", type: "text", label: "last.Name", name: 'lastName', error: this.state.errorLastName ? errorLetter : null, icon: textIcon},

            { id: "streetField", type: "text", label: "street", name: 'street', error: this.state.errorEmpty ? 'nameERR' : null, icon: streetIcon},
            { id: "cityField", type: "text", label: "city", name: 'city', error: this.state.errorEmpty ? 'nameERR' : null, icon: cityIcon},
            { id: "usaField", type: "text", label: "state", name: 'state', error: this.state.errorEmpty ? 'nameERR' : null, icon: usaIcon},
            { id: "zipField", type: "text", label: "zip", name: 'zip', error: this.state.errorZip ? errorNumber : null, icon: numbersIcon},
        ]

        return(
            <form>
                <div className='container'>
                    <h2>welcome</h2>

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
                    <div className={style.socialButton}>
                        <button 
                            onClick={(e)=>{e.preventDefault()
                            alert(`we don't do that actaully`)
                            }}
                        >
                        face.Booo
                        </button> 
                    </div>
                </div>
            </form>
        )
    }
}
export default SignUp