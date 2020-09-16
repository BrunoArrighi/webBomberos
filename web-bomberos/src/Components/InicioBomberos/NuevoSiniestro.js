import React from 'react';
import { useForm, useStep } from "react-hooks-helper";





import {db} from '../../firebase';
import {auth} from '../../firebase';
import {withRouter} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Alert } from '@material-ui/lab';
import HeridosTable from '../Table/HeridosTable';
import UbicacionSiniestro from '../UbicacionSiniestro/UbicacionSiniestro';
import DatosSolicitantes from '../DatosSolicitantes/DatosSolicitantes';
import DatosParte from '../DatosParte/DatosParte';
import DatosBomberos from '../DatosBomberos/DatosBomberos';
import Accidente from '../Accidente/Accidente';
import Vehiculos from '../Vehiculos/Vehiculos';
import PoliciaMed from '../PoliciaMed/PoliciaMed';
import FallecidosTable from '../Table/FallecidosTable';
import BomberoCargo from '../DatosBomberos/BomberoCargo';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '60%',
      marginLeft: '20%',
      marginRight: '20%',
      marginTop: '30px',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginLeft: "10px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    formCheckbox: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
  }),
);

function getSteps() {
  return ['Ubicación del Siniestro',
   'Datos Solicitante',
    'Datos Del Parte',
      'Accidente',
      'Bombero',
  'Vehículos',
'Móvil Policial'];
}


const datosUbicacionSiniestro = {
      idDirRut: '',
      calle: null,
      nroCalle: null,
      calleUno: null,
      calleDos: null,
      pisoNro: null,
      depto: null,
      nombreRuta: null,
      km: null,
      idTipoZona: '',
      tipoServicio: '',
}

const datosSolicitante = {
      nombreSolicitante: '',
      apellidoSolicitante: '',
      telefonoSolicitante: '',
      dniSolicitante: '',
}

const datosParte = {
      nroParte: '',
      horaLlamado: '',
      horaToque: '',
      fechaHoraSalida: '',
      fechaHoraLlegada: '',
}

const bomberoCargo = {
  idCuartelero: '',
  idBomberoCargo: '',
}

const datosAccidente = {
      idTipoAccidente: '',
      idPrimerMovil: '',
      superficieAfectada: '',
      superficieEvacuada: '',
      evacuados: 0,
      autoEvacuados: 0,
      desaparecidos: 0,
      // cuartelero: '',
      // bomberoCargo: '',
}

const datosVehiculos = {
      idTipoVehiculoUno: '',
      nombreConductorUno: '',
      apellidoConductorUno: '',
      dniConductorUno: '',
      domicilioConductorUno: '',
      vehiculoMarcaUno: '',
      dominioUno: '',
      dominioAcopladoUno: '',
      segurosUno: '',
      reconocimientoUno: '',
      disposicionUno: '',
      idTipoVehiculoDos: '',
      nombreConductorDos: '',
      apellidoConductorDos: '',
      dniConductorDos: '',
      domicilioConductorDos: '',
      vehiculoMarcaDos: '',
      dominioDos: '',
      dominioAcopladoDos: '',
      segurosDos: '',
      reconocimientoDos: '',
      disposicionDos: '',
}

const datosPoliciaMedicos = {
    movilNro: '',
    movilCargo: '',
    medicoCargo: '',
    guardiaNro: '',
    folioNro: '',
}

const NuevoSiniestro = (props) => {
  debugger;
  const [ubicacionSiniestro, setUbicacionSiniestro] = useForm(datosUbicacionSiniestro);
  const [solicitante, setSolicitante] = useForm(datosSolicitante);
  const [parte, setParte] = useForm(datosParte);
  const [bombero, setBombero] = useForm(bomberoCargo);
  const [accidente, setAccidente] = useForm(datosAccidente);
  const [vehiculos, setVehiculos] = useForm(datosVehiculos);
  const [policiaMed, setPoliciaMed] = useForm(datosPoliciaMedicos);
    const classes = useStyles();
    const [error, setError] = React.useState('');
  const [activeStep, setActiveStep] = React.useState(0);
  
  const steps = getSteps();
  const myForm = React.useRef(null);
  const propsUbicacionSiniestro = {ubicacionSiniestro, setUbicacionSiniestro};
  const propsSolicitante = {solicitante, setSolicitante};
  const propsParte = {parte, setParte};
  const propsAccidente = {accidente, setAccidente};
  const propsBombero = {bombero, setBombero};
  const propsVehiculos = {vehiculos, setVehiculos};
  const propsPoliciaMed = {policiaMed, setPoliciaMed};

  React.useEffect(() => {

    if(auth.currentUser) {
      const obtenerDatos = async () => {
        debugger;
        try {
          // const db = firebase.firestore()
        } catch (error) {
          console.log(error)
        }
  
      }
  
      obtenerDatos()
    } else {
      props.history.push('/login')
    }
  }, [props.history])
// }, [])


  

  // const listadoServiciosPublicos = (value) => () => {
  //   debugger;
  //   const currentIndex = listaServiciosPublicos.indexOf(value);
  //   const newChecked = [...listaVehiculos];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setListaServiciosPublicos(newChecked);
  // };

  const guardarSiniestro = async () => {
    // const db = firebase.firestore()
    debugger;
    const dataSiniestroA = await db.collection('siniestros').orderBy('numeroSiniestro', 'desc').get();
          const arraySiniestrosA = dataSiniestroA.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          debugger;
          var numeroSiniestro = 0;
          if(arraySiniestrosA.length === 0) {
            numeroSiniestro = 0;
          } else {
            numeroSiniestro = arraySiniestrosA[0].numeroSiniestro;
          }
          
          const nuevoNumeroSiniestro = (numeroSiniestro + 1);
    const soli = {
      nombre: solicitante.nombreSolicitante,
      apellido: solicitante.apellidoSolicitante,
      telefono: solicitante.telefonoSolicitante,
      dni: solicitante.dniSolicitante,
    }
    await db.collection('solicitantes').add(soli);
    const dataSolicitante = await db.collection('solicitantes').get()
    const arraySolicitantes = dataSolicitante.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    var dataS = '';
    arraySolicitantes.map(a => {
      if(a.dni === soli.dni) {
        dataS = a.id;
      }
    })
    const sini = {
            idSolicitante: dataS,
            estado: true,
            numeroSiniestro: nuevoNumeroSiniestro,
            idDirRut: ubicacionSiniestro.idDirRut,
            calle: ubicacionSiniestro.calle,
            nroCalle: ubicacionSiniestro.nroCalle,
            calleUno: ubicacionSiniestro.calleUno,
            calleDos: ubicacionSiniestro.calleDos,
            pisoNro: ubicacionSiniestro.pisoNro,
            depto: ubicacionSiniestro.depto,
            nombreRuta: ubicacionSiniestro.nombreRuta,
            km: ubicacionSiniestro.km,
            idTipoZona: ubicacionSiniestro.idTipoZona,
            tipoServicio: ubicacionSiniestro.tipoServicio,
            nroParte: parte.nroParte,
            horaLlamado: parte.horaLlamado,
            horaToque: parte.horaToque,
            fechaHoraSalida: parte.fechaHoraSalida,
            fechaHoraLlegada: parte.fechaHoraLlegada, 
          }
          debugger;
          await db.collection('siniestros').add(sini);
          const dataSiniestro = await db.collection('siniestros').get()
          const arraySiniestros = dataSiniestro.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          var dataSini = '';
          arraySiniestros.map(a => {
            if(a.numeroSiniestro === sini.numeroSiniestro) {
              dataSini = a.id;
            }
          })
          const acci = {
            idSiniestro: dataSini,
            idTipoAccidente: accidente.idTipoAccidente,
            idPrimerMovil: accidente.idPrimerMovil,
            superficieAfectada: accidente.superficieAfectada,
            superficieEvacuada: accidente.superficieEvacuada,
            evacuados: accidente.evacuados,
            autoEvacuados: accidente.autoEvacuados,
            desaparecidos: accidente.desaparecidos,
            idCuartelero: bombero.idCuartelero,
            idBomberoCargo: bombero.idBomberoCargo,
            movilNro: policiaMed.movilNro,
            movilCargo: policiaMed.movilCargo,
            medicoCargo: policiaMed.medicoCargo,
            guardiaNro: policiaMed.guardiaNro,
            folioNro: policiaMed.folioNro,
          }
          await db.collection('accidentes').add(acci);
          const dataAccidente = await db.collection('accidentes').get()
          const arrayAccidentes = dataAccidente.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          var dataAcci = '';
          arrayAccidentes.map(a => {
            if(a.idSiniestro === dataSini) {
              dataAcci = a.id;
            }
          })
          const vA = {
            idAccidente: dataAcci,
            idTipoVehiculo: vehiculos.idTipoVehiculoUno,
            nombreConductorUno: vehiculos.nombreConductorUno,
            apellidoConductorUno: vehiculos.apellidoConductorUno,
            dniConductorUno: vehiculos.dniConductorUno,
            domicilioConductorUno: vehiculos.domicilioConductorUno,
            vehiculoMarcaUno: vehiculos.vehiculoMarcaUno,
            dominioUno: vehiculos.dominioUno,
            dominioAcopladoUno: vehiculos.dominioAcopladoUno,
            segurosUno: vehiculos.segurosUno,
            reconocimientoUno: vehiculos.reconocimientoUno,
            disposicionUno: vehiculos.disposicionUno,
            idTipoVehiculoDos: vehiculos.idTipoVehiculoDos,
            nombreConductorDos: vehiculos.nombreConductorDos,
            apellidoConductorDos: vehiculos.apellidoConductorDos,
            dniConductorDos: vehiculos.dniConductorDos,
            domicilioConductorDos: vehiculos.domicilioConductorDos,
            vehiculoMarcaDos: vehiculos.vehiculoMarcaDos,
            dominioDos: vehiculos.dominioDos,
            dominioAcopladoDos: vehiculos.dominioAcopladoDos,
            segurosDos: vehiculos.segurosDos,
            reconocimientoDos: vehiculos.reconocimientoDos,
            disposicionDos: vehiculos.disposicionDos,
          }
          await db.collection('vehiculos_accidente').add(vA);
          props.history.push('/inicio-bomberos');

  }

  



  const handleNext = () => {
    debugger;
    if (!myForm.current.checkValidity()) {
      setError('Por favor ingrese los campos requeridos');
      return;
   }
   setError('');
   if((activeStep + 1) === steps.length) {
    guardarSiniestro();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   } else {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   }
    
  };

  const handleBack = () => {
    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    debugger;
    setActiveStep(0);
  };


  return (
      <div>
          <NavBar />
          <div className={classes.instructions}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/inicio-bomberos" 
              // onClick={handleClick}
              >
                Inicio-Bomberos
              </Link>
              <Typography color="textPrimary">Nuevo Siniestro</Typography>
            </Breadcrumbs>
          </div>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <form ref={myForm}>
      {
              error ? (
                <Alert severity="error">{error}</Alert>    
            ) : null
            }
        {activeStep === 0 ? (
          <UbicacionSiniestro {...propsUbicacionSiniestro}/>
        ) : 
        activeStep === 1 ? (
          <DatosSolicitantes {...propsSolicitante}/>
          ) : activeStep === 2 ? (
          <DatosParte {...propsParte}/>
        ) : activeStep === 3 ? (
          <Accidente {...propsAccidente}/>
        ) : activeStep === 4 ? (
          <BomberoCargo {...propsBombero}/>
        ) : activeStep === 5 ? (
          <Vehiculos {...propsVehiculos}/>
          ) : activeStep === 6 ? (
            <PoliciaMed {...propsPoliciaMed}/>
        ) : null}
        
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}></Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className={classes.instructions}>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              > 
                Atrás
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Guardar' : 'Siguiente'}
              </Button>
            </div>
          </div>
        )}
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default withRouter(NuevoSiniestro)
