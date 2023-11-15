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

function App() {
  return (
    <Router>
       <Navigation/>
    <Routes>
      {/* <Route path='/' Component={TodoLists}/> */}
      <Route path='/edit/:id' Component={EditList}/>
      <Route path='/add' Component={AddTodo}/>

      <Route path='/' Component={Home}/>
      <Route path='/reservation' Component={AddReservation}/>  /* same as AddTodo */
  
    </Routes>


    </Router>
  );
}

export default App;
