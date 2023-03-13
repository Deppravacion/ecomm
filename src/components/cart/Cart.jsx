import React from "react"
import style from './Cart.module.css'
import altbrick from '../../assets/altbrick.png'
import build   from '../../assets/build.png'
import { InputBase } from "../inputBase/InputBase"

class Cart extends React.Component {
    state = {
        totalPrice: 0, 
        subTotal: 0,
        promoTotal: 0,
        brickUnitPrice: Number(1.25),
        brickTotalPrice: 0,
        brickQuantity: 0,
        brickPlaceholder: '# of bricks?',
        brickError: false,
        mortarUnitPrice: Number(10.00),
        mortarTotalPrice: 0, 
        mortarQuantity: 0,
        mortarPlaceholder: '# of 80lb bags?',
        mortarError: false, 
    }

    localChange = ({ target: {name, value }}) => {
        this.setState({
            [name]: value,
        }, this.preCalc())
    }

    localReset = () => {
        this.setState({
            totalPrice: 0, 
            subTotal: 0,
            promoTotal: 0,
            brickQuantity: 0,
            brickTotalPrice: 0,
            mortarQuantity: 0,
            mortarTotalPrice: 0, 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    validateInput = () => {
        const numbersRegex = /^[0-9]+$/
        if (!numbersRegex.test(this.state.brickQuantity)) {
            return this.setState({brickError: true})
        } else if (numbersRegex.test(this.state.brickError)) {
            return this.setState({brickError: false})
        }

        if (!numbersRegex.test(this.state.mortarQuantity)) {
            return this.setState({mortarError: true})
        } else if (numbersRegex.test(this.state.mortarError)) {
            return this.setState({mortarError: false})
        }

    }

    preCalc = () => {
        const {subTotal, promoTotal, brickQuantity, mortarQuantity, brickUnitPrice, mortarUnitPrice} = this.state
        this.setState()
        this.setState({    subTotal: Number(brickQuantity * brickUnitPrice) + Number(mortarQuantity * mortarUnitPrice)        })

    }

    calculations = () => {
       const {totalPrice, subTotal,} = this.state

       this.setState({ totalPrice: subTotal})


    }

    addButton = () => {
        this.validateInput()
        this.calculations()

    }


    render() {
        const brickIcon = <div className={style.imgWrapper}><img src={altbrick} /></div>
        const buildIcon = <div className={style.imgWrapper}><img src={build} /></div>

        const inputData = [
            {id: 'brick', type: 'text', label: this.state.brickPlaceholder, name: 'brickQuantity', 
                description: 'Old Tavern is a staple in our Classic Collection. All of our brick is sure to enhance any building project.',
                price: '1.25',
                error: this.state.errorBrick ? 'yo bro fix it' : null, img: brickIcon},
            {id: 'mortar', type: 'text', label: this.state.mortarPlaceholder, name: 'mortarQuantity', 
                description: 'It is a contractor grade product for laying brick, block or stone. It can also be used as a scratch or brown coat in stucco applications. 80lb bag.',
                price: '10',
                error: this.state.errorMortar ? 'yo bro fix it' : null, img: buildIcon},
        ]

        return(
            <div className='container'>
            
                <div className={style.cartProgress}>//CART//shipping//payment//confirmation</div>
                <h2>e.Market</h2>
                <div className={style.mainCart}>

                    <div className={style.storeItems}>


                        {inputData.length
                        ?
                        inputData.map((item, index) => (
                            <label key={index} >
                                <div className={style.item}>
                                    {item.name}
                                    {item.img}
                                    {item.description.toLocaleLowerCase()}
                                    <div className={style.qtyInput}>
                                        <InputBase
                                            // style={{background: 'blue'}}
                                            id={item.id}
                                            type={this.type}
                                            placeholder={item.label}
                                            name={item.name}
                                            autoComplete='off'
                                            onChange={this.localChange}
                                            error={item.error}
                                        />
                                        <div>{item.error}</div>                                

                                    </div>
                                    <h5 style={{margin: 'none'}}>
                                    {`$${item.price}/ea`}
                                    </h5>
                                        
                                    <button onClick={this.addButton}>add</button>
                                </div>
                            </label>
                        ))
                        : null    
                        }
                    </div>
                    <div className={style.cartSummary}>
                        <h5>your cart totals</h5>
                        <div className={style.total}>
                        ${this.state.totalPrice}                            
                        </div>
                        <button onClick={this.localReset}>reset</button>
                    </div>
                </div>
                <button>proceed</button>

                
        
            </div>
        )
    }
}

export default Cart