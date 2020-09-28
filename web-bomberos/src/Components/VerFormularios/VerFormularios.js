import React from 'react';
import {withRouter} from 'react-router-dom';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import NavBar from '../NavBar/NavBar';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Footer from '../Footer/Footer';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import moment from 'moment';
import 'moment/locale/es';



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const useStyles = makeStyles((theme) =>
  createStyles({
    instructionsBreak: {
      marginLeft: "40px",
      marginTop: '10px',
      marginBottom: '10px',
      marginRight: '40px',
      borderRadius: '6px',
      padding: '10px',
      border: '1px solid black',
    },
    table: {
      marginLeft: '50px',
      marginRight: '50px',
    },
  }),
);


const VerFormularios = (props) => {
    const [state, setState] = React.useState({
        columns: [
          { title: 'Numero Siniestro', field: 'numeroSiniestro' },
        //   { title: 'Fecha', field: 'fecha' },
        //   { title: 'Fecha', field: 'fecha' },
        //   { title: 'Fecha', field: 'fecha' },
        ],
        // data: [
        //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        //   {
        //     name: 'Zerya Betül',
        //     surname: 'Baran',
        //     birthYear: 2017,
        //     birthCity: 34,
        //   },
        // ],
      });
  const [siniestros, setSiniestros] = React.useState([]);
  const classes = useStyles();

  const [user, setUser] = React.useState(null)

    React.useEffect(() => {
        if(auth.currentUser){
            console.log('existe')
            setUser(auth.currentUser)
            obtenerDatos();
        }else{
            console.log('no existe')
            props.history.push('/login')
        }
    }, [props.history])


  const obtenerDatos = async () => {
      debugger;
    const dataS = await db.collection('siniestros').orderBy('numeroSiniestro', 'desc').get()
    const arrayDataS = dataS.docs.map(doc => ({ id: doc.id, ...doc.data()}))
    const siniestrosFiltrado = arrayDataS.filter(doc => doc.estado === true)
    setSiniestros(siniestrosFiltrado);
  }

  const abrirModal = (siniestro) => {
      debugger;
    props.history.push({
        pathname: '/modalSiniestro',
        state: { detail: siniestro }
      });
    }
  
    const eliminarSiniestro = async (siniestro) => {
        debugger;
        // const request = {nuevoSocio};
        await db.collection('siniestros').doc(siniestro.id).update({
            idSolicitante: siniestro.idSolicitante,
            estado: false,
            numeroSiniestro: siniestro.numeroSiniestro,
            idDirRut: siniestro.idDirRut,
            calle: siniestro.calle,
            nroCalle: siniestro.nroCalle,
            calleUno: siniestro.calleUno,
            calleDos: siniestro.calleDos,
            pisoNro: siniestro.pisoNro,
            depto: siniestro.depto,
            nombreRuta: siniestro.nombreRuta,
            km: siniestro.km,
            idTipoZona: siniestro.idTipoZona,
            tipoServicio: siniestro.tipoServicio,
            nroParte: siniestro.nroParte,
            horaLlamado: siniestro.horaLlamado,
            horaToque: siniestro.horaToque,
            fechaHoraSalida: siniestro.fechaHoraSalida,
            fechaHoraLlegada: siniestro.fechaHoraLlegada,
        });

        obtenerDatos();
      }

  
    return (
        <div>
            <NavBar />
            <div className={classes.instructionsBreak}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/inicio-bomberos" 
                // onClick={handleClick}
                >
                    Inicio-Bomberos
                </Link>
                <Typography color="textPrimary">Ver Siniestros</Typography>
            </Breadcrumbs>
            </div>
            <div className={classes.table}>
            <MaterialTable
                onRowClick={(event, newData) => abrirModal(newData)}
                icons={tableIcons}
                title="Siniestros"
                columns={state.columns}
                data={siniestros}
                editable={{
                    // onRowAdd: (newData) =>
                    // new Promise((resolve) => {
                    //     setTimeout(() => {
                    //     resolve();
                    //     setState((prevState) => {
                    //         const data = [...prevState.data];
                    //         data.push(newData);
                    //         return { ...prevState, data };
                    //     });
                    //     }, 600);
                    // }),
                    // onRowUpdate: (newData, oldData) =>
                    // new Promise((resolve) => {
                    //     setTimeout(() => {
                    //     resolve();
                    //     if (oldData) {
                    //         setState((prevState) => {
                    //         const data = [...prevState.data];
                    //         data[data.indexOf(oldData)] = newData;
                    //         return { ...prevState, data };
                    //         });
                    //     }
                    //     }, 600);
                    // }),
                    onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                        resolve();
                          eliminarSiniestro(oldData)
                        }, 600);
                    }),
                }}
                />
                </div>
            <Footer />

        </div>
    )
}

export default withRouter(VerFormularios)
