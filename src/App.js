import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs'
              element={<DialogsContainer />}
            />

            <Route path='/profile/:userId'
              element={<ProfileContainer />}
            />

            <Route path='/users'
              element={<UsersContainer />}
            />

            <Route path='/login'
              element={<Login />}
            />

            <Route path='/'
              element={<div></div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;