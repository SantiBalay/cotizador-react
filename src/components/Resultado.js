import React, {Component} from 'react';
import {Transition, CSSTransition, TransitionGroup} from 'react-transition-group'

class Resultado extends Component {


    printearResultado = () => {
       
        const resultado = this.props.resultado

        if(!resultado) return (
           null
        ); else {
            return(
                <div className= "gran-total">
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado"
                                    key={resultado} 
                                    timeout={{enter:500,exit:500}} >
                        
                        <span> El total es: ${resultado} </span>

                    </CSSTransition>
                </TransitionGroup>
            </div>
            )
        }

    }
    render() {
        return(
            this.printearResultado()
        )
    }
}

export default Resultado