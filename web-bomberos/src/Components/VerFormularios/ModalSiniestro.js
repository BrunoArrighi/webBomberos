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
import DatosBomberos from '../DatosBomberos/DatosBomberos';
import ServiciosPublicos from '../ServiciosPublicos/ServiciosPublicos';
import CivilesAccidente from '../CivilesAccidente/CivilesAccidente';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
  rootCard: {
    minWidth: 275,
    height: "100%",
  },
  title: {
    fontSize: 14,
  },
  instructions: {
    marginLeft: "10px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



const ModalSiniestro = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const idAccidente = [];
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
    const [tipoVehiculoUno, setTipoVehiculoUno] = React.useState('');
    const [nombreConductorUno, setNombreConductorUno] = React.useState([]);
    const [apellidoConductorUno, setApellidoConductorUno] = React.useState([]);
    const [dniConductorUno, setDniConductorUno] = React.useState([]);
    const [domicilioConductorUno, setDomicilioConductorUno] = React.useState([]);
    const [marcaUno, setMarcaUno] = React.useState([]);
    const [dominioUno, setDominioUno] = React.useState([]);
    const [dominioAcopladoUno, setDominioAcopladoUno] = React.useState([]);
    const [seguroUno, setSeguroUno] = React.useState([]);
    const [reconocimientoUno, setReconocimientoUno] = React.useState([]);
    const [disposicionUno, setDisposicionUno] = React.useState([]);
    const [tipoVehiculoDos, setTipoVehiculoDos] = React.useState('');
    const [nombreConductorDos, setNombreConductorDos] = React.useState([]);
    const [apellidoConductorDos, setApellidoConductorDos] = React.useState([]);
    const [dniConductorDos, setDniConductorDos] = React.useState([]);
    const [domicilioConductorDos, setDomicilioConductorDos] = React.useState([]);
    const [marcaDos, setMarcaDos] = React.useState([]);
    const [dominioDos, setDominioDos] = React.useState([]);
    const [dominioAcopladoDos, setDominioAcopladoDos] = React.useState([]);
    const [seguroDos, setSeguroDos] = React.useState([]);
    const [reconocimientoDos, setReconocimientoDos] = React.useState([]);
    const [disposicionDos, setDisposicionDos] = React.useState([]);
    //bomberos
    var arrayBSini = [];
    var arrayVSini = [];
    var bomberosMostrar = [];
    var vehiculosMostrar = [];
    const [bomberosSiniestro, setBomberosSiniestro] = React.useState([]); 
    const [vehiculosSiniestro, setVehiculosSiniestro] = React.useState([]); 
    const [existe, setExiste] = React.useState(true);
    const [existeVehi, setExisteVehi] = React.useState(true);
    // servicios publicos
    const [existeSP, setExisteSP] = React.useState(true);
    const [spa, setSpa] = React.useState([]); 
    var spMostrar = [];
    var arraySPa = [];
    // Heridos y Fallecidos
    const [existeHA, setExisteHA] = React.useState(true);
    const [herFall, setHerFall] = React.useState([]);
    var haMostrar = [];
    var arrayHA = [];

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
    setTelefonoSolicitante(arrayDataSoli.telefono);
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
    const dataA = await db.collection('accidentes').get();

    const arrayDataA = dataA.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    const acci = [];
    arrayDataA.map(item => {
        if(item.idSiniestro === idSiniestro) {
            acci.push(item);
        }
    })
    debugger;
    idAccidente.push(acci[0].id);
    setSuperficieAfectada(acci[0].superficieAfectada);
    setSuperficieEvacuada(acci[0].superficieEvacuada);
    setEvacuados(acci[0].evacuados);
    setAutoevacuados(acci[0].autoEvacuados);
    setDesaparecidos(acci[0].desaparecidos);

    const dataVA = await db.collection('vehiculos_accidente').get();
    const arrayDataVA = dataVA.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    var vehi = [];
    arrayDataVA.map(a => {
      if(a.idAccidente === acci[0].id) {
        vehi.push(a)
      }
    })
    if(vehi.length > 0) {
      const dataTVU = await db.collection('tipo_Vehiculo').doc(vehi[0].idTipoVehiculo).get();
      const arrayDataTVU = dataTVU.data();
      setTipoVehiculoUno(arrayDataTVU.nombre);
      const dataTVD = await db.collection('tipo_Vehiculo').doc(vehi[0].idTipoVehiculoDos).get();
      const arrayDataTVD = dataTVD.data();
      debugger;
      setTipoVehiculoDos(arrayDataTVD.nombre);
      setNombreConductorUno(vehi[0].nombreConductorUno);
      setApellidoConductorUno(vehi[0].apellidoConductorUno);
      setDniConductorUno(vehi[0].dniConductorUno);
      setDomicilioConductorUno(vehi[0].domicilioConductorUno);
      setMarcaUno(vehi[0].vehiculoMarcaUno);
      setDominioUno(vehi[0].dominioUno);
      setDominioAcopladoUno(vehi[0].dominioAcopladoUno);
      setSeguroUno(vehi[0].segurosUno);
      setReconocimientoUno(vehi[0].reconocimientoUno);
      setDisposicionUno(vehi[0].disposicionUno);
      setNombreConductorDos(vehi[0].nombreConductorDos);
      setApellidoConductorDos(vehi[0].apellidoConductorDos);
      setDniConductorDos(vehi[0].dniConductorDos);
      setDomicilioConductorDos(vehi[0].domicilioConductorDos);
      setMarcaDos(vehi[0].vehiculoMarcaDos);
      setDominioDos(vehi[0].dominioDos);
      setDominioAcopladoDos(vehi[0].dominioAcopladoDos);
      setSeguroDos(vehi[0].segurosDos);
      setReconocimientoDos(vehi[0].reconocimientoDos);
      setDisposicionDos(vehi[0].disposicionDos);
      // setAccidente(acci);
      // setAccidente(accidente);
      const dataTA = await db.collection('tipoAccidente').doc(acci[0].idTipoAccidente).get()
      const arrayDataTA = dataTA.data();
      // adta.push(arrayDataTA);
      setTipoAccidente(arrayDataTA.nombre);
    }
    
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
    const dataBS = await db.collection('bomberos_siniestro').get();
    const arrayDataBS = dataBS.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    const datavS = await db.collection('vehiculos_siniestro').get();
    const arrayDatavS = datavS.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    if(arrayDataBS.length === 0) {
      setExiste(false);
    }
    if(arrayDatavS.length === 0) {
      setExiste(false);
    }
    
    arrayDataBS.map(a => {
      if(a.idSiniestro === idSiniestro) {
        setExiste(true)
        arrayBSini.push(a)
      }
    })
    arrayDatavS.map(a => {
      if(a.idSiniestro === idSiniestro) {
        setExisteVehi(true)
        arrayVSini.push(a)
      }
    })
    if(arrayBSini.length === 0 || arrayVSini.length === 0) {
      setExiste(false);
      setExisteVehi(false);
    } else {
      for(var i = 0; i < arrayBSini.length; i++){
        const dataBom = await db.collection('bomberos').doc(arrayBSini[i].idBombero).get()
        const arrayDataBom = dataBom.data();
        bomberosMostrar.push(arrayDataBom);
      }        
      for(var i = 0; i < arrayVSini.length; i++){
        const dataVeh = await db.collection('vehiculos').doc(arrayVSini[i].idVehiculo).get()
        const arrayDataVeh = dataVeh.data();
        vehiculosMostrar.push(arrayDataVeh);
      }  
      }
    setBomberosSiniestro(bomberosMostrar);
    setVehiculosSiniestro(vehiculosMostrar);
      debugger;
    const dataSPa = await db.collection('serviciosPublicos_accidente').get();
    const arrayDataSPa = dataSPa.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    if(arrayDataSPa.length === 0) {
      setExisteSP(false);
    }
    arrayDataSPa.map(a => {
      if(a.idAccidente === idAccidente[0]) {
        setExisteSP(true)
        arraySPa.push(a)
      }
    })

    if(arraySPa.length === 0) {
      setExisteSP(false);
    } else {
      for(var i = 0; i < arraySPa.length; i++){
        debugger;
        const datasv = await db.collection('serviciosPublicos').doc(arraySPa[i].idServicioPublico).get()
        const arrayDatasv = datasv.data();
        spMostrar.push(arrayDatasv);
      }        
      }
    setSpa(spMostrar);
      debugger;
    const dataHA = await db.collection('civiles_accidente').get();
    const arrayDataHA = dataHA.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    if(arrayDataHA.length === 0) {
      debugger;
      setExisteHA(false);
    } else {
      arrayDataHA.map(a => {
        if(a.idAccidente === idAccidente[0]) {
          debugger;
          setExisteSP(true)
          arrayHA.push(a)
        }
      })
    }
    
    debugger;
    setHerFall(arrayHA);
    
  }



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
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Parte - Ubicación</Typography>
        </AccordionSummary>

        <AccordionDetails>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
          
            Número Parte:{nroParte} - Hora Llamado: {horaLlamado} - Hora Toque: {horaToque} <br/>
            Fecha y Hora de Salida: {fechaHoraSalida} - Fecha y Hora de Llegada: {fechaHoraLlegada}
            <hr />
            {
              dirRut === "Ruta" ? (
                dirRut + " " + nombreRuta + " - KM " + km
              ) : (
                dirRut + " " + calle + " " + nroCalle + "Entre: " + calleUno + " " + calleDos
              )
            } <br />
           Zona: {tipoZona} - Servicio: {tipoServicio}
           </Typography>
          </Grid>
          
          </Grid>
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
          <Typography className={classes.heading}>Vehículos del Accidente</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={3}>
              <Grid item xs={6}>
            <Card className={classes.rootCard}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
              Vehículo 1 <hr />
              {tipoVehiculoUno} {marcaUno} - Dominio: {dominioUno} {dominioAcopladoUno} - Seguro: {seguroUno} - Reconocimiento: {reconocimientoUno} Disposición: - {disposicionUno}
              <br/>
            Conductor: {apellidoConductorUno} {nombreConductorUno} - DNI: {dniConductorUno} - Domicilio: {domicilioConductorUno} <br />
              </Typography>
               


            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={6} >     
          <Card className={classes.rootCard}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Vehículo 2
              <hr/> {tipoVehiculoDos} {marcaDos} Dominio: {dominioDos} {dominioAcopladoDos} Seguro: {seguroDos} Reconocimiento: {reconocimientoDos} {disposicionDos}
            <br/>
            Conductor: {apellidoConductorDos} {nombreConductorDos} - DNI: {dniConductorDos} - Domicilio: {domicilioConductorDos}
            </Typography>

          </CardContent>
        </Card>
        </Grid>
        </Grid>
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Bomberos y Vehículos que Participaron del Siniestro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {existe === true ? (
              <Grid container spacing={3}>
              <Grid item xs={6}>
            <Card className={classes.rootCard}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Bomberos
              </Typography>
                {
                  bomberosSiniestro.map(a => {
                    return (
                    <Typography variant="body2" component="p">
                      {a.nombre} {a.apellido} Legajo: {a.legajo} <br/>
                    </Typography>
                    )
                  })
                }


            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={6} >     
          <Card className={classes.rootCard}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Vehículos
            </Typography>
              {
                vehiculosSiniestro.map(a => {
                  return (
                  <Typography variant="body2" component="p">
                    {a.tipo} {a.patente} <br/>
                  </Typography>
                  )
                })
              }


          </CardContent>
        </Card>
        </Grid>
        </Grid>
          ) : (<DatosBomberos id={idSiniestro}/>)}
          <br />
          {/* {
            existeVehi === true ? (
              vehiculosSiniestro.map(v => {
                return (
                  
                  <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography>
                  {v.tipo} {v.patente} 
                  <br />
                   </Typography>
                   </Grid>
                   
                 </Grid>
                 
                   )
              })
            ) : null
          } */}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Servicios Publicos</Typography>
        </AccordionSummary>
        <AccordionDetails>
        
          {existeSP === true ? (
             
                <Grid container spacing={3}>
              <Grid item xs={6}>
              <Card className={classes.rootCard}>
          <CardContent>
            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
              Vehículos
            </Typography> */}
              {
                spa.map(s => {
                  return (
                  <Typography variant="body2" component="p">
                    {s.nombre} <br/>
                  </Typography>
                  )
                })
              }


          </CardContent>
        </Card>
                 </Grid>
                 </Grid>
          ) : (<ServiciosPublicos idSini={idSiniestro}/>)}
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Heridos y Fallecidos</Typography>
        </AccordionSummary>
        <AccordionDetails>

        {existeHA === true ? (
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell >Apellido</TableCell>
            <TableCell >Dni</TableCell>
            <TableCell >Nacionalidad</TableCell>
            <TableCell >Sexo</TableCell>
            <TableCell >Fallecido</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {herFall.map((c) => (
            <TableRow key={c.dni}>
              <TableCell> {c.nombre} </TableCell>
              <TableCell> {c.apellido} </TableCell>
              <TableCell> {c.dni} </TableCell>
              <TableCell> {c.nacionalidad} </TableCell>
              <TableCell> {c.sexo} </TableCell>
              <TableCell> {c.fallecido} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
          ) : (<CivilesAccidente idSini={idSiniestro}/>)}
                        
        </AccordionDetails>
      </Accordion>
      
      </div>
      <Footer />
      </div>
    )
}

export default withRouter(ModalSiniestro)
