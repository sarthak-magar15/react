import './App.css';
import Navbar from'./components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false); // whether dark mode is enabled or not 
  return (
   <>
    {/*<TextForm heading ="enter the etxt to analyse"/>  */ }
    <Navbar title="TextUtils" mode={darkMode} />
    <div className="container my-3">
    <TextForm heading= "Enter the text to analyze below "/>
    </div>
    </>
  );
}

export default App;