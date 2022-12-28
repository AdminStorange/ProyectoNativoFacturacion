import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import FacturaTable from '../FacturaTable/FacturaTable'
import ModuloFacturacionTable from '../ModuloFacturacionTable/ModuloFacturacionTable'
import './ModuloFacturacionContainer.css'

const ModuloFacturacionContainer = () => {

    const {propietarios, buscarPropietarios, titularSeleccionado} = useContext(GlobalContext)

    useEffect(() => {
      buscarPropietarios()
    }, [propietarios])
    
  return (
    <div className='moduloFacturacionContainer'>
        <ModuloFacturacionTable/>
        {titularSeleccionado !== null ? (
          <FacturaTable/>
        ) : false}
    </div>
  )
}

export default ModuloFacturacionContainer