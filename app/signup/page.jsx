'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${name}`);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1694475163305-69050e25af54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 backdrop-blur-sm bg-white/60">
        <div className="max-w-md w-full bg-white/90 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create a New Account</h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-700 mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
