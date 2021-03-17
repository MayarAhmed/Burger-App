import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Aux from '../../../hoc/Auxaliary'

const sideDrawer = (props)=>{

    let attachedClasses=[classes.SideDrawer, classes.Close]

    if(props.open){
         attachedClasses=[classes.SideDrawer,classes.Open]
    }
    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>
    </Aux>
    )
}

export default sideDrawer