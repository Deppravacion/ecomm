import React, { Component } from 'react'
import { userData, majorStateComponents, paymentData } from '../vanillaJS/stateOrganizer'
import Banner from '../banner/Banner'
import Pages from '../pages/Pages'

class Store extends Component {
    state = {
        userData, 
        majorStateComponents, 
        paymentData
    }

    render() {

        return(
            <>
            <Banner /> 
            <Pages />
            </>
        )
    }
}

export default Store
    
