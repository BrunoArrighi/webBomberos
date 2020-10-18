import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {db} from '../../firebase';
import {auth} from '../../firebase';

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

const DetalleNoticia = (props) => {
    const classes = useStyles();
    debugger;
    const detalleNoticia = props.location.state.detail;
    // const [noticia, setNoticia] = React.useState([]);

//     React.useEffect(() => {
//         obtenerDatos();
//   }, [])


// const obtenerDatos = async () => {
//     debugger;
//     const dataN = await db.collection('noticias').doc(detalleNoticia.id).get()
//     const arrayDataN = dataN.docs.map(doc => ({ id: doc.id, ...doc.data()}))
//       setNoticia(arrayDataN);
// } 

    return (
        <React.Fragment>
        <NavBar />
        <div className={classes.instructionsBreak}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/admin-inicio" 
                // onClick={handleClick}
                >
                    Inicio-Admin
                </Link>
                <Typography color="textPrimary">Detalle Noticia</Typography>
            </Breadcrumbs>
            </div>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="inicio">
                                      <Card className="root mt" variant="outlined">
                                      <CardContent>
                                        <Typography className="title" color="textSecondary" gutterBottom>
                                          {detalleNoticia.fecha}
                                        </Typography>
                                        <Typography variant="h5" component="h2" className="textCenter">
                                          {detalleNoticia.titulo}
                                        </Typography>
                                        <Typography className="pos" color="textSecondary" className="textCenter">
                                          {detalleNoticia.nombreSeccion}
                                        </Typography>
                                        <Typography variant="body2" component="p" className="textCenter">
                                          {detalleNoticia.texto}
                                          <br />
                                        </Typography>
                                      </CardContent>
                                      {/* <CardActions>
                                        <Button size="small">Learn More</Button>
                                      </CardActions> */}
                                    </Card>
                    </div>
      </Container>
      <Footer />
    </React.Fragment>
    )
}

export default withRouter(DetalleNoticia);
