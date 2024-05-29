
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
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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


          <Route path="/Dashboard"  element={<><Adashboard /></>}/>
          <Route path="/addservice" element={<><Addservice /></>} />
          <Route path="/Mangesev" element={<><AMangeservice/></>} /> 
          <Route path="/Alogin" element={<><Alogin/></>} /> 
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
