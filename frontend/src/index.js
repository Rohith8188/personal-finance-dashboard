import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [mode, setMode] = React.useState('light');
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

root.render(<Main />);
