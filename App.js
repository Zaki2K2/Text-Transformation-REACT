// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
  <Navbar  title ='TextUtils' />
 <div className="container">
<TextForm heading ='Enter the Text to Analyse   ' placeHolder = "Enter text here"/>
 </div>

    </>

  );
}

export default App;
