import React from 'react';

function Card({ image, name, description, rating, author }) {
  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden">
      <div>
        <img src={image} alt={name} className="w-full h-44 object-cover" />
        <div className="p-4">
          <h3 className="text-base font-bold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 flex justify-between items-center text-sm font-semibold">
        <span className="text-amber-500">⭐ {rating}</span>
        <span className="text-gray-700">{author}</span>
      </div>
    </div>
  );
}

export default Card;