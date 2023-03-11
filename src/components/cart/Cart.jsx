import React from "react"
import styles from './Cart.Module.css'

class Cart extends React.Component {
    state = {
        totalPrice: 0, 
    }

    render() {
        return(
            <div className='container'>
            
                <div className={styles.cartProgress}>//CART//shipping//payment//confirmation</div>
                <div className={styles.mainCart}>
                    <div className={styles.storeItems}>
                        <div className={styles.item}>brick</div>
                        <div className={styles.item}>mortar</div>
                    </div>
                    <div className={styles.cartSummary}>
                        ${this.state.totalPrice}
                    </div>
                </div>
        
            </div>
        )
    }
}

export default Cart