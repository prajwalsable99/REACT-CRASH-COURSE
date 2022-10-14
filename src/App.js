// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {
  const [mode,setMode]=useState('light');

  const changeMode = () =>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#393b3d";
      showAlert("switching to dark mode","primary");
    }else{
      setMode('light');
      document.body.style.backgroundColor="#ffffff";
      showAlert("switching to light mode","primary");
    }
  }


  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

      setAlert({msg:message,ty:type});

      setTimeout(
        ()=>{
            setAlert(null);
        },1600
      );

  }

       return(
          <>
          <Navbar apptitle="TEXT-MODIFIER" mode={mode} togMode={changeMode}></Navbar>
          <Alert alert={alert}></Alert>
          <TextForm formtitle="Enter text here" mode={mode} showalert={showAlert}></TextForm>
          
          </>
  );
}

export default App;
