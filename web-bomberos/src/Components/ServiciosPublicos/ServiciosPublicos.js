import React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import {withRouter} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const ServiciosPublicos = (props) => {
    debugger;
    const classes = useStyles();
    const [serviciosPublicos, setServiciosPublicos] = React.useState([]);
    const [listaSP, setListaSP] = React.useState([]);
    const [idSiniestro, setIdSiniestro] = React.useState(props.idSini);
    const [idAccidente, setIdAccidente] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    React.useEffect(() => {
        obtenerDatos();
      }, [])

      const obtenerDatos = async () => {
        const dataSP = await db.collection('serviciosPublicos').get()
        const arrayDataSP = dataSP.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setServiciosPublicos(arrayDataSP); 

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
        console.log(setIdAccidente);
      }


      const checkSP = (value) => {
        const currentIndex = listaSP.indexOf(value);
        const newChecked = [...listaSP];
  
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setListaSP(newChecked);
      };

      const guardarArreglo = async () => {
        debugger;
        var listaObjeto = [];
        listaSP.map(item => {
          const objectSP = {
            idServicioPublico: item,
            idAccidente: idAccidente,
          }
          listaObjeto.push(objectSP);
        })
        await listaObjeto.map(a => {
          db.collection('serviciosPublicos_accidente').add(a);
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
        <h3>Servicios Públicos</h3>
            {serviciosPublicos.map((sp) => {
              // const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={sp.id} button>
                  <ListItemText id={sp.id}
                  //  primary={bombero.nombre, bombero.apellido} />
                  >{sp.nombre}</ListItemText>
                  <ListItemSecondaryAction>
                    <Checkbox
                      value={sp.id}
                      name="listadoServiciosPublicos"
                      edge="end"
                      onChange={() => checkSP(sp.id)}
                      // onClick={() => checkBomberos(bombero.id)}
                      // inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => guardarArreglo()}>
            Guardar
          </Button>
        </div>
    )
}

export default withRouter(ServiciosPublicos)
