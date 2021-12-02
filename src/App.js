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
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register/Register'
import Privateroute from './Privateroute/Privateroute';
import Rulestwo from './Pages/Userpages/Reviewrules/Rulestwo';
import Rulethree from './Pages/Userpages/Reviewrules/Rulethree';
import Mybooking from './Pages/Userpages/Mybooking/Mybooking';
import Dashhome from './Pages/Adminpages/Dashboard/Dashhome';
import Makeadmin from './Pages/Adminpages/Makeadmin/Makeadmin';
import Managehotels from './Pages/Adminpages/Managehotels/Managehotels';
import Managebooking from './Pages/Adminpages/Managebooking/Managebooking';
import Dashboard from './Pages/Adminpages/Dashboard/Dashboard';
import Footer from './Pages/Shared/Footer/Footer';
import Definitehotelbook from './Pages/Userpages/Definitehotelbook/Definitehotelbook';
function App() {
  return (
    <div className="">
      <Authprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Userhome />}/>
            <Route path="/addhotel" element={<Addhoteldata/>} />
            <Route path="/allhotels" element={<Allhotels/>} />
            <Route path="/findhotelform" element={<Findhotelform/>} />
            <Route path="/searchitems" element={<Searchitems/>} />
            <Route path="/detailshotel/:id" element={<Detailshotel/>} />
            <Route path="/revirerules" element={<Privateroute><Revirerules/></Privateroute> } />
            <Route path="/rulestwo" element={<Privateroute><Rulestwo/></Privateroute>} />
            <Route path="/rulethree" element={<Privateroute><Rulethree/></Privateroute> } />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/mybooking" element={<Mybooking/>} />
            <Route path="/definitehotelbook/:id" element={<Definitehotelbook/>} />

            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="/dashboard" element={<Dashhome/>} />
                <Route path="/dashboard/makeadmin" element={<Makeadmin/>} />
                <Route path="/dashboard/manageorder" element={<Managebooking/>} />
                <Route path="/dashboard/addhotels" element={<Addhoteldata/>} />
                <Route path="/dashboard/managehotels" element={<Managehotels/>} />
            </Route>
          </Routes>
          <Footer></Footer>
       </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
