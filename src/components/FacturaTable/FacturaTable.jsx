import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GlobalContext } from '../../context/GlobalStateContext';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import classes from '../../theme/Styles';

const customProperties = {
  flex: 1,
  align: 'center',
  headerAlign: 'center'
}

const columns = [
  { field: 'idFactura', headerName: 'ID', ...customProperties},
  { field: 'fechaFactura', headerName: 'Fecha', ...customProperties},
  { field: 'montoAlmacenaje', headerName: 'Monto', type: 'number', ...customProperties,
    valueGetter: (params) => `S/ ${params.row.montoAlmacenaje}`},
  { field: 'volumenActivo', headerName: 'Volumen', type: 'number', ...customProperties,
    valueGetter: (params) => `${params.row.volumenActivo} m³`},
  { field: 'estado', headerName: 'Estado', ...customProperties,
    valueGetter: (params) => `${params.row.estado.charAt(0).toUpperCase() + params.row.estado.slice(1)}`},
  { field: 'option', headerName: 'Opciones', sortable: false, type: 'actions', ...customProperties,
    renderCell: (params) => {
      return (
        <Button
        style={classes.button}
        variant='contained'>
          <Link
            style={classes.link}
            to={`/facturacion/${params.row.idFactura}`}>
            Ver factura
          </Link>
        </Button>
      )
    }
  }
];

const FacturaTable = () => {

    const {facturas, titularSeleccionado, buscarFacturas} = React.useContext(GlobalContext)

    React.useEffect(() => {
        buscarFacturas(titularSeleccionado.idPropietario)
    }, [titularSeleccionado])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.idFactura}
        rows={facturas}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default FacturaTable