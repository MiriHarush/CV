import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export default function SignOut() {
  const navigate = useNavigate()
  const auth = getAuth();
  const signOutUser = (e) => {
    e.preventDefault()
    signOut(auth).then(() => {
      console.log('user log out succesfully')
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div>
      <button onClick={signOutUser}>Sign Out</button>
    </div>
  )
}
