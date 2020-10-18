import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './Noticias.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {db} from '../../firebase';
import {auth} from '../../firebase';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
    textAlign: "center",
  },
  title: {
      textAlign: "center",
      color: "red",
  },
  buttons: {
    textAlign: "center",
    width: "100%",
    marginTop: "30px",
  },
  buttonsR: {
    textAlign: "center",
    width: "100%",
    marginTop: "5px",
  },
}));

const Noticias = () => {
    const classes = useStyles();
    const [noticias, setNoticias] = React.useState([]);
    const [noticiasMostrar, setNoticiasMostrar] = React.useState([]);
    const [secciones, setSecciones] = React.useState([]);

  React.useEffect(() => {
        obtenerDatos();
  }, [])


const obtenerDatos = async () => {
    debugger;
    const dataN = await db.collection('noticias').get()
    const arrayDataN = dataN.docs.map(doc => ({ id: doc.id, ...doc.data()}))
      setNoticias(arrayDataN);
      setNoticiasMostrar(arrayDataN);
    const dataS = await db.collection('secciones').get()
    const arrayDataS = dataS.docs.map(doc => ({ id: doc.id, ...doc.data()}))
      setSecciones(arrayDataS);
} 

const filtrar = (a) => {
  debugger;
  const arrayAccidente = [];
  const arrayIncendio = [];
  if(a === 'Accidente') {
    noticias.map(item => {
      if(item.nombreSeccion === a){
        arrayAccidente.push(item);
      }
    })
    setNoticiasMostrar(arrayAccidente);
  }
  else if(a === 'Incendio') {
    noticias.map(item => {
      if(item.nombreSeccion === a){
        arrayIncendio.push(item);
      }
    })
    setNoticiasMostrar(arrayIncendio);
}
else if(a === 'Refrescar') {
  setNoticiasMostrar(noticias);
}
console.log(noticias);
}

    return (
         <React.Fragment>
        <NavBar />
        <div className={classes.instructionsBreak}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" 
                // onClick={handleClick}
                >
                    Noticias
                </Link>
            </Breadcrumbs>
            </div>
      <CssBaseline />
      
      <div className={classes.buttons}>
      <a>Filtrar Noticias por:</a> <br />
      <ButtonGroup color="secondary" aria-label="outlined secondary button group">
    
        {
          secciones.map(item => (
            <Button onClick={() => filtrar(item.Nombre)} >{item.Nombre}</Button>
          ))
        }
        
      </ButtonGroup>
      </div>
      <div className={classes.buttonsR}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => filtrar('Refrescar')} >Refrescar</Button>
      </ButtonGroup>
      </div>
      <Container maxWidth="sm">
        <div className="inicio">

                    {
                        noticiasMostrar.map(item => ( 
                                      <Card className="root mt" variant="outlined">
                                      <CardContent>
                                        <Typography className="title" color="textSecondary" gutterBottom>
                                          {item.fecha}
                                        </Typography>
                                        <Typography variant="h5" component="h2" className="textCenter">
                                          {item.titulo}
                                        </Typography>
                                        <Typography className="pos" color="textSecondary" className="textCenter">
                                          {item.nombreSeccion}
                                        </Typography>
                                        <Typography variant="body2" component="p" className="textCenter">
                                          {item.texto}
                                          <br />
                                        </Typography>
                                      </CardContent>
                                      {/* <CardActions>
                                        <Button size="small">Learn More</Button>
                                      </CardActions> */}
                                    </Card>
                        ))
                    }
                    </div>
      </Container>
      <Footer />
    </React.Fragment>
    )
}

export default Noticias
