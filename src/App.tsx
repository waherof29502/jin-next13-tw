import Dashboard from '@/features/subject/components/dashboard';
import TanStackTable from '@/features/subject/components/tanstack-table';
import Contact from '@/features/subject/pages/contact';
function App() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-900">
      <TanStackTable />
      <Dashboard />
      <Contact />
    </div>
  );
}

export default App;
