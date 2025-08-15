import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeContext from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const toggleTheme = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
