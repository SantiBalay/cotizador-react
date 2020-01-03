import React, { Component } from 'react';

import Header from './Header'
import Formulario from './Formulario'

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper'

import Resumen from './Resumen';
import Resultado from './Resultado';



class App extends Component {

  state = {
    titulo: 'Cotizador de Seguros de Automovil',
    resultado:'',
    datos: {}
  }

  cotizarSeguro = (infoAuto) => {

    const {marca,year,tipoPlan} = infoAuto
    // invento una base de 2000
    let base = 2000;
    // cuanto mas nuevo es el auto + caro el seguro // 5% ponele
    let diferencia = obtenerDiferenciaAnio(year)
    base -= base*(0.05)*diferencia
    // Americano + 5% / Europeo + 10% / Asiatico + 1% incremento
    let aumentoMarca = calcularMarca(marca)
    base *= aumentoMarca
    // basico + 20% / completo + 50%
    let aumentoTipoPlan = obtenerPlan(tipoPlan)
    base *= aumentoTipoPlan
    base = parseFloat(base).toFixed(2)

    this.setState({
      resultado : base,
      datos : infoAuto
    })
    console.log(base)
  }

  render() {
    return(
      <div className="contenedor">
          <Header 
            titulo = 'Cotizador'
          />

          <div className="contenedor-formulario">
            <Formulario
              cotizarSeguro={this.cotizarSeguro}
            />

            <Resumen
              infoAuto = {this.state.datos}
            />

            <Resultado
              resultado = {this.state.resultado}
            />

          </div>

      </div>
    )
  }
}

export default App;
