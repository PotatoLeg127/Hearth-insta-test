import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-12 relative">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8A%3D%3D"
          alt="Delicious Food"
          className="rounded-lg shadow-md w-full object-cover h-96"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Hearth &amp; Bean - Your Home Away From Home
          </h1>
          <button className="bg-secondary text-white font-bold py-2 px-8 rounded-full hover:bg-accent transition-colors duration-300">
            Reserve a Table
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Welcome</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Hearth &amp; Bean aims to deliver a homelike feeling; the ability to harmonize and ease off the hectic steps and pace is the desire of everyone.
          Therefore, in Hearth &amp; Bean, we commit our goals to serve and provide the most comfortable environment.
          From the spacious layout and comfortable ambiance, you will never feel congested and noisy, all you are allowed is to relax and enjoy the best moments here.
        </p>
      </section>

      {/* Quick Links */}
      <section className="flex justify-around">
        <a href="/menu" className="bg-primary text-white font-bold py-2 px-8 rounded-full hover:bg-secondary transition-colors duration-300">
          Menu
        </a>
        <a href="/reservations" className="bg-primary text-white font-bold py-2 px-8 rounded-full hover:bg-secondary transition-colors duration-300">
          Reservations
        </a>
        <a href="/contact" className="bg-primary text-white font-bold py-2 px-8 rounded-full hover:bg-secondary transition-colors duration-300">
          Contact
        </a>
      </section>
    </div>
  );
};

export default Home;
