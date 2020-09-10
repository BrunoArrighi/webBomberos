import React from 'react';
import './Noticias.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Search from '../Search/Search';

const Noticias = () => {

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
