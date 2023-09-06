import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';

import { themeSettings } from '../styles/mui-theme';

type ProvidersProps = {
  children: React.ReactNode;
  mode: 'light' | 'dark'; // Define the type for the "mode" prop
};

export function Providers({ children, mode }: ProvidersProps) {
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
