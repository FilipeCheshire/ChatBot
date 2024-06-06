
import React from 'react';

const colorClasses = {
  purple: 'border-purple-700 hover:bg-purple-700',
  blue: 'border-blue-700 hover:bg-blue-700',
  red: 'border-red-700 hover:bg-red-700',
  green: 'border-green-700 hover:bg-green-700',
  yellow: 'border-yellow-700 hover:bg-yellow-700',
  gray: 'border-gray-700 hover:bg-gray-700'
};

const Botao = ({ color, children, label, ...props }) => {
  const colorClass = colorClasses[color] || colorClasses['purple'];

  return (
    <button 
      className={`text-black hover:text-white border rounded-md px-3 my-2 mr-5 font-normal transition-all ${colorClass}`}
      {...props}
    >{label}
      {children}
    </button>
  );
};

export default Botao;