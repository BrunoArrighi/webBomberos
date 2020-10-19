import React from 'react';
import {db} from '../../../firebase';
import {auth} from '../../../firebase';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// import { auth } from 'firebase';
import { useForm, useStep } from "react-hooks-helper";
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '60px',
      marginLeft: '5%',
      marginRight: '5%',
    },
    
    instructions: {
      marginLeft: "10px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    instructionsBreak: {
      marginLeft: "40px",
      marginTop: '10px',
      marginBottom: '10px',
      marginRight: '40px',
      borderRadius: '6px',
      padding: '10px',
      border: '1px solid black',
    },
  }));

const RegistrarBombero = (props) => {

    const classes = useStyles();
    const [error, setError] = React.useState('');
    const myForm = React.useRef(null);
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [dni, setDni] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [direccion, setDireccion] = React.useState('');
    const [legajo, setLegajo] = React.useState('');
    const [cargo, setCargo] = React.useState('');
    const [grado, setGrado] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const agregarUsuario = React.useCallback(async() => {

        try {
            const bombero = {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion,
                dni: dni,
                legajo: legajo,
                cargo: cargo,
                grado: grado,
            }
            await db.collection('bomberos').add(bombero);
            await auth.createUserWithEmailAndPassword(email, password)
        } catch (error) {
            console.log(error)
        }

        setNombre('');
        setApellido('');
        setDireccion('');
        setTelefono('');
        setDni('');
        setLegajo('');
        setCargo('');
        setGrado('');
        setEmail('');
        setPassword('');
        props.history.push('/admin-inicio');
    })

    const verificar = () => {
      if (!myForm.current.checkValidity()) {
        setError('Por favor ingrese los campos requeridos');
        return;
     }
     else {
      agregarUsuario();
     }
     
    }

    return (
        <div>
            <NavBar />
            <div className={classes.instructionsBreak}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/admin-inicio" 
                // onClick={handleClick}
                >
                    Inicio-Admin
                </Link>
                <Typography color="textPrimary">Registrar Bombero</Typography>
            </Breadcrumbs>
            </div>
            <div className={classes.root}>
            <form ref={myForm}>
      {
              error ? (
                <Alert severity="error">{error}</Alert>    
            ) : null
            }
        <Grid container spacing={3} >
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
              id="telefono"
              name="telefono"
              label="Teléfono"
              fullWidth
              onChange={e => setTelefono(e.target.value)}
              value={telefono}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="direccion"
              name="direccion"
              label="Dirección"
              fullWidth
              onChange={e => setDireccion(e.target.value)}
              value={direccion}
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
              id="legajo"
              name="legajo"
              label="Legajo"
              fullWidth
              onChange={e => setLegajo(e.target.value)}
              value={legajo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="cargo"
              name="cargo"
              label="Cargo"
              fullWidth
              onChange={e => setCargo(e.target.value)}
              value={cargo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="grado"
              name="grado"
              label="Grado"
              fullWidth
              onChange={e => setGrado(e.target.value)}
              value={grado}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              fullWidth
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Contraseña"
              fullWidth
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
          <Button variant="contained" color="primary" onClick={() => verificar()}>
            Guardar Bombero
          </Button>
          </Grid>
          </Grid>
          </form>
          </div>
            <Footer />
          </div>
    )
}

export default withRouter(RegistrarBombero)
