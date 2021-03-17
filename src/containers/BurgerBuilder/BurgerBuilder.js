import React , {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxaliary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENTS_PRICES = {
    meat:0.7,
    bacon:1.3,
    cheese:1,
    salad:1.7

}
   



class BurgerBuilder extends Component{
   
     state={
         ingredients:{
             cheese:0,
             bacon:0,
             salad:0,
             meat:0
         },
        totalPrice:4,
        purchasable:false,
        purchasing:false
     }

     updatePuchaseHandler(ingredients){
         
         const sum = Object.keys(ingredients)
         .map((igKey)=>{

            return ingredients[igKey]
         })
         .reduce((sum,el)=>{
             return sum + el
         },0)
 this.setState({
     purchasable : sum > 0 
 })

     }


//Add Handler

    addIngredientHandler = ( type )=> {
         
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1 
        const newIngredientArr = {
            ...this.state.ingredients
        }

        newIngredientArr[type] = updatedCount
//UpdatingPrice

      const priceAddition = INGREDIENTS_PRICES[type]
      const  oldPrice = this.state.totalPrice
      const newPrice = priceAddition + oldPrice
        this.setState({

            ingredients:newIngredientArr,
            totalPrice:newPrice
        })
        this.updatePuchaseHandler(newIngredientArr) 
    }

//Remove Handler 
   
 removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type]
    const deductedCount = oldCount - 1 
    const newIngredientArr = {
        ...this.state.ingredients
    }

    newIngredientArr[type] = deductedCount
//UpdatingPrice

  const priceDedution = INGREDIENTS_PRICES[type]
  const  oldPrice = this.state.totalPrice
  const newPrice = priceDedution -  oldPrice
    this.setState({

        ingredients:newIngredientArr,
        totalPrice:newPrice
    })
    this.updatePuchaseHandler(newIngredientArr) 
   
 }

 //Purchasing Handler 
purchasingHandler = () =>{
    this.setState({
        purchasing:true
    })
}

purchasingCanceledHandler = () =>{
    this.setState({
        purchasing:false
    })
}

purchaseContinueHandler = () =>{
    alert('you Continued purchasing')
}

    render(){
    const disabledInfo =
        {...this.state.ingredients}

    for(let key in disabledInfo){

        disabledInfo[key] = disabledInfo[key] <=0

    }
        return (
        <Aux>
            <Modal 
            show={this.state.purchasing}
            purchasingCancel={this.purchasingCanceledHandler}>
            <OrderSummary ingredients={this.state.ingredients}
            cancelPurchased={this.purchasingCanceledHandler}
            continuePurchasing={this.purchaseContinueHandler}/>
                </Modal>
            <div>
                <Burger  ingredients={this.state.ingredients}/>
            </div>
            <div>
                <BuildControls 
                addHandler = {this.addIngredientHandler}
                removeHandler ={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchase={this.state.purchasable}
                purchasing={this.purchasingHandler}
               />
            </div>

        </Aux>
            
        )
    }
}

export default BurgerBuilder;