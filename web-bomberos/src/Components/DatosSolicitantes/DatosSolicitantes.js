import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const DatosSolicitantes = ({solicitante, setSolicitante}) => {
    const { 
        nombreSolicitante,
         apellidoSolicitante,
        telefonoSolicitante,
        dniSolicitante } = solicitante;
    return (
        <div>
            <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombreSolicitante"
              name="nombreSolicitante"
              label="Nombre"
              fullWidth
              onChange={setSolicitante}
              value={nombreSolicitante}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="apellidoSolicitante"
              name="apellidoSolicitante"
              label="Apellido"
              fullWidth
              onChange={setSolicitante}
              value={apellidoSolicitante}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="telefonoSolicitante"
              name="telefonoSolicitante"
              label="Teléfono"
              fullWidth
              onChange={setSolicitante}
              value={telefonoSolicitante}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dniSolicitante"
              name="dniSolicitante"
              label="DNI"
              fullWidth
              onChange={setSolicitante}
              value={dniSolicitante}
            />
          </Grid>
          </Grid>
        </div>
    )
}

export default DatosSolicitantes
