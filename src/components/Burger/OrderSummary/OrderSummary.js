import React from 'react'
import Aux from '../../../hoc/Auxaliary'
import Button from '../../UI/Button/Button'

const orderSummary = ( props )=>{
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igKey)=>{
        return <li><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A deliciuose Burger wwith the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <div>
                <Button btnType="Success" clicked={props.continuePurchasing}>CONTINUE</Button>
                <Button btnType="Danger" clicked={props.cancelPurchased}>CANCEL</Button>
            </div>

        </Aux>

    )
}

export default orderSummary