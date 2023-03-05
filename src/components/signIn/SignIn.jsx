import React from 'react'
import { InputBase } from '../inputBase/InputBase'
import style from '../welcome/Welcome.module.css'
import { defaultUser } from '../store/Store'
// import { testLogger } from '../vanillaJS/stateOrganizer'

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
    

    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        })
    }
    
    globalEmail = (state) => this.props.updateEmail(state)
    globalPassword = (state) => this.props.updatePassword(state)
    updatePage = (state) => this.props.updatePage(state)

    doesAccountExist = (user) => {        
        for (let i = 0; i < userList.length; i++ ) {
            if (userList[i].email == user) { 
                console.log(`were here looking in the userList and found a valid user`);
                return true
            }
            return false
        }
    }

    validateLogIn = () => {
        //refactor this to use a parameter for the user
        this.doesAccountExist(this.state.email)
        if (this.state.email != defaultUser.email) { this.setState({ errorEmail: true, }) }
        if (this.state.password != defaultUser.password) { this.setState({ errorPassword: true, }) }
        if (this.state.email == defaultUser.email && this.state.password == defaultUser.password) {
            this.globalEmail(this.state.email)
            this.globalPassword(this.state.password)       
            this.updatePage('Cart')   
        } 


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
        //place valication methods to cover the jazz
        this.validateLogIn()       
    }

    eyeBlink = () => this.setState({ eye: this.state.eye ? false : true })


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
                                    id={item.id}
                                    type={item.type}
                                    onChange={this.localChange}
                                    autoComplete='off'
                                    placeholder={item.label}
                                    name={item.name}
                                    error={item.error}
                                    // icon={item.icon}
                                    />
                                {item.icon}
                                </div>
                                {item.error}
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