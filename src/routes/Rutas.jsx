import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import FacturacionPropietarioView from '../views/FacturacionPropietarioView'
import LoginView from '../views/LoginView'
import ModuloFacturacionView from '../views/ModuloFacturacionView'

const Rutas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<LoginView/>}/>
        <Route element={<Layout/>}>
          <Route path='/facturacion' element={<ModuloFacturacionView/>}/>
          <Route path='/facturacion/:idFactura' element={<FacturacionPropietarioView/>}/>
          <Route path='/menu2' element={<></>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas