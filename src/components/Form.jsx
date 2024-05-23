import { useState } from "react"
import Card from "./Card"
import ErrorMessage from "./ErrorMessage"


const Form = ({setShowForm}) => {
    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        edad: '',
        color: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if( cliente.nombre.length >= 3 && cliente.apellido.length >= 6 && regex.test(cliente.email) && cliente.edad >= 18 && cliente.edad <=99 && cliente.color!=""){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }
  return (
    <div>
        {show ?  
            <Card cliente={cliente} setShowForm={setShowForm} setShow={setShow}/>
            : 
            <form onSubmit={handleSubmit} style={{backgroundColor:cliente.color}} >
                <div style={{marginBottom:'15px'}}>
                    <label>Nombre </label>
                    <input type="text" onBlur={(e)=> setCliente({...cliente, nombre: e.target.value})} />
                </div>
                
                <div style={{marginBottom:'15px'}}>
                    <label>Apellido </label>
                    <input type="text" onBlur={(e)=> setCliente({...cliente, apellido: e.target.value})}/>
                </div>

                <div style={{marginBottom:'15px'}}>
                    <label>Email </label>
                    <input type="email" onBlur={(e)=> setCliente({...cliente, email: e.target.value})}/>
                </div>

                <div style={{marginBottom:'15px'}}>
                    <label>Edad </label>
                    <input type="number" min='18' max='99' onBlur={(e)=> setCliente({...cliente, edad: e.target.value})}/>
                </div>
                <div style={{marginBottom:'15px'}}>
                    <label>Color favorito </label>
                    <input type="color" onChange={(e)=> setCliente({...cliente, color: e.target.value})}/>
                </div>
                <button onClick={()=> handleSubmit} style={{backgroundColor:'green'}}>Enviar datos</button>
            </form>
        }
        {error && <ErrorMessage/>}
    </div>
  )
}

export default Form