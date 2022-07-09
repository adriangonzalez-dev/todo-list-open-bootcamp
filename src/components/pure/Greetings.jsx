import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Greetings extends Component {

    constructor(props){
        super(props)
        this.state = {
            age: 20
        }
    }

    birthday(){
        this.setState({
            age:this.state.age + 1
        })
    }

  render() {
    return (
      <div>
        <h1>Hola {this.props.nombre}</h1>
        <h2>tu edad es de {this.state.age}</h2>
        <button onClick={()=>this.birthday()}>Cumpleaños</button>
      </div>
    )
  }
}

Greetings.propTypes = {
    nombre: PropTypes.string.isRequired
}

Greetings.defaultProps = {
    nombre: "Desconocido"
}
export default Greetings