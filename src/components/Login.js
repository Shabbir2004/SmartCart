import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [signupDetails, setSignupDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (signupDetails) {
      setEmail(signupDetails.email);
      setPassword(signupDetails.password);
    }
  }, [signupDetails]);

  const isFormValid = () => {
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!isLogin && !name) errors.name = 'Name is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (isFormValid()) {
      if (isLogin) {
        console.log('Login with:', { email, password });
        navigate('/');
      } else {
        console.log('Sign up with:', { name, email, password });
        setSignupDetails({ email, password });
        setIsLogin(true);
      }
    }
  };

  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md h-auto bg-white shadow-lg rounded-xl p-8 md:p-10'>
        <h3 className='text-3xl font-semibold text-center mb-6 text-gray-800'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h3>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 border ${formErrors.name && formSubmitted ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.name && formSubmitted && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
            </div>
          )}
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 border ${formErrors.email && formSubmitted ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {formErrors.email && formSubmitted && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
          </div>
          <div className='relative'>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 border ${formErrors.password && formSubmitted ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
              <input 
                type="checkbox" 
                checked={showPassword} 
                onChange={() => setShowPassword(!showPassword)} 
                className='mr-2'
              />
              <span className='text-sm text-gray-600'>Show Password</span>
            </div>
            {formErrors.password && formSubmitted && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
          </div>
          <div className='flex items-center justify-between mt-4'>
            <button 
              type="submit" 
              className={`w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300`}
            >
              {isLogin ? 'Login' : 'Continue'}
            </button>
          </div>
          <p className='text-center text-md mt-4'>
            {isLogin ? (
              <>
                Don't have an account? <span className='text-blue-500 cursor-pointer hover:underline' onClick={() => { setIsLogin(false); setFormSubmitted(false); }}>Create new account</span>
              </>
            ) : (
              <>
                Already have an account? <span className='text-blue-500 cursor-pointer hover:underline' onClick={() => { setIsLogin(true); setFormSubmitted(false); }}>Login</span>
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
