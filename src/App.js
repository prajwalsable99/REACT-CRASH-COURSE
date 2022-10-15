// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
     const [mode, setMode] = useState('light');

     const changeMode = () => {

          if (mode === 'light') {
               setMode('dark');
               document.body.style.backgroundColor = "#393b3d";
               showAlert("switching to dark mode", "primary");
               document.title = "TEXT-MODIFIER (DARK)";

          } else {
               setMode('light');
               document.body.style.backgroundColor = "#ffffff";
               showAlert("switching to light mode", "primary");
               document.title = "TEXT-MODIFIER ";

          }
     }


     const [alert, setAlert] = useState(null);

     const showAlert = (message, type) => {

          setAlert({ msg: message, ty: type });

          setTimeout(
               () => {
                    setAlert(null);
               }, 1600
          );

     }

     return (


          <BrowserRouter>

               <Navbar apptitle="TEXT-MODIFIER" mode={mode} togMode={changeMode}></Navbar>
               <Alert alert={alert}></Alert>



               <Routes>
                    <Route path="" element={< TextForm formtitle="Enter text here" mode={mode} showalert={showAlert} />}> </Route>

                    <Route path="About" element={<About />}> </Route>

               </Routes>


          </BrowserRouter>



     );
}

export default App;
