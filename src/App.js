import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link, Routes} 
                    from 'react-router-dom';


import EditList from './components/editlist.component';
import AddTodo from './components/addtodo.component';
// import TodoLists from './components/todolists.component';
import Navigation from './components/navigation.component';
import Home from './components/home.component';
import ReservationLists from './components/reservationlists.component';
import AddReservation from './components/addreservation.component';
import Menu from './components/menu.component';
import Location from './components/location.component'
import About from './components/about.component';

function App() {
  return (
    <Router>
       <Navigation/>
    <Routes>
      {/* <Route path='/' Component={TodoLists}/> */}
      <Route path='/edit/:id' Component={EditList}/>
      <Route path='/add' Component={AddTodo}/>

      <Route path='/' Component={Home}/>
      <Route path='/menu' Component={Menu}/>
      <Route path='/reservation' Component={AddReservation}/>  /* same as AddTodo */
      <Route path='/location' Component={Location}/>
      <Route path='/about' Component={About}/>
      <Route path='/' Component={Home}/>
  
    </Routes>


    </Router>
  );
}

export default App;
