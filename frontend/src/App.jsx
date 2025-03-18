import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Login from "./pages/Login"
import SelectorService from "./pages/Services"
import ScheduleSelector from  "./pages/schedules"
import Shift  from "./pages/shift"
import AdminDashboard from "./pages/admin"
import ClientManagement from "./pages/clienteManagement"
import CajerosView from "./pages/cajerosView"

function App(){
  return(
  <BrowserRouter>
  <Routes>
  <Route path = "/" element = {<ClientManagement />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;