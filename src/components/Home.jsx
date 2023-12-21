import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import LogIn from './fireBase/LogIn';
import SignOut from './fireBase/SignOut';
import SignUp from './fireBase/SignUp';

export default function Home() {
    return (
        <div className='flex'>
            <SignUp />
            <LogIn />
        </div>
    )
}
