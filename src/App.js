import './App.css';
import GlobalStateContext from './context/GlobalStateContext';
import Rutas from './routes/Rutas';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStateContext>
        <Rutas/>
      </GlobalStateContext>
    </ThemeProvider>
  );
}

export default App;
