import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import Navbar from './features/subject/pages/navbar';
import { themeSettings } from './themes/index';

function App() {
  const mode = useSelector((state: RootState) => state.auth.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
