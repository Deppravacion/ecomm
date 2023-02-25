import React, { Component } from 'react'
import styles from './Banner.module.css'
import Welcome from '../welcome/Welcome'
class Banner extends Component {

    render() {
        return(            
            <div className={`  ${styles.bannerWrapper}`}>
                <Welcome 
                    updateEmail={this.props.updateEmail}
                />
            </div>            
        )
    }
}

export default Banner