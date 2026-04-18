import React from 'react';

function Header() {
  return (
    <header id="home" className="text-center py-10 bg-[#2F4156] text-white">
       <h1 className="text-4xl font-bold">HI! I'm Nelson</h1>

      <img
        src="IMG_20230604_123311_203.webp"
        alt="Profile"
        className="w-40 h-40 mx-auto mt-6 rounded-full border-4 border-[#C8D9E6]
                   object-cover transition hover:scale-105 duration-300"
      />

      <p className="mt-6 text-[#C8D9E6] max-w-xl mx-auto">
        Welcome to my profile page. Here you can learn more about me!
      </p>
    </header>
  );
}

export default Header;