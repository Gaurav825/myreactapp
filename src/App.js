
import './App.css';
import Navbar from './component/Navbar.js'
import Example from './component/Example.js'


function App() {
  return (
    <>
    <Navbar  title="NikuTextutils" About="AboutNikuutils"/>
    <div className="container" >
    <Example heading="Enter Text Here"/>
    </div>
    </>
    
    

  );
}

export default App;
