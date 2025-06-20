import React, { useState } from 'react';
import axios from 'axios';

export default function Protected() {
  const [data, setData] = useState('');
  const [error, setError] = useState('');

  const fetchProtected = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.get('https://node-jwt-backend.onrender.com/api/protected', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to access protected route');
      setData('');
    }
  };

  return (
    <div className="mt-6 bg-white shadow-md p-6 rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Protected Route</h2>
      <button
        onClick={fetchProtected}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
      >
        Get Protected Data
      </button>
      {data && <p className="mt-4 text-green-600">{data}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}