import React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {withRouter} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: '20px'
    },
    button: {
        marginLeft: '80px',
        marginTop: '20px',
    }
  });
  

  

const CivilesAccidente = (props) => {

    const classes = useStyles();
    const [idSiniestro, setIdSiniestro] = React.useState(props.idSini);
    const [idAccidente, setIdAccidente] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [dni, setDni] = React.useState('');
    const [nacionalidad, setNacionalidad] = React.useState('');
    const [sexo, setSexo] = React.useState('');
    const [fallecido, setFallecido] = React.useState('');
    const [civiles, setCiviles] = React.useState([]);
    const [success, setSuccess] = React.useState(false);
    
    
    React.useEffect(() => {
        obtenerDatos();
      }, [])

      const obtenerDatos = async () => {
        const dataA = await db.collection('accidentes').get();
        const arrayDataA = dataA.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        const acci = [];
        arrayDataA.map(item => {
          if(item.idSiniestro === idSiniestro) {
              acci.push(item);
          }
        })
         debugger;
        setIdAccidente(acci[0].id);
      }


    const agregarCivil = () => {
        debugger;
        const newArray = [...civiles];
        if(fallecido === "Si") {
            const civil = {
                idAccidente: idAccidente,
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                nacionalidad: nacionalidad,
                sexo: sexo,
                fallecido: 'Si'
            }
            newArray.push(civil);
        } else {
            const civil = {
                idAccidente: idAccidente,
                nombre: nombre,
                apellido: apellido,
                dni: dni,
                nacionalidad: nacionalidad,
                sexo: sexo,
                fallecido: 'No'
            }
            newArray.push(civil);
        }
        setCiviles(newArray);
        setNombre('');
        setApellido('');
        setDni('');
        setNacionalidad('');
        setSexo('');
        setFallecido('');
    }

    const guardarArreglo = async () => {
        debugger;
        await civiles.map(ac => {
            db.collection('civiles_accidente').add(ac);
          })
          setSuccess(true);
    }

    return (
        <div>
          {
            success === true ? (
              <Alert severity="success">Se ha Guardado con Éxito. Refresque el navegador para visualizarlo.</Alert>
            ) : null
          }
            <div>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              onChange={e => setNombre(e.target.value)}
              value={nombre}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="apellido"
              name="apellido"
              label="Apellido"
              fullWidth
              onChange={e => setApellido(e.target.value)}
              value={apellido}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dni"
              name="dni"
              label="DNI"
              fullWidth
              onChange={e => setDni(e.target.value)}
              value={dni}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nacionalidad"
              name="nacionalidad"
              label="Nacionalidad"
              fullWidth
              onChange={e => setNacionalidad(e.target.value)}
              value={nacionalidad}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="sexo"
              name="sexo"
              label="Sexo"
              fullWidth
              onChange={e => setSexo(e.target.value)}
              value={sexo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="fallecido"
              name="fallecido"
              label="Fallecido"
              fullWidth
              onChange={e => setFallecido(e.target.value)}
              value={fallecido}
            >   
            <MenuItem value="Si" key="1">
              Si
            </MenuItem>
            <MenuItem value="No" key="2">
              No
            </MenuItem>
          </TextField>
          </Grid>
          </Grid>
          </div>
          <div>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => agregarCivil()}>
            Agregar
          </Button>
          </div>
          <div>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell >Apellido</TableCell>
            <TableCell >Dni</TableCell>
            <TableCell >Nacionalidad</TableCell>
            <TableCell >Sexo</TableCell>
            <TableCell >Fallecido</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {civiles.map((c) => (
            <TableRow key={c.dni}>
              <TableCell> {c.nombre} </TableCell>
              <TableCell> {c.apellido} </TableCell>
              <TableCell> {c.dni} </TableCell>
              <TableCell> {c.nacionalidad} </TableCell>
              <TableCell> {c.sexo} </TableCell>
              <TableCell> {c.fallecido} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => guardarArreglo()}>
            Guardar
          </Button>
          </div>
        </div>
    )
}

export default withRouter(CivilesAccidente)
