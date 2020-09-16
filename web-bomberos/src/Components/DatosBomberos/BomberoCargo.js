import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {db} from '../../firebase';
import MenuItem from '@material-ui/core/MenuItem';

const BomberoCargo = ({bombero, setBombero}) => {
    const { 
        idCuartelero,
        idBomberoCargo,
    } = bombero;
    const [bomberos, setBomberos] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos();
      })

      const obtenerDatos = async () => {
        const dataB = await db.collection('bomberos').get()
        const arrayDataB = dataB.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setBomberos(arrayDataB);
      }


    return (
        <div>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="idCuartelero"
              name="idCuartelero"
              label="Cuartelero"
              fullWidth
              onChange={setBombero}
              value={idCuartelero}
            >
              {bomberos.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.nombre} {item.apellido}
            </MenuItem>
          ))}
          </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="idBomberoCargo"
              name="idBomberoCargo"
              label="Bombero a Cargo"
              fullWidth
              onChange={setBombero}
              value={idBomberoCargo}
            >
              {bomberos.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.nombre} {item.apellido}
            </MenuItem>
          ))}
          </TextField>
          </Grid>
          </Grid>
        </div>
    )
}

export default BomberoCargo
