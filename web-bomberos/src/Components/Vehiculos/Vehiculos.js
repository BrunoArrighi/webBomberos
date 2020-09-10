import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import {db} from '../../firebase';
import {auth} from '../../firebase';

const Vehiculos = ({vehiculos, setVehiculos}) => {
    const { 
        idTipoVehiculoUno,
      nombreConductorUno,
      apellidoConductorUno,
      dniConductorUno,
      domicilioConductorUno,
      vehiculoMarcaUno,
      dominioUno,
      dominioAcopladoUno,
      segurosUno,
      reconocimientoUno,
      disposicionUno,
      idTipoVehiculoDos,
      nombreConductorDos,
      apellidoConductorDos,
      dniConductorDos,
      domicilioConductorDos,
      vehiculoMarcaDos,
      dominioDos,
      dominioAcopladoDos,
      segurosDos,
      reconocimientoDos,
      disposicionDos } = vehiculos;
      const [tipoVehiculos, setTipoVehiculos] = React.useState([]);


      React.useEffect(() => {
        obtenerDatos();
      })

      const obtenerDatos = async () => {
        debugger;
        const dataTV = await db.collection('tipo_Vehiculo').get()
        const arrayDataTV = dataTV.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setTipoVehiculos(arrayDataTV);
      }

    return (
        <div>
            <h3>Vehículo 1</h3>
          <Grid container spacing={3}>
            
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="idTipoVehiculoUno"
              name="idTipoVehiculoUno"
              label="Tipo Vehículo"
              fullWidth
              onChange={setVehiculos}
              value={idTipoVehiculoUno}
            >
              {tipoVehiculos.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.nombre}
                </MenuItem>
              ))}
              </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="nombreConductorUno"
              name="nombreConductorUno"
              label="Nombre Conductor"
              fullWidth
              onChange={setVehiculos}
              value={nombreConductorUno}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="apellidoConductorUno"
              name="apellidoConductorUno"
              label="Apellido Conductor"
              fullWidth
              onChange={setVehiculos}
              value={apellidoConductorUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dniConductorUno"
              name="dniConductorUno"
              label="DNI Conductor"
              fullWidth
              onChange={setVehiculos}
              value={dniConductorUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="domicilioConductorUno"
              name="domicilioConductorUno"
              label="Domicilio Conductor"
              fullWidth
              onChange={setVehiculos}
              value={domicilioConductorUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="vehiculoMarcaUno"
              name="vehiculoMarcaUno"
              label="Marca Vehículo"
              fullWidth
              onChange={setVehiculos}
              value={vehiculoMarcaUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dominioUno"
              name="dominioUno"
              label="Dominio"
              fullWidth
              onChange={setVehiculos}
              value={dominioUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dominioAcopladoUno"
              name="dominioAcopladoUno"
              label="Dominio Acoplado"
              fullWidth
              onChange={setVehiculos}
              value={dominioAcopladoUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="segurosUno"
              name="segurosUno"
              label="Seguros"
              fullWidth
              onChange={setVehiculos}
              value={segurosUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="reconocimientoUno"
              name="reconocimientoUno"
              label="Reconocimiento"
              fullWidth
              onChange={setVehiculos}
              value={reconocimientoUno}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="disposicionUno"
              name="disposicionUno"
              label="Disposición"
              fullWidth
              onChange={setVehiculos}
              value={disposicionUno}
            />
          </Grid>
          </Grid>
          <h3>Vehículo 2</h3>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="idtipoVehiculoDos"
              name="idTipoVehiculoDos"
              label="Tipo Vehículo"
              fullWidth
              onChange={setVehiculos}
              value={idTipoVehiculoDos}
            >
              {tipoVehiculos.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.nombre}
                </MenuItem>
              ))}
              </TextField>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="nombreConductorDos"
              name="nombreConductorDos"
              label="Nombre Conductor"
              fullWidth
              onChange={setVehiculos}
              value={nombreConductorDos}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="apellidoConductorDos"
              name="apellidoConductorDos"
              label="Apellido Conductor"
              fullWidth
              onChange={setVehiculos}
              value={apellidoConductorDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dniConductorDos"
              name="dniConductorDos"
              label="DNI Conductor"
              fullWidth
              onChange={setVehiculos}
              value={dniConductorDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="domicilioConductorDos"
              name="domicilioConductorDos"
              label="Domicilio Conductor"
              fullWidth
              onChange={setVehiculos}
              value={domicilioConductorDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="vehiculoMarcaDos"
              name="vehiculoMarcaDos"
              label="Marca Vehículo"
              fullWidth
              onChange={setVehiculos}
              value={vehiculoMarcaDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dominioDos"
              name="dominioDos"
              label="Dominio"
              fullWidth
              onChange={setVehiculos}
              value={dominioDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dominioAcopladoDos"
              name="dominioAcopladoDos"
              label="Dominio Acoplado"
              fullWidth
              onChange={setVehiculos}
              value={dominioAcopladoDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="segurosDos"
              name="segurosDos"
              label="Seguros"
              fullWidth
              onChange={setVehiculos}
              value={segurosDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="reconocimientoDos"
              name="reconocimientoDos"
              label="Reconocimiento"
              fullWidth
              onChange={setVehiculos}
              value={reconocimientoDos}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="disposicionDos"
              name="disposicionDos"
              label="Disposición"
              fullWidth
              onChange={setVehiculos}
              value={disposicionDos}
            />
          </Grid>
          </Grid>
          </div>
    )
}   

export default Vehiculos
