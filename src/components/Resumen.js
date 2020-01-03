import React, {Component, Fragment} from 'react';
import {primeraMayuscula} from '../helper'
class Resumen extends Component {

    

    printearResumen = () => {

        const {marca,tipoPlan,year} = this.props.infoAuto
        if (!tipoPlan) {
            return (
                <div className="resumen">
                    <p> Elija Marca, Año y Plan</p>
                </div>
            )
        }
        return( 
            <div className="resumen" >
                <h2> Resumen</h2>
                <li> Marca: { primeraMayuscula(marca) } </li>
                <li> Tipo de Plan: { primeraMayuscula(tipoPlan) } </li>
                <li> Año del modelo : {year} </li>
            </div>
        )
    }

    render() {


        return(
            <Fragment>
                {this.printearResumen()}
            </Fragment>
        )
    }

    
}

export default Resumen;