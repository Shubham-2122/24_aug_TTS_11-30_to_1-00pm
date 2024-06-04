
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./wesite/Pages/Home";
import About from "./wesite/Pages/About";
import Contact from "./wesite/Pages/Contact";
import Service from "./wesite/Pages/Service";
import Project from "./wesite/Pages/Project";
import Adashboard from "./admin/Pages/Adashboard";
import Addservice from "./admin/Pages/Addservice";
import AMangeservice from "./admin/Pages/AMangeservice";
import Alogin from "./admin/Pages/Alogin";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Ulogin from "./wesite/Pages/Ulogin";
import Usermange from "./admin/Pages/Usermange";
import Uregister from "./wesite/Pages/Uregister";
import Profile from "./wesite/Pages/Profile";


function App() {
  return (
    <div className="App">
      {/* <h1>hello react</h1> */}
      {/* <Home /> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<><Home/></>} />
          <Route path="/about" element={<><About /> </>} /> 
          <Route path="/contact" element={<><Contact/></>} />
          <Route path="/service" element={<><Service/></>} />  
          <Route path="/project" element={<><Project /></>} />
          <Route path="/ulogin" element={<><Ulogin /></>} />
          <Route path="/uregister" element={<><Uregister /></>} />
          <Route path="/profile" element={<><Profile /></>} />


          <Route path="/Dashboard"  element={<><Adashboard /></>}/>
          <Route path="/addservice" element={<><Addservice /></>} />
          <Route path="/Mangesev" element={<><AMangeservice/></>} /> 
          <Route path="/usermanage" element={<><Usermange/></>} /> 
          <Route path="/Alogin" element={<><Alogin/></>} /> 
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
