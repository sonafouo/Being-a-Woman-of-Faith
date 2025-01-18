import React from 'react';

const YoungWomanSpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-6">Young Woman Space</h1>
      <p className="text-lg mb-4">
        Welcome to the Young Woman Space! Here you can discover God's purpose for your single season and grow in your faith.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Resources for Young Women</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Bible study guides for young adults</li>
          <li>Career and education guidance from a faith perspective</li>
          <li>Devotionals for personal growth</li>
          <li>Advice on relationships and dating as a Christian</li>
        </ul>
      </div>
    </div>
  );
};

export default YoungWomanSpace;
