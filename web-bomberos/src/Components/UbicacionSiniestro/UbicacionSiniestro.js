import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import {withRouter} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import NuevoSiniestro from '../InicioBomberos/NuevoSiniestro';
import { Button } from '@material-ui/core';

const UbicacionSiniestro = ({ubicacionSiniestro, setUbicacionSiniestro, navigation}) => {
  debugger;
    const { 
      idDirRut,
       calle,
      nroCalle,
      calleUno,
      calleDos,
      pisoNro,
      depto,
      nombreRuta,
      km,
      idTipoZona,
      tipoServicio } = ubicacionSiniestro;
 


    // const { next } = navigation;

    //contenido select
    const [contenidoDirRut, setContenidoDirRut] = React.useState([]);
    const [contenidoTipoZona, setContenidoTipoZona] = React.useState([]);
    // const [siniestro, setSiniestro] = React.useState([]);
    // ubicacion del siniestro
//   const [selectDirRut, setSelectDirRut] = React.useState('');
//   const [calle, setCalle] = React.useState('');
//   const [calleNro, setCalleNro] = React.useState('');
//   const [calleUno, setCalleUno] = React.useState('');
//   const [calleDos, setCalleDos] = React.useState('');
//   const [pisoNro, setPisoNro] = React.useState('');
//   const [depto, setDepto] = React.useState('');
//   const [selectTipoZona, setSelectTipoZona] = React.useState('');
//   const [tipoServicio, setTipoServicio] = React.useState('');

  React.useEffect(() => {
    obtenerDatos();
  }, [])

  const obtenerDatos = async () => {
      const dataDirRut = await db.collection('dirRut').get()
      const arrayDataDirRut = dataDirRut.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setContenidoDirRut(arrayDataDirRut);
      const dataTipoZona = await db.collection('tipoZona').get()
      const arrayDataTipoZona = dataTipoZona.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setContenidoTipoZona(arrayDataTipoZona); 
  }


  // const handleNext = () => {
  //   debugger;
  //   if (!myForm.current.checkValidity()) {
  //     // setError('Por favor ingrese los campos requeridos');
  //     return;
  //  }
  // //  setError('');
  //  if(activeStep === steps.length) {
  //   guardarSiniestro();
  //  } else {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //  }
    
  // };
  


    return (
        <div>
            <Grid container spacing={3}>
{/* <Grid item xs={12} sm={6}>
  <TextField
    required
    id="numeroSiniestro"
    name="numeroSiniestro"
    label="Numero Siniestro"
    onChange={setUbicacionSiniestro}
    value={numeroSiniestro}
    fullWidth
  />
</Grid> */}
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="idDirRut"
    select
    name="idDirRut"
    label="Dir o Rut"
    fullWidth
    onChange={setUbicacionSiniestro}
    value={idDirRut}
  >
    {
    contenidoDirRut.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.nombre}
    </MenuItem>
  ))}
    </TextField>
</Grid>
</Grid>
{
  idDirRut === 'LEOQKql0EYxcdcTs9OYS' ? (
    <Grid container spacing={3}>
    <Grid item xs={12} sm={3}>
  <TextField
    required
    id="calle"
    name="calle"
    label="Calle"
    onChange={setUbicacionSiniestro}
    value={calle}

  />
</Grid>
<Grid item xs={12} sm={3}>
  <TextField
    required
    type="number"
    id="nroCalle"
    name="nroCalle"
    label="Numero Calle"
    onChange={setUbicacionSiniestro}
    value={nroCalle}
    // fullWidth
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="calleUno"
    name="calleUno"
    label="Entre Calle 1"
    onChange={setUbicacionSiniestro}
    value={calleUno}
    fullWidth
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="calleDos"
    name="calleDos"
    label="Entre Calle 2"
    fullWidth
    onChange={setUbicacionSiniestro}
    value={calleDos}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    type="number"
    id="pisoNro"
    name="pisoNro"
    label="Piso Nro"
    fullWidth
    onChange={setUbicacionSiniestro}
    value={pisoNro}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    id="depto"
    name="depto"
    label="Depto"
    fullWidth
    onChange={setUbicacionSiniestro}
    value={depto}
  />
</Grid>
</Grid>
   ) :
  idDirRut === 'UsPPqK1tqtkEuM5hVonN' ? (
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <TextField
        // type="text"
        id="nombreRuta"
        name="nombreRuta"
        label="Nombre Ruta"
        fullWidth
        onChange={setUbicacionSiniestro}
        value={nombreRuta}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        type="number"
        id="km"
        name="km"
        label="KM"
        fullWidth
        onChange={setUbicacionSiniestro}
        value={km}
      />
    </Grid>
    </Grid>
  ) : null }
<Grid container spacing={3}>
<Grid item xs={12} sm={6}>
  <TextField
    required
    id="idTipoZona"
    select
    name="idTipoZona"
    label="Tipo de Zona"
    fullWidth
    onChange={setUbicacionSiniestro}
    value={idTipoZona}
  >
    {contenidoTipoZona.map((item) => (
    <MenuItem key={item.id} value={item.id}>
      {item.nombre}
    </MenuItem>
  ))}
    </TextField>
</Grid>


<Grid item xs={12} sm={6}>
  <TextField
    required
    id="tipoServicio"
    name="tipoServicio"
    label="Tipo Servicio"
    fullWidth
    onChange={setUbicacionSiniestro}
    value={tipoServicio}
  />
</Grid>
</Grid>
        
        {/* <div>
        <Button variant="outlined" onClick={next}> Siguiente</Button>
        </div> */}
        </div>
    )
}

export default UbicacionSiniestro
