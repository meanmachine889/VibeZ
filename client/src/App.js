import React,{Fragment, useState, useEffect} from 'react';
import Login from './components/Login.js';
import Homepage from './components/Homepage';
import { Navbar } from './components/Navbar.js';
import { Events } from './components/Events.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Account } from './components/Account.js';
import { Organise } from './components/Organise.js';
import SignUp from './components/SignUp.js';
import PurchaseHistory from './components/PurchaseHistory.js';
import OrganiseHIstory from './components/OrganiseHistory.js';

function App() {

  const [logged, setLogged] = useState(false);
  const [currUser, setCurrUser] = useState("");
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setLogged(true);
      setCurrUser(loggedInUser);
    }
  }, []);

  function logIn(username) {
    setLogged(true);
    setCurrUser(username);
    console.log(username);
  }

  function e(eve){
    setEvent(eve);
  }

  return (
    <Fragment>
      {logged ? (
        <div className='bg-black'>
        <BrowserRouter>
          <Navbar userID={currUser}/>
          <Routes>
            <Route path='/' element = {<Homepage/>}/>
            <Route path='/account' element={<Account userID={currUser}/>}/>
            <Route path='/events' element={<Events user={currUser} func={e}/>}/>
            <Route path='/gallery' element={<Events user={currUser} func={e}/>}/>
            <Route path='/organise' element={<Organise userID={currUser}/>}/>
            <Route path='/cart' element={<PurchaseHistory userID={currUser}/>}/>
            <Route path='/ohistory' element={<OrganiseHIstory userID={currUser}/>}/>
          </Routes>
        </BrowserRouter> 
       </div>
       ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Login logIn={logIn} />}/>
            <Route path='/signup' element = {<SignUp logIn={logIn}/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </Fragment>
  );
}

export default App;
