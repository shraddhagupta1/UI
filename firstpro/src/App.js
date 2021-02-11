import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome' 
import Message from './components/Message'
import GetData from './components/GetData';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import CreateHotelComponent from './components/CreateHotelComponent';
import GetDataById from './components/GetDataById';


function App() {
  return (
    
    <div className="container">
     
      
      
      <Router>

         <div className="container">
      
     
     {/* <HeaderComponent />
      */}
     <div className = "container">
      <Switch>
        <Route exact stric path="/" component = {GetData} />
        <Route exact stric path="/getdata" component={GetData}/> 
        <Route exact stric path="/add-data" component={CreateHotelComponent}/> 
        <Route exact stric path="/getdatabyid" component={GetDataById}/> 
        
          {/* <Home /> */}
      </Switch>
     </div>
      {/* <Footer /> */}
      
         </div>
      </Router>
    </div>
  );
}

export default App;
