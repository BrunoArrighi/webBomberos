import React from 'react';
import {db, auth} from '../../firebase';
import { withRouter } from 'react-router-dom';
import imageBombero from '../../img/bombero.jpg';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${imageBombero})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

const Login = (props) => {

  const [usuario, setUsuario] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [error, setError] = React.useState(null)

  const procesarDatos = e => {
    e.preventDefault()
    if(!usuario.trim() || !pass.trim()){
        console.log('Datos vacíos email!')
        setError('Por favor, completa todos los datos solicitados.')
        return
    }
    // if(!pass.trim()){
    //     console.log('Datos vacíos pass!')
    //     setError('Datos vacíos pass!')
    //     return
    // }
    if(pass.length < 6){
        console.log('6 o más carácteres')
        setError('La contraseña tiene que ser mayor a 6 carácteres')
        return
    }
    console.log('correcto...')
    setError(null)
    login();

}

  // React.useEffect(() => {
  //   const 

  // }, []);

  const classes = useStyles();
  const regresar = () => {
    props.history.push('/');
  }
  
  const login = React.useCallback(async() => {
    debugger;
    try {
        await auth.signInWithEmailAndPassword(usuario, pass)  
        
        if(usuario === 'admin@admin.com') {
          setUsuario('')
          setPass('')
          setError(null)
          props.history.push('/admin-inicio')
        } else {
          setUsuario('')
          setPass('')
          setError(null)
          props.history.push('/inicio-bomberos')
        }
    } catch (error) {
        if(error.code === 'auth/user-not-found'){
            setError('Usuario o contraseña incorrecta')
        }
        if(error.code === 'auth/wrong-password'){
            setError('Usuario o contraseña incorrecta')
        }
        console.log(error.code)
        console.log(error.message)
    }
}, [usuario, pass, props.history])

    return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate onSubmit={procesarDatos}>
            {
              error ? (
                <Alert severity="error">{error}</Alert>    
            ) : null
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus
              onChange={ e => setUsuario(e.target.value) }
              value={usuario}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={ e => setPass(e.target.value) }
              value={pass}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresar
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => regresar()}
            >
              Regresar
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default withRouter(Login);
