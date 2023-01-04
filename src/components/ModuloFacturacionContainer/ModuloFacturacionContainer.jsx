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
        <h1>Modulo de facturación</h1>
        <ModuloFacturacionTable/>
        
        {titularSeleccionado !== null ? (
          <>
            <h2 style={{marginTop: '16px'}}>Facturación de {titularSeleccionado.nombre || ''} {titularSeleccionado.apellido || ''}</h2>
            <FacturaTable/>
          </>
        ) : false}
    </div>
  )
}

export default ModuloFacturacionContainer