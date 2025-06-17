import { useState } from 'react'
import './App.css'
import Tarjeta from './components/tarjeta'

function Ejemplo (props) {
  const [count, setCount] = useState(0)
  const {list} = props

  return (
    <>
      {
        list.map(item =>(
          <p id = {item}>Elemento número {item}</p>
        ))
      }
      <Tarjeta titulo =  {"Mi primera tarjeta"} descripcion = {"Esta es mi primera tarjeta Dummy"}/> 
    </>
  )
}

export default Ejemplo

/* alt + shift + a */ 