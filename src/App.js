import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import People from './Pages/People';
import PersonDetail from './Pages/PersonDetail';
import Login from './Pages/Login';
import { useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  console.log(isLogin)

  return (
    <>
      <Navbar isLogin = {isLogin} setIsLogin = {setIsLogin} />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/people' element={<People />}/>
          <Route path='/people/:id' element={<PersonDetail />} />
          <Route path='/login' element={<Login  isLogin={isLogin} setIsLogin = {setIsLogin} />} />
        </Routes>


    </>
  );
}

export default App;
