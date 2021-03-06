import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import nuevaNoticia from '../../img/nuevaNoticia.jpg';
import verNoticia from '../../img/ver-noticias.jpg';
import usuarios from '../../img/usuarios.png';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const images = [
    {
      url: `${nuevaNoticia}`,
      title: 'Nueva Noticia',
      width: '40%',
      align: 'center',
      backgroundPosition: 'center 60%',
    },
    {
        url: `${verNoticia}`,
        title: 'Ver Noticias',
        width: '40%',
        align: 'center',
        backgroundPosition: 'center 20%',
      },
    {
      url: `${usuarios}`,
      title: 'Nuevo Usuario',
      width: '40%',
      align: 'center',
    },
  ];

  const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
    //   backgroundPosition: 'center 60%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

const InicioBomberos = (props) => {

    const classes = useStyles();

    const clickAdmin = (title) => {
      if(title === "Nuevo Usuario") {
        props.history.push('/agregarBombero');
      }
      else if(title === "Ver Noticias") {
        props.history.push('/verNoticias');
      }
      else if(title === "Nueva Noticia") {
        props.history.push('/nuevaNoticia');
      }
      else {
        // props.history.push('/nuevoSiniestro');
      }
      
    }

    return (<div>
        <NavBar />
        <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: image.width,
                marginTop: '40px',
                marginBottom: '20px',
                marginLeft: '30%',
            }}
            onClick={() => clickAdmin(image.title)}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundPosition: `${image.backgroundPosition}`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
        <Footer />
        </div>
    );
}

export default withRouter(InicioBomberos);
