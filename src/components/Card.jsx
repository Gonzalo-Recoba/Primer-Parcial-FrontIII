import React from 'react'

const Card = ({cliente}) => {
  
  return (
    <div style={{backgroundColor:cliente.color}}>
        <h4>Muchas gracias por registrarte: <span style={{color:'black'}}>{cliente.nombre} {cliente.apellido}</span></h4>
        <h5>Te enviamos una notificación al mail: <span style={{color:'black'}}>{cliente.email}</span></h5>
        <h5>Tu edad es: <span style={{color:'black'}}>{cliente.edad}</span></h5>
      </div>
  )
}

export default Card