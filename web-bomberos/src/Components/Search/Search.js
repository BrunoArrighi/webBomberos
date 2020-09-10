import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        marginTop: '20px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '400px',
        // marginRight: '600px',
      width: '50%',
    },
    input: {
      marginLeft: theme.spacing(1),
    // marginTop: '20px',
      flex: 1,
    //   textAlign: 'center'
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

const Search = () => {

    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        className={classes.input}
        placeholder="Buscar por título de noticia"
        inputProps={{ 'aria-label': 'buscar' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    )
}

export default Search