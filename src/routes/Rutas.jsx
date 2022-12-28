import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import FacturacionPropietarioView from '../views/FacturacionPropietarioView'
import ModuloFacturacionView from '../views/ModuloFacturacionView'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/facturacion' element={<ModuloFacturacionView/>}/>
                <Route path='/facturacion/:idFactura' element={<FacturacionPropietarioView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas