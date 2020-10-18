import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import NavBar from '../NavBar/NavBar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { DoubleArrow } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import 'moment/locale/es';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '60px',
      marginLeft: '5%',
      marginRight: '5%',
    },
    
    instructions: {
      marginLeft: "10px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    instructionsBreak: {
      marginLeft: "40px",
      marginTop: '10px',
      marginBottom: '10px',
      marginRight: '40px',
      borderRadius: '6px',
      padding: '10px',
      border: '1px solid black',
    },
  }));

const NuevaNoticia = (props) => {
    const classes = useStyles();
    const [secciones, setSecciones] = React.useState([]);
    const [seccion, setSeccion] = React.useState('');
    const [textoNoticia, setTextoNoticia] = React.useState('');
    const [tituloNoticia, setTituloNoticia] = React.useState('');

    React.useEffect(() => {
        obtenerDatos();
      }, []);

      const obtenerDatos = async () => {
        debugger;
        const dataS = await db.collection('secciones').get()
        const arrayDataS = dataS.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setSecciones(arrayDataS);
      }

      const agregarNoticia = async() => {
        debugger;
          const fechaHoy = new Date();
          const fecha =  moment(fechaHoy).format('L'); ;
          console.log(fecha)
        const noticia = {
            titulo: tituloNoticia,
            texto: textoNoticia,
            nombreSeccion: seccion,
            fecha: fecha,
        }
        await db.collection('noticias').add(noticia);
        props.history.push('/admin-inicio')
      }

    return (
        <div>
            <NavBar />
            <div className={classes.instructionsBreak}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/admin-inicio" 
                // onClick={handleClick}
                >
                    Inicio-Admin
                </Link>
                <Typography color="textPrimary">Nueva Noticia</Typography>
            </Breadcrumbs>
            </div>
            <div className={classes.root}>
            <Grid container spacing={3}>
            
           
            <Grid item xs={12} sm={6}>
              <TextField
                required
                text
                id="titulo"
                name="titulo"
                label="Título de la Noticia"
                fullWidth
                onChange={e => setTituloNoticia(e.target.value)}
                value={tituloNoticia}
              >
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              required
              select
              id="secciones"
              name="secciones"
              label="Sección de la Noticia"
              fullWidth
              onChange={e => setSeccion(e.target.value)}
              value={seccion}
            >
              {secciones.map((item) => (
                <MenuItem key={item.id} value={item.Nombre}>
                  {item.Nombre}
                </MenuItem>
              ))}
              </TextField>
          </Grid>
          <Grid item xs={12} sm={12}>
              <TextField
                required
                multiline
                id="texto"
                name="texto"
                label="Texto de la Noticia"
                fullWidth
                onChange={e => setTextoNoticia(e.target.value)}
                value={textoNoticia}
              >
                </TextField>
            </Grid>
            
            <Grid item xs={12} sm={12}>
          <Button variant="contained" color="primary" onClick={() => agregarNoticia()}>
            Guardar Nueva Noticia
          </Button>
          </Grid>
          </Grid>
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(NuevaNoticia);
