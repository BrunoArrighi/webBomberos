import React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
      
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '30px',
    },
    button: {
      marginLeft: '80px',
    },
  }),
);

const DatosBomberos = (props) => {
  debugger;
    const classes = useStyles();
    const [bomberos, setBomberos] = React.useState([]);
    const [vehiculos, setVehiculos] = React.useState([]);
    const [listaBomberos, setListaBomberos] = React.useState([]);
    const [listaVehiculos, setListaVehiculos] = React.useState([]);
    const [idSiniestro, setIdSiniestro] = React.useState(props.id);
    const [success, setSuccess] = React.useState(false);

    React.useEffect(() => {
      obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
      const dataB = await db.collection('bomberos').get()
      const arrayDataB = dataB.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setBomberos(arrayDataB); 

      const dataV = await db.collection('vehiculos').get();
      const arrayDataV = dataV.docs.map(doc => ({ id: doc.id, ...doc.data()}))
      setVehiculos(arrayDataV);
    }   


    const checkBomberos = (value) => {
      const currentIndex = listaBomberos.indexOf(value);
      const newChecked = [...listaBomberos];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setListaBomberos(newChecked);
    };

    const checkVehiculos = (value) => {
      debugger;
      const currentIndex = listaVehiculos.indexOf(value);
      const newChecked = [...listaVehiculos];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setListaVehiculos(newChecked);
    };

    const guardarArreglos = async () => {
      debugger;
      var listaObjetoBombero = [];
      listaBomberos.map(item => {
        const objectBombero = {
          idBombero: item,
          idSiniestro: idSiniestro,
        }
        listaObjetoBombero.push(objectBombero);
      })
      await listaObjetoBombero.map(a => {
        db.collection('bomberos_siniestro').add(a);
      })
      var listaObjetoVehiculo = [];
      listaVehiculos.map(item => {
        const objectVehiculo = {
          idVehiculo: item,
          idSiniestro: idSiniestro,
        }
        listaObjetoVehiculo.push(objectVehiculo);
      })
      await listaObjetoVehiculo.map(v => {
        db.collection('vehiculos_siniestro').add(v);
      })
      setSuccess(true);
    }
      
        
    return (
        <div>
          {
            success === true ? (
              <Alert severity="success">Se ha Guardado con éxito. Refresque el navegador para verlo.</Alert>
            ) : null
          }
          <List dense className={classes.root}>
          <h3>Listado de Bomberos</h3>
              {bomberos.map((bombero) => {
                // const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem key={bombero.id} button>
                    <ListItemText id={bombero.id}
                    //  primary={bombero.nombre, bombero.apellido} />
                    >{bombero.nombre} {bombero.apellido}</ListItemText>
                    <ListItemSecondaryAction>
                      <Checkbox
                        value={bombero.id}
                        name="listadoBomberos"
                        edge="end"
                        onChange={() => checkBomberos(bombero.id)}
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
                    <ListItemText id={vehiculo.id} primary={vehiculo.tipo, vehiculo.patente} />
                    <ListItemSecondaryAction>
                      <Checkbox
                      value={vehiculo.id}
                      name="listadoVehiculos"
                        edge="end"
                        onChange={() => checkVehiculos(vehiculo.id)}
                        // checked={checked.indexOf(vehiculo.id) !== -1}
                        // inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => guardarArreglos()}>
              Guardar
            </Button>
          </div>
    )
}

export default withRouter(DatosBomberos)
