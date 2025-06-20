// App.jsx
import React from 'react';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Protected from './components/Protected.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <h1 className="text-3xl font-bold mb-6">Auth System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Register />
        <Login />
      </div>
      <Protected />
    </div>
  );
}
