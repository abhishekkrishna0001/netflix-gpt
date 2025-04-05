import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/Validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm] =useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [validationError, setValidationError] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const validationMessage = checkValidateData(fullName?.current?.value, email.current.value, password.current.value);
    setValidationError(validationMessage);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 my-36 bg-black/85 m-auto right-0 left-0 text-white rounded-lg">
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input ref={fullName} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
        <p className='font-bold text-red-500'>{validationError}</p>
        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer">{isSignInForm? 'Sign In' : 'Sign Up'}</button>
        <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>
      </form>
    </div>
  )
};

export default Login;