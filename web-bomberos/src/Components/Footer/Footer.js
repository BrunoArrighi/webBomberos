import React from 'react';
import './Footer.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'static',
      marginTop: '50px',
      left: '0px',
      bottom: '0px',
      width: '100%',
      backgroundColor: 'gray',
      color: 'white',
      textAlign: 'center',
      padding: '40px',
      textAlign: 'center',
    },
  }),
);

const Footer = () => {
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <p> Desarrollado por Sebastián Ulloa y Bruno Arrighi</p>
    </div>)
}

export default Footer;