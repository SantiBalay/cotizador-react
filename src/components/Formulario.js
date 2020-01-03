import React, { Component } from 'react';

class Formulario extends Component {

    // uso ref para leer campos

    marcaRef = React.createRef();
    yearRef = React.createRef();
    planBasicoRef = React.createRef();
    planCompletoRef = React.createRef();

    sendForm = (e) => {
        e.preventDefault()

        // obtengo datos
        // creo objeto

        const plan = this.planBasicoRef.current.checked ? 'basico'
                   : this.planCompletoRef.current.checked ? 'completo'
                   : null // para exceptions cuando entienda como funcionan

        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            tipoPlan: plan
        }

        console.log(infoAuto)

        // mando arriba con referencia a la funcion

        this.props.cotizarSeguro(infoAuto)

        // resetear => e.currentTarget.reset()

    }


    render() {
        return(
            <form className="cotizar-auto" onSubmit={ this.sendForm }>
                    <div className="campo">
                        <label>Marca</label>
                        <select name="marca" ref={this.marcaRef} >
                            <option value="americano">Americano</option>
                            <option value="europeo">Europeo</option>
                            <option value="asiatico">Asiatico</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label>Año</label>
                        <select name="year" ref={this.yearRef}>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                        </select>
                    </div>
                    <div className="campo">
                        <label>Plan:</label>
                        <input type="radio" name="plan" value="basico" ref={this.planBasicoRef}/> Básico
                        <input type="radio" name="plan" value="completo" ref={this.planCompletoRef}/> Completo
                    </div>

                    <button type="submit" className="boton">Cotizar</button>
                </form>
        
        )
    }
}

export default Formulario;
