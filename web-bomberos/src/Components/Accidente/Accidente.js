import React from 'react';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
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

const Accidente = ({accidente, setAccidente}) => {
    const [contenidoServiciosPublicos, setServiciosPublicos] = React.useState([]);
    const [vehiculos, setVehiculos] = React.useState([]);
    const [bomberos, setBomberos] = React.useState([]);
    const [contenidoTipoAccidente, setTipoAccidente] = React.useState([]);
    const classes = useStyles();
    const { 
        idTipoAccidente,
        idPrimerMovil,
        superficieAfectada,
        superficieEvacuada,
        evacuados,
        autoEvacuados,
        desaparecidos, } = accidente;

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
        const dataSP = await db.collection('serviciosPublicos').get()
        const arrayDataSP = dataSP.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setServiciosPublicos(arrayDataSP);
        const dataTA = await db.collection('tipoAccidente').get()
        const arrayDataTA = dataTA.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setTipoAccidente(arrayDataTA);
      }
    return (
        <div>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="idTipoAccidente"
              name="idTipoAccidente"
              label="Tipo Accidente"
              fullWidth
              onChange={setAccidente}
              value={idTipoAccidente}
              >
              {contenidoTipoAccidente.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.nombre}
            </MenuItem>
          ))}
          </TextField>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="idPrimerMovil"
              name="idPrimerMovil"
              label="Primer Móvil"
              fullWidth
              onChange={setAccidente}
              value={idPrimerMovil}
              >
              {vehiculos.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.tipo} {item.patente}
            </MenuItem>
          ))}
          </TextField>
          </Grid> */}
          
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="superficieAfectada"
              name="superficieAfectada"
              label="Superficie Afectada"
              fullWidth
              onChange={setAccidente}
              value={superficieAfectada}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="superficieEvacuada"
              name="superficieEvacuada"
              label="Superficie Evacuada"
              fullWidth
              onChange={setAccidente}
              value={superficieEvacuada}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="evacuados"
              name="evacuados"
              label="Evacuados"
              fullWidth
              onChange={setAccidente}
              value={evacuados}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="autoEvacuados"
              name="autoEvacuados"
              label="Autoevacuados"
              fullWidth
              onChange={setAccidente}
              value={autoEvacuados}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="desaparecidos"
              name="desaparecidos"
              label="Desaparecidos"
              fullWidth
              onChange={setAccidente}
              value={desaparecidos}
            />
          </Grid>
          </Grid>
          {/* <List dense className={classes.root}>
          <h3>Servicios Públicos Presentes</h3>
          {contenidoServiciosPublicos.map((sp) => {
            // const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem key={sp.id} button>
                <ListItemText id={sp.id} primary={sp.nombre} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={setAccidente}
                    // checked={checked.indexOf(sp.id) !== -1}
                    // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List> */}
        </div>
    )
}

export default Accidente
