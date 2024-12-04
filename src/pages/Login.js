import React, { useContext, useState } from 'react';
import { LoginContext } from './context/LoginContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './admin/axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const{user,setUser}=useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    // Implement login logic here
    try{
    const response = await axiosInstance.post('/api/v1/admin/login',{email,password});
        setUser(response.data.data);
        navigate('/admin/products');
    }catch(error){
      alert(error.response.data.message);
    }    
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary text-black font-medium py-2 rounded hover:bg-red-200 transition duration-200"
          >
            Login
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Login;
