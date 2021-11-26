import logo from './logo.svg';
import './App.css';
import Addhoteldata from './Pages/Adminpages/Addhoteldata/Addhoteldata';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Userhome from './Pages/Userpages/Userhome/Userhome';
import Allhotels from './Pages/Userpages/Allhotels/Allhotels';
import Authprovider from './Context/Authprovider';
import Findhotelform from './Pages/Userpages/Findhotelform/Findhotelform';
import Searchitems from './Pages/Userpages/Searchitems/Searchitems';
import Detailshotel from './Pages/Userpages/Detailshotel/Detailshotel';
import Revirerules from './Pages/Userpages/Reviewrules/Revirerules';

function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Userhome />}/>
            <Route path="/addhotel" element={<Addhoteldata/>} />
            <Route path="/allhotels" element={<Allhotels/>} />
            <Route path="/findhotelform" element={<Findhotelform/>} />
            <Route path="/searchitems" element={<Searchitems/>} />
            <Route path="/detailshotel/:id" element={<Detailshotel/>} />
            <Route path="/revirerules" element={<Revirerules/>} />
          </Routes>
       </BrowserRouter>
          
    </div>
  );
}

export default App;
