import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

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

  const iniciarSesion = () => {
    props.history.push('/login');
  }

    return (
        <div className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Noticias
            </Typography>
            <Button color="inherit" onClick={() => iniciarSesion()}>Iniciar Sesión</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default withRouter(NavBar);
