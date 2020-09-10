import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    espaciado: {
      marginTop: '20px',
      marginBottom: '20px',
    }
  });

  const HeridosTable = () => {

        const [tablaHeridosUno, setTablaHeridosUno] = React.useState([
        {nombre: 'as',
        apellido: 'dssaa',
        dni: '23',
        nacionalidad: 'sdmfjds',
        sexo: 'dashd'}
      ]);
      const [tablaHeridosDos, setTablaHeridosDos] = React.useState([
        {nombre: 'asssssss',
        apellido: 'dsssssssaa',
        dni: '2dad3',
        nacionalidad: 'sdmfssdsjds',
        sexo: 'dasaaahd'}
      ]);

      const [state, setState] = React.useState({
        columns: [
          { title: 'Nombre', field: 'nombre' },
          { title: 'Apellido', field: 'apellido' },
          { title: 'DNI', field: 'dni'},
          { title: 'Nacionalidad', field: 'nacionalidad'},
          { title: 'Sexo', field: 'sexo'},
        ]})

  const classes = useStyles();

  return (
    <div>
      <div>
    <TableContainer component={Paper}>
      <Table className={classes.table, classes.espaciado} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Vehículo 1</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell >Apellido</StyledTableCell>
            <StyledTableCell >DNI</StyledTableCell>
            <StyledTableCell >Nacionalidad</StyledTableCell>
            <StyledTableCell >Sexo</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ><Button variant="outlined" > Agregar Nuevo </Button></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tablaHeridosUno.map((row) => (
            <StyledTableRow key={row.nombre}>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell >{row.apellido}</StyledTableCell>
              <StyledTableCell >{row.dni}</StyledTableCell>
              <StyledTableCell >{row.nacionalidad}</StyledTableCell>
              <StyledTableCell >{row.sexo}</StyledTableCell>
              <StyledTableCell ><Button variant="outlined" color="secondary"> Eliminar </Button></StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div>
      <TableContainer component={Paper} >
      <Table className={classes.table, classes.espaciado} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Vehículo 2</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell >Apellido</StyledTableCell>
            <StyledTableCell >DNI</StyledTableCell>
            <StyledTableCell >Nacionalidad</StyledTableCell>
            <StyledTableCell >Sexo</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ><Button variant="outlined" > Agregar Nuevo </Button></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tablaHeridosDos.map((row) => (
            <StyledTableRow key={row.nombre}>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell >{row.apellido}</StyledTableCell>
              <StyledTableCell >{row.dni}</StyledTableCell>
              <StyledTableCell >{row.nacionalidad}</StyledTableCell>
              <StyledTableCell >{row.sexo}</StyledTableCell>
              <StyledTableCell ><Button variant="outlined" color="secondary"> Eliminar </Button></StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}

export default HeridosTable;

// import React from 'react';
// import MaterialTable from 'material-table';
// // icons table 
// import { forwardRef } from 'react';
// import AddBox from '@material-ui/icons/AddBox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import Check from '@material-ui/icons/Check';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import Clear from '@material-ui/icons/Clear';
// import DeleteOutline from '@material-ui/icons/DeleteOutline';
// import Edit from '@material-ui/icons/Edit';
// import FilterList from '@material-ui/icons/FilterList';
// import FirstPage from '@material-ui/icons/FirstPage';
// import LastPage from '@material-ui/icons/LastPage';
// import Remove from '@material-ui/icons/Remove';
// import SaveAlt from '@material-ui/icons/SaveAlt';
// import Search from '@material-ui/icons/Search';
// import ViewColumn from '@material-ui/icons/ViewColumn';


// const tableIcons = {
//     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//   };

// const HeridosTable = () => {



//     const agregarHeridoUno = (civil) => {
//         const tablaHeridosUnoNew = [...tablaHeridosUno];
//         tablaHeridosUnoNew.push(civil);
//         setTablaHeridosUno(tablaHeridosUnoNew);
//         console.log(tablaHeridosUno);
//       }
    
//       const eliminarHerido = (dniHerido) => {
//         debugger;
//         const herido = tablaHeridosUno.filter(a => a.dni === dniHerido.dni);
//         const currentIndex = tablaHeridosUno.map(a => a.dni.indexOf(dniHerido.dni));
//         const newTabla = [...tablaHeridosUno];
    
//         if (currentIndex != -1) {
//           newTabla.splice(currentIndex, 1);
//         } 
//         setTablaHeridosUno(newTabla);
//         // const i = tablaHeridosUno.indexOf( herido );
//         // if(i != -1) {
//         //   tablaHeridosUno.splice( i, 1 );
//         //   const tablaHeridosNew = [...tablaHeridosUno]
//         //   setTablaHeridosUno(tablaHeridosNew);
//         // }
        
        
//       }
//     return (
//         <div>
//             <MaterialTable
//           icons={tableIcons}
//       title="Heridos Auto 1"
//       columns={state.columns}
//       localization={{
//          body:{ emptyDataSourceMessage:
//          <span> No hay heridos registrados</span> }}}
//       data={tablaHeridosUno}
//       // onRowClick={(event, newData) => abrirModal(newData.id)}
//       options={{
//         pageSize: 5
//     }}
//       editable={{
       
//         onRowAdd: (newData) =>
//           new Promise((resolve) => {
//             setTimeout(() => {
//               resolve();
//               const herido = {
//                 nombre: newData.nombre,
//                 apellido: newData.apellido,
//                 dni: newData.dni,
//                 nacionalidad: newData.nacionalidad,
//                 sexo: newData.sexo
//               }
//               agregarHeridoUno(herido)
//               });
//             }, 600),
            
          
//         // onRowUpdate: (newData) =>
//         //   new Promise((resolve) => {
//         //     debugger;
//         //     setTimeout(() => {
//         //       resolve();
//         //       const herido = {
//         //         nombre: newData.nombre,
//         //         apellido: newData.apellido,
//         //         dni: newData.dni,
//         //         nacionalidad: newData.nacionalidad,
//         //         sexo: newData.sexo,
//         //         id: newData.id
//         //       }
//         //       editarHerido(herido);
//         //     }, 600);
//         //   }),
//         onRowDelete: (oldData) =>
//           new Promise((resolve) => {
//             debugger;
//             setTimeout(() => {
//               resolve();
//               const dniHerido = {
//                 dni: oldData.dni
//               }
//               eliminarHerido(dniHerido);
//             }, 600);
//           }),
//       }}
//     />
//     {/* </div>
//     <div> */}
//     <MaterialTable
//       title="Heridos Auto 2"
//       columns={state.columns}
//       data={tablaHeridosDos}
//       // onRowClick={(event, newData) => abrirModal(newData.id)}
//       options={{
//         pageSize: 7
//     }}
//       editable={{
       
//         onRowAdd: (newData) =>
//           new Promise((resolve) => {
//             setTimeout(() => {
//               resolve();
//               const nuevoSocio = {
//                 nombre: newData.nombre,
//                 apellido: newData.apellido,
//                 dni: newData.dni,
//                 nacionalidad: newData.nacionalidad,
//                 sexo: newData.sexo
//               }
//               // agregarNuevoSocio(nuevoSocio)
//               });
//             }, 600),
            
          
//         onRowUpdate: (newData) =>
//           new Promise((resolve) => {
//             debugger;
//             setTimeout(() => {
//               resolve();
//               const datosSocio = {
//                 nombre: newData.nombre,
//                 apellido: newData.apellido,
//                 dni: newData.dni,
//                 nacionalidad: newData.telefono,
//                 sexo: newData.direccion,
//                 id: newData.id
//               }
//               // actualizarSocio(datosSocio);
//             }, 600);
//           }),
//         onRowDelete: (oldData) =>
//           new Promise((resolve) => {
//             debugger;
//             setTimeout(() => {
//               resolve();
//               const idSocio = {
//                 id: oldData.id
//               }
//               // eliminarSocio(idSocio)
//             }, 600);
//           }),
//       }}
//     />
//         </div>
//     )
// }

// export default HeridosTable
