'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push(formData);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
    setSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div
      className="min-h-screen bg-gray-50 bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="bg-black/40 min-h-screen">
        <Header />
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md border border-gray-200 mt-10">
          <h2
            className="text-3xl font-bold text-blue-600 mb-6 text-center"
            style={{ fontFamily: 'Pacifico, serif' }}
          >
            Feedback
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Feedback</label>
              <textarea
                name="feedback"
                required
                value={formData.feedback}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Feedback
            </button>
          </form>

          {submitted && (
            <p className="text-green-600 mt-4 text-center">Thank you for your feedback!</p>
          )}
        </div>
      </div>
    </div>
  );
}
