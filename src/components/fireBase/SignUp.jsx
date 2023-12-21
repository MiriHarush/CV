import React, { useState } from 'react'
import { addUser, app } from './fireBaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')


  const auth = getAuth();
  const navigate = useNavigate();
  const signUpUser = () => {
    // e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        console.log('signUp succesfully')
        addUser(email, password, role)
        navigate("/createCV")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      })
  }
  return (
    <div className="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8 shadow m-5">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <form className="space-y-6" > */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              // name="email"
              // type="email"
              type="email" name='email'
              placeholder='   Email address'
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <br />
        <div>
          {/* <div className="flex items-center justify-between"> */}
          <div >
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            {/* <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div> */}
          </div>
          <div className="mt-2">
            <input
              id="password"
              // name="password"
              // type="password"
              type="password" name='password'
              placeholder='   Password'
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => signUpUser()}
          >
            Sign up
          </button>
        </div>
        {/* </form> */}

        {/* <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p> */}
      </div>
    </div>
    // <div>

    //   {/* <label htmlFor="signUp">Email: </label> */}
    //   <input placeholder='Email' type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
    //   {/* <label htmlFor="signIn">Password: </label> */}
    //   <input placeholder='Password' type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
    //   <button onClick={() => signUpUser()}>Sign-Up</button>

    // </div>
  )
}
