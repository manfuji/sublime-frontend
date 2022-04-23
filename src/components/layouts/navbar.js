import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full flex top-0 flex-col py-4 md:font-medium md:text-lg font-normal  md:px-8 text-gray-50 md:flex-row justify-between bg-blue-400 ">
      <div className="hover:bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
        <a href="/">Sublime Adventure</a>
      </div>
      <div className="flex flex-row gap-6">
        <div className="hover:bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
          <a href="/trip">Trips</a>
        </div>
        <div className="hover:bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
          <a href="/recommend">Recommented Places</a>
        </div>
        <div className="hover:bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
          <a href="/transport">Transport</a>
        </div>
        <div className="hover:bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
          {/* <Link to="/contact"> */}
          <a href="/contact">Contact</a>
          {/* </Link> */}
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div className="hover:bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
          Buy Ticket
        </div>
        <div className="bg-blue-500 md:py-1 md:px-2 rounded-lg cursor-pointer">
          +23354939049
        </div>
      </div>
    </div>
  );
}

export default Navbar;
