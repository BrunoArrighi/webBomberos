import React from 'react';
import {withRouter} from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import {db} from '../../firebase';
import { useForm, useStep } from "react-hooks-helper";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import moment from 'react-moment';
import 'moment/locale/es';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
    marginLeft: '5%',
    marginRight: '5%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

 

function getSteps() {
    return ['Ubicación del Siniestro',
     'Datos Solicitante',
      'Datos Del Parte',
        'Accidente',
        'Bombero',
    'Vehículos',
  'Móvil Policial'];
  }
  

  

const ModalSiniestro = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const steps = getSteps();
  const [activeStep, setActiveStep] = React.useState(0);
  const idSiniestro = props.location.state.detail.id;
  const idDirRut = props.location.state.detail.idDirRut;
  const idSolicitante = props.location.state.detail.idSolicitante;
  const idTipoZona = props.location.state.detail.idTipoZona;
  const id = {
    idSiniestro: idSiniestro,
    idDirRut: idDirRut,
    idTipoZona: idTipoZona,
  }
  var ads = [];
  const [ubicacionSiniestro, setUbicacionSiniestro] = useForm(id);
  const propsidUbicacionSiniestro = {ubicacionSiniestro, setUbicacionSiniestro};
  
  // getModalStyle is not a pure function, we roll the style only on the first render

  // const [ubicacionSiniestro, setUbicacionSiniestro] = React.useState({});
  const [siniestro, setSiniestro] = React.useState([]);
  // const [dirRut, setDirRut] = React.useState([]);
  const [solicitante, setSolicitante] = React.useState([]);
  // const [tipoZona, setTipoZona] = React.useState([]);
  const [accidente, setAccidente] = React.useState([]);
  
  const [bomberoCargo, setBomberoCargo] = React.useState([]);
  const [cuartelero, setCuartelero] = React.useState([]);
  //siniestro
  const [km, setKm] = React.useState([]);
    const [dirRut, setDirRut] = React.useState('');
    const [tipoZona, setTipoZona] = React.useState('');
    const [calle, setCalle] = React.useState([]);
    const [depto, setDepto] = React.useState([]);
    const [nroCalle, setNroCalle] = React.useState([]);
    const [calleUno, setCalleUno] = React.useState([]);
    const [calleDos, setCalleDos] = React.useState([]);
    const [pisoNro, setPisoNro] = React.useState([]);
    const [nombreRuta, setNombreRuta] = React.useState([]);
    const [tipoServicio, setTipoServicio] = React.useState([]);
    const [nroParte, setNroParte] = React.useState([]);
    const [horaLlamado, setHoraLlamado] = React.useState([]);
    const [horaToque, setHoraToque] = React.useState([]);
    const [fechaHoraSalida, setFechaHoraSalida] = React.useState([]);
    const [fechaHoraLlegada, setFechaHoraLlegada] = React.useState([]);
    // Solicitante
    const [nombreSolicitante, setNombreSolicitante] = React.useState([]);
    const [apellidoSolicitante, setApellidoSolicitante] = React.useState([]);
    const [telefonoSolicitante, setTelefonoSolicitante] = React.useState([]);
    const [dniSolicitante, setDniSolicitante] = React.useState([]);
    // accidente
    const [tipoAccidente, setTipoAccidente] = React.useState('');
    const [superficieAfectada, setSuperficieAfectada] = React.useState([]);
    const [superficieEvacuada, setSuperficieEvacuada] = React.useState([]);
    const [evacuados, setEvacuados] = React.useState([]);
    const [autoevacuados, setAutoevacuados] = React.useState([]);
    const [desaparecidos, setDesaparecidos] = React.useState([]);
    // vehiculos

  var arrayDataS = {};
  // var idDirRut = '';
  // var idTipoZona = '';

  React.useEffect(() => {
    obtenerDatos();
  }, [])
  

  const obtenerDatos = async () => {
      debugger;
      // const idSiniestro = props.location.state.detail.id;
      // idDirRut = props.location.state.detail.idDirRut;
      // const idSolicitante = props.location.state.detail.idSolicitante;
      // idTipoZona = props.location.state.detail.idTipoZona;
    const dataS = await db.collection('siniestros').doc(idSiniestro).get()
    const arrayDataS = dataS.data();
      setKm(arrayDataS.km)
      setTipoServicio(arrayDataS.tipoServicio)
      setCalle(arrayDataS.calle);
      setCalleUno(arrayDataS.calleUno);
      setCalleDos(arrayDataS.calleDos);
      setDepto(arrayDataS.depto);
      setNombreRuta(arrayDataS.nombreRuta);
      setPisoNro(arrayDataS.pisoNro);
      setNroCalle(arrayDataS.nroCalle);
      setNroParte(arrayDataS.nroParte);
      setHoraLlamado(arrayDataS.horaLlamado);
      setHoraToque(arrayDataS.horaToque);
      // const formatFechaSalida = moment(arrayDataS.fechaHoraSalida).format('LLL');
      // const formatFechaLlegada =  moment(arrayDataS.fechaHoraLlegada).format('LLL');
      setFechaHoraSalida(arrayDataS.fechaHoraSalida);
      setFechaHoraLlegada(arrayDataS.fechaHoraLlegada);
    const dataDR = await db.collection('dirRut').doc(idDirRut).get()
    const arrayDataDR = dataDR.data();
    setDirRut(arrayDataDR.nombre);
    const dataSoli = await db.collection('solicitantes').doc(idSolicitante).get()
    const arrayDataSoli = dataSoli.data();
    setNombreSolicitante(arrayDataSoli.nombre);
    setApellidoSolicitante(arrayDataSoli.apellido);
    setTelefonoSolicitante(arrayDataSoli.nombre);
    setDniSolicitante(arrayDataSoli.dni);
    var adsoli = [];
    adsoli.push(arrayDataSoli);

    setSolicitante(adsoli);
    // setSolicitante(arrayDataSoli);
    const dataTZ = await db.collection('tipoZona').doc(idTipoZona).get()
    const arrayDataTZ = dataTZ.data();
    setTipoZona(arrayDataTZ.nombre);
    // // setSolicitante(arrayDataTZ);
    obtenerDatosAccidente();
    
  }

  const obtenerDatosAccidente = async () => {
    debugger;
    const dataA = await db.collection('accidentes').get();
    debugger;
    const arrayDataA = dataA.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    const acci = [];
    arrayDataA.map(item => {
        if(item.idSiniestro === idSiniestro) {
          debugger;
            acci.push(item);
        }
    })
    setSuperficieAfectada(acci[0].superficieAfectada);
    setSuperficieEvacuada(acci[0].superficieEvacuada);
    setEvacuados(acci[0].evacuados);
    setAutoevacuados(acci[0].autoEvacuados);
    setDesaparecidos(acci[0].desaparecidos);
    debugger;
    // setAccidente(acci);
    // setAccidente(accidente);
    const dataTA = await db.collection('tipoAccidente').doc(acci[0].idTipoAccidente).get()
    const arrayDataTA = dataTA.data();
    debugger;
    // adta.push(arrayDataTA);
    setTipoAccidente(arrayDataTA.nombre);
    // setTipoAccidente(arrayDataTA);
    const dataB = await db.collection('bomberos').doc(acci[0].idBomberoCargo).get()
    const arrayDataB = dataB.data();
    var adb = [];
    adb.push(arrayDataB);
    setBomberoCargo(adb);
    // setBomberoCargo(arrayDataB);
    const dataC = await db.collection('bomberos').doc(acci[0].idCuartelero).get()
    const arrayDataC = dataC.data();
    var adc = [];
    adc.push(arrayDataC);
    setCuartelero(adc);
    // setCuartelero(arrayDataC);
  }


    return (
      <div>
        <NavBar />
      <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Parte - Ubicación</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Número Parte:{nroParte} - Hora Llamado: {horaLlamado} - Hora Salida: {horaToque} <br/>
            Fecha y Hora de Salida: {fechaHoraSalida} - Fecha y Hora de Llegada: {fechaHoraLlegada}
            <hr />
            {
              dirRut === "Ruta" ? (
                dirRut + " " + nombreRuta + " - KM " + km
              ) : (
                dirRut + calle + nroCalle + "Entre: " + calleUno + " " + calleDos
              )
            } <br />
           Zona: {tipoZona} - Servicio: {tipoServicio}
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Solicitante</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {nombreSolicitante} {apellidoSolicitante} - DNI: {dniSolicitante} - Teléfono: {telefonoSolicitante}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Accidente</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tipo Accidente: {tipoAccidente} - Superficie Afectada: {superficieAfectada} - Superficie Evacuada: {superficieEvacuada} <br />
            Evacuados: {evacuados} - Autoevacuados: {autoevacuados} - Desaparecidos: {desaparecidos}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vehículo 1: 
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <Footer />
      </div>
    )
}

export default withRouter(ModalSiniestro)
