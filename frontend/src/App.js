import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} 
                    from 'react-router-dom';


import EditList from './components/editlist.component';

import Navigation from './components/navigation.component';
import Home from './components/home.component';
import ReservationLists from './components/reservationlists.component';
import AddReservation from './components/addreservation.component';
import Menu from './components/menu.component';
import AboutUs from './components/about.component';
import Login from './components/login.component';
import Register from './components/register.component';

function App() {
  return (
    <Router>
       <Navigation/>
    <Routes>
      {/* <Route path='/' Component={TodoLists}/> */}
      <Route path='/edit/:id' Component={EditList}/>      

      <Route path='/' Component={Home}/>
      <Route path='/menu' Component={Menu}/>
      <Route path='/reservation' Component={AddReservation} />
      <Route path='/reservationList' Component={ReservationLists} />  
      <Route path='/login' Component={Login}/>
      <Route path='/about' Component={AboutUs}/>
      <Route path='/register' Component={Register}/>
      
  
    </Routes>


    </Router>
  );
}

export default App;
