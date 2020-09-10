import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const PoliciaMed = ({policiaMed, setPoliciaMed}) => {
    const { 
        movilNro,
        movilCargo,
        medicoCargo,
        guardiaNro,
        folioNro } = policiaMed;
    return (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="movilNro"
              name="movilNro"
              label="Móvil nro"
              fullWidth
              onChange={setPoliciaMed}
              value={movilNro}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="movilCargo"
              name="movilCargo"
              label="Cargo Móvil"
              fullWidth
              onChange={setPoliciaMed}
              value={movilCargo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="medicoCargo"
              name="medicoCargo"
              label="Médico a Cargo"
              fullWidth
              onChange={setPoliciaMed}
              value={medicoCargo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="guardiaNro"
              name="guardiaNro"
              label="Guardia Nro"
              fullWidth
              onChange={setPoliciaMed}
              value={guardiaNro}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="folioNro"
              name="folioNro"
              label="Folio Nro"
              fullWidth
              onChange={setPoliciaMed}
              value={folioNro}
            />
          </Grid>
          </Grid>
    )
}

export default PoliciaMed
