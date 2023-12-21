import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resume from './components/Resume'
import { Provider } from './context/ResumeContext'
import SignUp from './components/fireBase/SignUp'
import LogIn from './components/fireBase/LogIn'
import SignOut from './components/fireBase/SignOut'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AppRouter from './components/AppRouter'
  import styled from 'styled-components'

  const Wrapper = styled.div`font-family: 'Dosis', sans-serif;`

function App() {
 
  return (
    <Wrapper>
    <BrowserRouter>
    <Provider> 
       <AppRouter/>
    </Provider>
       </BrowserRouter></Wrapper>
  
  )
}

export default App
