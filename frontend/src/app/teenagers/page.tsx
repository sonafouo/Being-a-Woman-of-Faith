import React from 'react';

const TeenagerSpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-6">Teenager Space</h1>
      <p className="text-lg mb-4">
        Welcome to the Teenager Space! This is where you can navigate your faith journey during these transformative years.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Resources for Teenagers</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Bible study guides for teens</li>
          <li>Devotional materials</li>
          <li>Faith-based advice for common teenage challenges</li>
          <li>Testimonies from other Christian teens</li>
        </ul>
      </div>
    </div>
  );
};

export default TeenagerSpace;
