import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ResumeForm from './Resume';
import ShowAllResume from './showResume/ShowAllResume';
import ShowResume from './showResume/ShowResume';

export default function AppRouter() {
  return (
    <div>
    
            <Routes>

                {/* <Route path='/edit' element={<ResumeForm />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/list' element={<ResumesList />} /> */}
                <Route path='/' element={<Home/>} />
                <Route path='/createCV'  element={<ResumeForm/>}></Route>
                <Route path='/showCV'  element={<ShowResume/>}></Route>
                <Route path='/showAllCV'  element={<ShowAllResume/>}></Route>

            </Routes>
        </div>
    
  )
}
