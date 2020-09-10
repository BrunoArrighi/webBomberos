import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const DatosParte = ({parte, setParte}) => {
    const { 
        nroParte,
         horaLlamado,
        horaToque,
        fechaHoraSalida,
        fechaHoraLlegada } = parte;

    return (
        <div>
            <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="nroParte"
              name="nroParte"
              label="Nro Parte"
              fullWidth
              onChange={setParte}
              value={nroParte}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
              required
              type="time"
              id="horaLlamado"
              name="horaLlamado"
              label="Hora Llamado"
              // defaultValue="00:00"
              fullWidth
              onChange={setParte}
              value={horaLlamado}
              InputLabelProps={{
                shrink: true,
              }} 
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              type="time"
              id="horaToque"
              name="horaToque"
              label="Hora Toque"
              // defaultValue="00:00"
              fullWidth
              onChange={setParte}
              value={horaToque}
              InputLabelProps={{
                shrink: true,
              }} 
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
            id="fechaHoraSalida"
            name="fechaHoraSalida"
            label="Fecha Hora Salida"
            type="datetime-local"
            onChange={setParte}
            value={fechaHoraSalida}
            InputLabelProps={{
              shrink: true,
            }}    
          />
            </Grid>
            <Grid item xs={12} sm={6}>
          <TextField
          fullWidth
            id="fechaHoraLlegada"
            name="fechaHoraLlegada"
            label="Fecha Hora Llegada"
            type="datetime-local"
            onChange={setParte}
            value={fechaHoraLlegada}
            InputLabelProps={{
              shrink: true,
            }}    
          />
          </Grid>
           
          </Grid>
        </div>
    )
}

export default DatosParte
