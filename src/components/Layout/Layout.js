import React, {Component} from 'react'
import Aux from '../../hoc/Auxaliary'
import Classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SiderDrawer'

class Layout extends Component {
   
    state={
        showBackDrop:false
    }

    toggleBackDrop =()=>{
        this.setState({showBackDrop:false})
    }

    toggleSideMenu = () =>{
        this.setState((prevState)=>{
       return {showBackDrop:!prevState.showBackDrop}
    })

}
    

    render(){
        return(
            <Aux>
            <Toolbar clicked={this.toggleSideMenu}/>
            <SideDrawer open={this.state.showBackDrop} clicked={this.toggleBackDrop}/>
            <main className={Classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        
    )
}}  



export default Layout;