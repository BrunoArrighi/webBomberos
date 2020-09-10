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

  const FallecidosTable = () => {

      const [tablaFallecidosUno, setTablaFallecidosUno] = React.useState([]);
      const [tablaFallecidosDos, setTablaFallecidosDos] = React.useState([]);
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
          {tablaFallecidosUno.map((row) => (
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
        <TableContainer component={Paper}>
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
          {tablaFallecidosDos.map((row) => (
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

export default FallecidosTable;
