import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/300"
        alt="Card Image"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">Card Title</h3>
        <p className="text-gray-600 mt-2">
          This is a simple card component using Tailwind CSS.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
