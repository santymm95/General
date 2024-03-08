import React, { useState } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&lang=es&q=`;

function App() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: '',
  });

  const [weather, setWeather] = useState({
    location: '',
    temperature: 0,
    city: '',
    condition: '',
    icon: '',
    error: false,
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos");
    setLoading(true);

    try {
      if (!city.trim()) {
        throw new Error('El campo de ciudad no puede estar vacío');
      }

      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      if (!data.location || !data.current || !data.current.condition) {
        throw new Error('Los datos de la API son incompletos o no válidos');
      }

      setWeather({
        location: data.location.name,
        temperature: data.current.temp_c,
        city: data.location.name,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      });

      setCity('');
    } catch (error) {
      console.error(error);
      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Weather App
      </Typography>
      <Box
        sx={{ display: 'grid', gap: 2 }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
        />
        <LoadingButton
          type="submit"
          loading={loading}
          variant="contained"
          loadingIndicator="Cargando..."
        >
          Consultar
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box
          mt={2}
          sx={{
            display: 'flex',
            textAlign: 'center',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">
            {weather.city}, {weather.location}
          </Typography>
          <Box
            component="img"
            src={weather.icon}
            alt={weather.condition}
            sx={{ width: 50, height: 50 }}
          />
        </Box>
      )}

      <Typography
        textAlign={'center'}
        sx={{ mt: 2, fontSize: 10 }}
      >
        Powered by:{' '}
        <a
          href="https://www.weatherapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeather
        </a>
      </Typography>
    </Container>
  );
}

export default App;
