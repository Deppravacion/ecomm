import React from "react"
import style from './Cart.module.css'
import altbrick from '../../assets/altbrick.png'
import build   from '../../assets/build.png'
import { InputBase } from "../inputBase/InputBase"

class Cart extends React.Component {
    state = {
        totalPrice: 0, 
    }

    render() {
        const brickIcon = <div className={style.imgWrapper}><img src={altbrick} /></div>
        const buildIcon = <div className={style.imgWrapper}><img src={build} /></div>
        return(
            <div className='container'>
            
                <div className={style.cartProgress}>//CART//shipping//payment//confirmation</div>
                <h2>e.Market</h2>
                <div className={style.mainCart}>

                    <div className={style.storeItems}>
                        <div className={style.item}>
                            brick
                            {brickIcon}
                            <div className={style.qtyInput}>
                                enter qty
                            </div>
                        </div>
          
                        <div className={style.item}>
                            mortar
                            {buildIcon}
                            <div className={style.qtyInput}>
                                <InputBase 
                                    // id={}
                                    onChange={this.localChange}
                                    placeholder="qty"
                                    name="mortar"
                                />
                                <div>$10 each / 80-lb bags</div>
                                
                            </div>
                            <button className={style.addButton}>add</button>
                        </div>
                    </div>

                    <div className={style.cartSummary}>
                        <h5>your cart totals</h5>
                        <div className={style.total}>
                        ${this.state.totalPrice}                            
                        </div>
                    </div>
                </div>
                <div className={style.proceedButton}></div>

                
        
            </div>
        )
    }
}

export default Cart