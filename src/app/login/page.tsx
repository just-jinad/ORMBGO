"use client"
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    axios.post("/api/user/login", user)
      .then((res) => {
        if (res.status === 200) {
          let token = res.data.token;
          localStorage.setItem('token', token);
          toast.success('Login successful');
          router.push("/dashboard");
        }
      }).catch((err) => {
        if (err.response?.status === 401) {
          toast.error('Wrong username or password');
        } else {
          toast.error('Network Error!');
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Section (hidden on small screens, visible on medium and larger screens) */}
      <div className="hidden md:flex w-1/2 bg-teal-900 text-white flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">ORMBGO</h1>
        <p className="text-lg">
        Committed to empowering by providing them with a direct avenue to showcase. We believe in the importance of supporting local agriculture and helping farmers thrive in their communities.
        </p>
      </div>

     
      <div className="flex flex-1 justify-center items-center w-full  p-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md  p-8 rounded-lg "
        >
          <h5 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Login</h5>
          
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username:</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="username"
              placeholder="Enter your username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
