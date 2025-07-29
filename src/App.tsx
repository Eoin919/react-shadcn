import AppProvider from './providers';
import AppRouter from './routes';

const App = () => (
  <AppProvider>
    <AppRouter />
  </AppProvider>
);

export default App;
