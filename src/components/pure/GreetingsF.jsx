import React,{useState} from 'react';
import PropTypes from 'prop-types'

function GreetingsF({nombre}) {

    const [age,setAge] = useState(3)

    const birthday=()=>{
        setAge(age + 1)
    }

  return (
    <div>
        <div>
        <h1>Hola {nombre} desde componente Funcional</h1>
        <h2>tu edad es de {age}</h2>
        <button onClick={()=>birthday()}>Cumpleaños</button>
      </div>
    </div>
  )
}

GreetingsF.propTypes = {
    nombre: PropTypes.string.isRequired
}

GreetingsF.defaultProps = {
    nombre: "Desconocido"
}

export default GreetingsF