// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import { GlobalContext } from '../../context/GlobalStateContext';
// import { Button, TableHead } from '@mui/material';

// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

// export default function ModuloFacturacionTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const {propietarios, setTitularSeleccionado} = React.useContext(GlobalContext)

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - propietarios.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
//         <TableHead>
//             <TableRow>
//                 <TableCell align='center'>ID</TableCell>
//                 <TableCell align='center'>Propietario</TableCell>
//                 <TableCell align='center'>Documento</TableCell>
//                 <TableCell align='center'>Email</TableCell>
//                 <TableCell align='center'>Estado</TableCell>
//                 <TableCell align='center'>Opciones</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? propietarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : propietarios
//           ).map((row) => (
//             <TableRow key={row.idPropietario}>
//               <TableCell component="th" scope="row" align='center'>
//                 {row.idPropietario}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align='center'>
//                 {`${row.nombre} ${row.apellido}`}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align='center'>
//                 {row.documento}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align='center'>
//                 {row.email}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align='center'>
//                 {row.estado}
//               </TableCell>
//               <TableCell style={{ width: 160 }} align='center'>
//                   <Button
//                   onClick={() => setTitularSeleccionado(row.idPropietario)}
//                   variant='outlined'>
//                     Ver
//                   </Button>
//               </TableCell>
//             </TableRow>
//           ))}

//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={6}
//               count={propietarios.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: {
//                   'aria-label': 'Filas por página',
//                 },
//                 native: true,
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }

import React, { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GlobalContext } from '../../context/GlobalStateContext';
import { Button } from '@mui/material';
import classes from '../../theme/Styles';

const customProperties = {
  flex: 1,
  align: 'center',
  headerAlign: 'center'
}

const ModuloFacturacionTable = () => {

  const {propietarios, setTitularSeleccionado} = useContext(GlobalContext)

  const columns = [
    { field: 'idPropietario', headerName: 'ID', ...customProperties},
    { field: 'fullName', headerName: 'Propietario', ...customProperties,
      valueGetter: (params) => `${params.row.nombre || ''} ${params.row.apellido || ''}`},
    { field: 'documento', headerName: 'Documento', ...customProperties},
    { field: 'email', headerName: 'Email', ...customProperties},
    { field: 'estado', headerName: 'Estado', ...customProperties},
    { field: 'option', headerName: 'Opciones', sortable: false, type: 'actions', ...customProperties,
      renderCell: (params) => {
        return (
          <Button
            className='buttonStorange'
            style={classes.button}
            onClick={() => setTitularSeleccionado(params.row)}
            variant='contained'>
            Ver
          </Button>
        )
      }
    }
  ]

  return (
    <div style={{ height: 400, width: '100%', marginBottom: '50px' }}>
      <DataGrid
        getRowId={(row) => row.idPropietario}
        rows={propietarios}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}

export default ModuloFacturacionTable