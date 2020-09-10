import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
      
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '60%',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '30px',
    },
    // backButton: {
    //   marginRight: theme.spacing(1),
    // },
    // instructions: {
    //   marginTop: theme.spacing(1),
    //   marginBottom: theme.spacing(1),
    // },
    // formCheckbox: {
    //   width: '100%',
    //   maxWidth: 360,
    //   backgroundColor: theme.palette.background.paper,
    // },
    // formControl: {
    //   margin: theme.spacing(1),
    //   minWidth: 120,
    //   maxWidth: 300,
    // },
  }),
);

const DatosBomberos = ({dBomberos, setDBomberos}, props) => {
    const classes = useStyles();
    const [bomberos, setBomberos] = React.useState([]);
    const [vehiculos, setVehiculos] = React.useState([]);
    const [listaBomberos, setListaBomberos] = React.useState([]);
    var { 
        cuartelero,
         bomberoCargo,
        listadoBomberos,
        listadoVehiculos } = dBomberos;

        React.useEffect(() => {
            obtenerDatos();
          })
    
          const obtenerDatos = async () => {
            const dataV = await db.collection('vehiculos').get()
            const arrayDataV = dataV.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setVehiculos(arrayDataV);
            const dataB = await db.collection('bomberos').get()
            const arrayDataB = dataB.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setBomberos(arrayDataB);
          }


    const checkBomberos = (value) => {
      debugger;
      const currentIndex = listaBomberos.indexOf(value);
      const newChecked = [...listaBomberos];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      listadoBomberos = newChecked;
      setDBomberos(newChecked);
    };

    // const checkVehiculos = (value) => () => {
    //   debugger;
    //   const listaVehiculos = [];
    //   const currentIndex = listaVehiculos.indexOf(value);
    //   const newChecked = [...listaVehiculos];

    //   if (currentIndex === -1) {
    //     newChecked.push(value);
    //   } else {
    //     newChecked.splice(currentIndex, 1);
    //   }
    //   listadoBomberos = newChecked;
    //   setDBomberos(newChecked);
    // };

    
      
        
    return (
        <div>
          <List dense className={classes.root}>
          <h3>Listado de Bomberos</h3>
              {bomberos.map((bombero) => {
                // const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem key={bombero.id} button>
                    <ListItemText id={bombero.id} primary={bombero.nombre} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        value={bombero.id}
                        name="listadoBomberos"
                        edge="end"
                        onChange={setDBomberos}
                        // onClick={() => checkBomberos(bombero.id)}
                        // inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <List dense className={classes.root}>
              <h3>Móviles Intervinientes</h3>
              {vehiculos.map((vehiculo) => {
                // const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem key={vehiculo.id} button>
                    <ListItemText id={vehiculo.id} primary={vehiculo.tipo} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        // onChange={() => checkVehiculos(vehiculo.id)}
                        // checked={checked.indexOf(vehiculo.id) !== -1}
                        // inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </div>
    )
}

export default DatosBomberos
