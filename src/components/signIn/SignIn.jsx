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

    eyeBlink = (e) => {
        //target the id and set a case to flip it
        console.log(`do we blink? ${e.target.id}`)
        let icon = document.getElementById(e.target.id) // targeting the <img id: />
        let field = document.getElementById( e.target.parentNode.previousSibling.id)

        //i need to grab the input field for the password
        if (icon.id == 'witness') {
            //change the type to 'text
            console.log(`show me stuff`);
            field.type = 'text'
            // field.icon = 'hideIcon'
            return       
        }
        if (icon.id == 'hide' ) {
            //change type to password
            console.log(`hide the things`);
            field.type = 'password'
            // field.icon ='witnessIcon'
            return
        }
    }


    render() {
       const witnessIcon = <div  className={style.iconWrapper} onClick={this.eyeBlink}><img id='witness' src={witness} ></img></div> 
       const hideIcon = <div className={style.iconWrapper} onClick={this.eyeBlink}><img id='hide' src={hide} ></img></div> 
       const mailIcon = <div className={style.iconWrapper}><img id='mail' src={mail} ></img></div> 


        const inputData = [
            { id: "emailField", type: "text", label: "email", name: 'email', error: 'it broke', icon: mailIcon},
            { id: "passwordField", type: "password", label: "password", name: 'password', error: 'it broke', icon: witnessIcon},
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