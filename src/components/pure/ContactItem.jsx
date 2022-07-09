import React from 'react'
import PropTypes from 'prop-types'

const ContactItem=({name,lastName,email,online, login})=> {
  return (
    <div>
        <h2>Nombre: {name}</h2>
        <h3>Apellido: {lastName}</h3>
        <h4>Email: {email}</h4>
        <h4>{online ? 'Contacto En Linea' : 'Contacto No Disponible'}</h4>
        <button onClick={()=>login()}>Iniciar sesion</button>
    </div>
  )
}

ContactItem.propTypes = {
  
    name:PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    online: PropTypes.bool
  
}

export default ContactItem
