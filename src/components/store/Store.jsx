import React, { Component } from 'react'
import { userData, majorStateComponents, paymentData } from '../vanillaJS/stateOrganizer'
import Banner from '../banner/Banner'
import Pages from '../pages/Pages'
import '../store/Store.module.css'

class Store extends Component {
    state = {
        userData, 
        majorStateComponents, 
        paymentData
    }


    changeState = (name, state) => {
        this.setState({
        [name]: state,
      })
    }

    changeSubState = (name, sub, state) => {
        this.setState((prevState) => ({
          [name]: {
            ...prevState[name],
            [sub]: state,
          },
        }))
    }

    resetState = () => {
        this.setState({
          message: '',
          submarine: {
            minDepth: '',
            maxDepth: ''
          }
        })
    }

    updateEmail = (state) => this.changeSubState('userData', 'email', state )

    render() {

        return(
        
        <div className="storeWrapper">
            <Banner 
            updateEmail={this.updateEmail}
            /> 
            {/* <Pages />             */}
        </div>
        )
    }
}

export default Store
    
