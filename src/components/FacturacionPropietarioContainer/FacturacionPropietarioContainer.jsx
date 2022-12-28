import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalStateContext"
import DetalleFacturaTable from "../DetalleFacturaTable/DetalleFacturaTable";
import "./FacturacionPropietarioContainer.css"

const FacturacionPropietarioContainer = () => {
  let { idFactura } = useParams()
  const { buscarFacturaPorID, factura } = useContext(GlobalContext)

  useEffect(() => {
    buscarFacturaPorID(idFactura)
  }, [idFactura])

  return (
    <div className="facturacionPropietarioContainer">
      {factura !== null ? (
        <DetalleFacturaTable/>
      ) : false}
    </div>
  );
};

export default FacturacionPropietarioContainer;
