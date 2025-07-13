'use client';

import React, { useState } from 'react';

interface LoginNowProps {
  onRegister: (credentials: { email: string; password: string }) => Promise<void>;
}

const LoginNow: React.FC<LoginNowProps> = ({ onRegister }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onRegister({ email, password });
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[350px] md:max-w-[400px] mx-auto p-6 bg-white rounded-2xl font-bold shadow-lg">
      <h2 className="text-black text-2xl mb-6 text-center font-montserrat">Login Now</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm text-black font-montserrat">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full text-black px-3 py-2 border border-gray-500 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm text-black font-montserrat">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-500 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            />
            <label className="mt-2 flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="ml-1"
              />
              <span className="text-sm text-gray-800">Show Password</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              loading ? 'bg-gray-600' : 'bg-black'
            } focus:outline-none focus:ring-2 focus:ring-black focus:border-black`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginNow;
