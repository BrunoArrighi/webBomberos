import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ImagenBomberos from '../../img/abva2.jpg';
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

const Historia = () => {
    
      const classes = useStyles();

    return (
        <div>
            <NavBar />
            <div className={classes.instructionsBreak}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" 
                // onClick={handleClick}
                >
                    Inicio
                </Link>
                <Typography color="textPrimary">Historia</Typography>
            </Breadcrumbs>
            </div>
            <div className={classes.instructionsBreak}>
                <p>El 4 de mayo de 1974 nace Bomberos Voluntarios de Armstrong, la nueva institución ha sido impulsada por el Rotary Club y el Centro Comercial e Industrial, con la presencia y el aliento de los bomberos de Marcos Juárez (representados por su Presidente: Juan Cotigiani y su Jefe de Cuerpo Activo: Juan Rinaudi) y de la Comuna local (Presidente comunal: José Portis). La reunión se realiza en las instalaciones de la Maestranza comunal. 
                    <br /> <b>Primera comisión Directiva:</b> Osvaldo Juárez (Presidente); Juan Camiletti (Vicepresidente); Guillermo Bucher (Secretario); Dino Bergomi, Primo Buschitari, Víctor Moscoloni, Raúl Crucianelli (Vocales); Contador Silvio Bertoya (Asesor).
<br/> <b>Primer Cuerpo Activo:</b> Héctor Buschitari (Jefe); Jorge Arroyo (Subjefe); Víctor Moscoloni, Mario Bracani (Oficiales); Carlos Strólogo, Omar Frutos, Miguel Médici (Aspirantes).
<br />"En pocos días la flamante entidad dará pasos importantes para su desenvolvimiento: tramitará ante la Cooperativa de Electricidad la colocación de 25 bocas de incendio; adaptará (con la colaboración de Talleres Metalúrgicos Crucianelli) el tanque de riego comunal para la incorporación de manguera; realizará las primeras prácticas (utilizando una bomba de los elevadores oficiales) y llevará a cabo el primer simulacro en el campamento de ladrillos de Ángel Viotto. En junio de 1975, se colocará en la comisaría local una sirena que dará aviso al Cuerpo Activo, de potenciales siniestros". 
<br />Fuente: Efemérides Armstrong 
<br />Han pasado 44 años, integrantes del cuerpo activo, miembros de la comisión directiva y cuarteleros, pero siempre con el incondicional apoyo de toda la comunidad para hacer cada día más grande a nuestra institución. Es por ello que aprovechamos en la fecha de nuestro aniversario para agradecer inmensamente a todos los que colaboran y aportan su granito de arena día a día.</p>
<br/>
<h1 className={classes.title}>Por muchos años más de sacrificio, valor y abnegación. ABVA</h1>
<img src={ImagenBomberos} className={classes.image} />
            </div>
            <Footer />
        </div>
    )
}

export default Historia
