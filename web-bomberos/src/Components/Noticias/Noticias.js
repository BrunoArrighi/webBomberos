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
import Search from '../Search/Search';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

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
}));

const Noticias = () => {
    const classes = useStyles();
    const [noticias, setNoticias] = React.useState([{
        fecha: "11-02-12",
        titulo: "Muerte",
        cuerpo: "sdplasdasdas"
    },
    {
        fecha: "11-02-24",
        titulo: "robo",
        cuerpo: "sdsdsdsvcvcbvb",
    }
  ]);

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
      <Search />
      <Container maxWidth="sm">
        <div className="inicio">

                    {
                        noticias.map(item => ( 
                                      <Card className="root mt" variant="outlined">
                                      <CardContent>
                                        <Typography className="title" color="textSecondary" gutterBottom>
                                          {item.fecha}
                                        </Typography>
                                        <Typography variant="h5" component="h2" className="textCenter">
                                          {item.titulo}
                                        </Typography>
                                        <Typography className="pos" color="textSecondary" className="textCenter">
                                          {item.cuerpo}
                                        </Typography>
                                        <Typography variant="body2" component="p" className="textCenter">
                                          well meaning and kindly.
                                          <br />
                                          {'"a benevolent smile"'}
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
