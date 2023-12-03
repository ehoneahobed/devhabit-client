// components/LoginForm.js
"use client";
import React, { useState,  useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState('');
//   const { setAuthToken } = useContext(AuthContext); // If you have an AuthContext to hold the token
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any existing errors

    try {
      // Replace with your API endpoint
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
        email: credentials.email,
        password: credentials.password,
      });

      // Assume the response contains the token
      const { token } = response.data;

      // Store the token using context and/or localStorage
    //   setAuthToken(token);
      localStorage.setItem('authToken', token);

      // Redirect to the user's dashboard or home page
      router.push('/dashboard'); // Change to the path you wish to redirect after login
    } catch (error) {
      // Handle errors, e.g., show an error message
      const errorMessage = error.response?.data?.message || error.message;
      setError(errorMessage);
        console.log(errorMessage)
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-slate-600">
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Log In
      </button>
      <div className="text-center text-slate-700 flex justify-center gap-2">
        <p>Don't have an account?</p>  
        <Link href="/register" className="text-blue-600 hover:underline">
            Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
