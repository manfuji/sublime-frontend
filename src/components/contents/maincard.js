import {
  ClockIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import React from 'react';
import heroimage from '../../assets/tour/house.jpg';

function MainCard() {
  return (
    <div className="w-56 h-56 relative capitalize cursor-pointer">
      <img
        src={heroimage}
        alt="good place to rest"
        className="h-1/2 w-full  "
      />
      <div>
        <h1 className="font-semibold pl-2 text-lg text-left">Boti falls</h1>
      </div>
      <div className="flex flex-row justify-between px-2 text-slate-700">
        <div className="text-left">
          <div>
            <UsersIcon className="h-3  w-3 inline-flex text-blue-600" />
            <span className="capitilzed pl-1 text-sm font-thin">
              Private Tour
            </span>
          </div>
          <div>
            <LocationMarkerIcon className="h-3  w-3 inline-flex text-blue-600" />
            <span className="capitilzed pl-1 text-sm font-thin">Eastern</span>
          </div>
          <div>
            <ClockIcon className="h-3  w-3 inline-flex text-blue-600" />
            <span className="capitilzed pl-1 text-sm font-thin">12 Hours</span>
          </div>
        </div>
        <div className=" border my-3" />
        <div className="flex flex-col mt-4">
          <span className="font-semibold">Start Price</span>
          <span className="font-bold text-lg">$3,000</span>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
