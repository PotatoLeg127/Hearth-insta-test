import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Menu</h1>
      <p className="text-gray-700 leading-relaxed">
        Check out our delicious menu items below:
      </p>
      {/* Add menu items here */}
    </div>
  );
};

export default Menu;
