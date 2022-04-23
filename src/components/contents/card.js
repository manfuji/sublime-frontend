import React from 'react';
import heroimage from '../../assets/tour/bg.jpg';

function Card() {
  return (
    <div className="w-56 h-56 relative capitalize cursor-pointer">
      <img
        src={heroimage}
        alt="good place to rest"
        className="h-full w-full  "
      />
      <div className="top-0 w-full h-full bg-black opacity-10 absolute" />
      <div className="top-3/4 absolute text-gray-50 px-4 flex flex-row justify-between font-medium w-full h-full text-center">
        <h1> paradise beach </h1>
        <span>30 hours</span>
      </div>
    </div>
  );
}

export default Card;
