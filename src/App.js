import './App.css';
import Journy from './Journy';
import { LocalizationProvider } from "@mui/lab";
import AdapterDayjs from "@mui/lab/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Journy/>
      </div>
    </LocalizationProvider>
  );
}

export default App;
