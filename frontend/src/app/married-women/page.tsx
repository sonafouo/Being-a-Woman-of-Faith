import React from 'react';

const MarriedWomenSpace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-6">Married Women Space</h1>
      <p className="text-lg mb-4">
        Welcome to the Married Women Space! Here you can find resources to build a Christ-centered marriage and home.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Resources for Married Women</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Bible study guides for couples</li>
          <li>Christian marriage counseling resources</li>
          <li>Devotionals for married life</li>
          <li>Parenting advice from a faith perspective</li>
        </ul>
      </div>
    </div>
  );
};

export default MarriedWomenSpace;
