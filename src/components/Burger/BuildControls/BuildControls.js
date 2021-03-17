import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'}
]
const BuildControls = ( props ) => console.log(props.purchase) ||(

    <div className={classes.BuildControls}>
        <p>
            Current Price : {props.price.toFixed(2)}
      </p>

    {controls.map(ctrl=>(
        <BuildControl 
        key = {ctrl.label} 
        label ={ctrl.type}
        addIngredient = {() => props.addHandler(ctrl.type)}
        removeIngredient = {()=> props.removeHandler(ctrl.type)} 
        disabled={props.disabled[ctrl.type]}/>
        ) )}

        <button
         className={classes.OrderButton}
         disabled={!props.purchase}
         onClick={props.purchasing}>ORDER NOW</button>
    </div> 
)

export default BuildControls;