// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://node-jwt-backend.onrender.com/api/login', formData);
      localStorage.setItem('accessToken', res.data.accessToken);
      setMessage('Login successful');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
    >
      <h2 className="text-2xl font-semibold">Login</h2>
      <input
        type="text"
        name="identifier"
        placeholder="Username or Email"
        value={formData.identifier}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
      >
        Login
      </button>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </form>
  );
}
