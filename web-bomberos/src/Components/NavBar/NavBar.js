import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import {auth} from '../../firebase';
import {db} from '../../firebase';

const useStyles = makeStyles((theme) =>

  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar = (props) => {
  const classes = useStyles();
  const [firebaseUser, setFirebaseUser] = React.useState(false)

React.useEffect(() => {
    auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
            setFirebaseUser(user)
        }else{
            setFirebaseUser(null)
        }
    })
}, [])

  const iniciarSesion = () => {
    props.history.push('/login');
  }

  const historia = () => {
    props.history.push('/historia');
  }

  const noticias = () => {
    props.history.push('/');
  }

  const cerrarSesion = () => {
    auth.signOut()
        .then(() => {
            props.history.push('/login')
        })
}

    return (
        <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Button color="inherit" onClick={() => noticias()}>Noticias</Button>
              <Button color="inherit" onClick={() => historia()}>Historia</Button>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              
            </Typography>
            
            {
              firebaseUser !== null ? (
                <Button color="inherit" onClick={() => cerrarSesion()}>Cerrar Sesión</Button>
              ) : (
                <Button color="inherit" onClick={() => iniciarSesion()}>Iniciar Sesión</Button>
              )
            }
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default withRouter(NavBar);
