import React from 'react';
import './List.css'; // Ensure you update this file if needed for additional custom styles
import img from "../../../image/bag.jpg";

function List() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
      <div className="flex items-start gap-4 mb-6">
        <img
          src={img}
          alt="Eco bags and merch"
          className="w-1/2 h-auto rounded shadow-lg"
        />
        <div>
          <p className="text-sm text-gray-600 mb-2">Branding, Strategy</p>
          <h2 className="text-2xl font-semibold mb-4">Design for Eco Bags and Merch</h2>
          <p className="text-gray-800 leading-relaxed">
            Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel
            quisque proin lectus. Morbi et massa fames ac scelerisque sit commodo dignissim vel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default List;
