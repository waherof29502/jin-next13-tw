import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '@/store';

import Navbar from './components/layouts/navbar';
import { Providers } from './components/providers';

function App() {
  const mode = useSelector((state: RootState) => state.auth.mode);
  return (
    <Providers mode={mode}>
      <Navbar />
      <Outlet />
    </Providers>
  );
}

export default App;
