import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './componants/Home/Home';
import About from './componants/About/About';
import Error from './componants/Error/Error';
import Contact from './componants/Contact/Contact';

import Register from './componants/Register/Register';
import Login from './componants/Login/Login';

import Geants from './componants/Geants/Geants';
import Eshop from './componants/Eshop/Eshop';
import FormCollaboratif from './componants/FormCollaboratif/FormCollaboratif';
import GallerieCollaborative from './componants/ResultatCollabo/GallerieCollaborative';
import Carrousel from './componants/Carrousel/Carrousel';

function App() {

   
  return (

    <BrowserRouter>
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path='/geants' element={<Geants />} />
        <Route path='/eshop' element={<Eshop />} />
        <Route path='/collaborative' element={<FormCollaboratif />} />
        <Route path='/galerie' element={<GallerieCollaborative />} />
        <Route path="/carrousel" element={<Carrousel />} />
        

    </Routes>
    
    </BrowserRouter>
    

    
  );
}

export default App;
