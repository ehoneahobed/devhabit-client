// pages/login.js
"use client";
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto flex items-center justify-center min-h-screen">
      <div className="p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-5 text-center text-slate-700">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
