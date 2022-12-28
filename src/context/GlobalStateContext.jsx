import React, { createContext, useState } from 'react'
import encodePetition from '../tools/EncodePetition'
export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {
  
    const [propietarios, setPropietarios] = useState([])
    const [titular, setTitular] = useState(null)
    const [titularSeleccionado, setTitularSeleccionado] = useState(null)
    const [articulos, setArticulos] = useState([])
    const [facturas, setFacturas] = useState([])

    const buscarPropietarios = () => {
        fetch("https://api.storange.pe/propietario", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => setPropietarios(data))
    }

    const buscarTitular = (idPropietario) => {
        let details = { idPropietario }
        setTitular(null)
        fetch("https://api.storange.pe/propietarioPorId", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: encodePetition(details)
        })
        .then((res) => res.json())
        .then((data) => setTitular(data))
    }

    const buscarArticulos = (factura) => {
      let details = {
        idPropietario: factura.idPropietario,
        fecha: factura.fechaFactura
      }
      
      fetch("https://api.storange.pe/articulovirtualFacturacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: encodePetition(details)
      })
        .then((res) => res.json())
        .then((data) => {
          setArticulos(data)
        })
    }

    const buscarFacturaPorID = (idFactura) => {
      let details = { idFactura }

      setArticulos([])

      fetch("https://api.storange.pe/facturaPorId", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: encodePetition(details)
      })
        .then((res) => res.json())
        .then((data) => buscarArticulos(data))
    }

    const buscarFacturas = (idPropietario) => {
      let details = { idPropietario }
  
      fetch("https://api.storange.pe/facturasPropietario", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: encodePetition(details)
      })
        .then((res) => res.json())
        .then((data) => setFacturas(data))
    }

    return (
    <GlobalContext.Provider
    value={{
        propietarios,
        setPropietarios,
        buscarPropietarios,
        titular,
        setTitular,
        buscarTitular,
        titularSeleccionado,
        setTitularSeleccionado,
        articulos,
        setArticulos,
        buscarArticulos,
        facturas,
        setFacturas,
        buscarFacturas,
        buscarFacturaPorID
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext