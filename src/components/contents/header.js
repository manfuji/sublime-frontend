import React from 'react';
import heroimage from '../../assets/tour/mount.jpg';
import { PhoneIcon, SearchIcon } from '@heroicons/react/outline';
function Header() {
  return (
    <div className="mb-10">
      <div
        className="relative pt-16 flex content-center items-center justify-center"
        style={{
          minHeight: '75vh',
        }}
      >
        <div
          className="absolute top-0 w-full h-full z-0 object-cover bg-cover  object-center"
          style={{
            backgroundImage: `url(${heroimage})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-20 bg-black"
          ></span>
        </div>

        {/* caption on cover image */}
        <div className="container relative mx-auto" data-aos={'fade-left'}>
          <div className="items-center flex justify-center flex-wrap">
            <div className="w-full lg:w-6/12 px-4 text-center">
              <div className="pr-12 capitalize">
                <h1 className=" font-semibold text-5xl capitalize text-slate-50">
                  Got A dream To travel ?
                  <br />
                  <h2 className=" font-semibold text-3xl capitalize text-slate-50">
                    {' '}
                    We got you covered{' '}
                  </h2>
                </h1>
                <p className="mt-4 text-xl text-gray-50 flex flex-row justify-center gap-6">
                  <button className="ring-1 p-1 ring-offset-2 animate-bounce bg-gradient-to-br to-blue-800 from-blue-500 text-white rounded-xl px-4 py-2 ">
                    View Our Offers
                  </button>
                  <p className="font-bold text-3xl">
                    {' '}
                    <PhoneIcon className="h-6 w-6 text-white inline-flex" />{' '}
                    +2233566484
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl -pt-4  z-10 flex rounded-xl shadow-inner bg-gradient-to-tl to-blue-100 from-blue-900  flex-row  mx-auto ring-1 ">
        <SearchIcon className="w-10 h-10 pt-1 inline-flex text-blue-600" />
        <input
          type="text"
          className="  py-3 outline-none w-full rounded-xl text-neutral-900 bg-gradient-to-tl to-blue-100 from-blue-900 ring-blue-700"
        />
      </div>
    </div>
  );
}

export default Header;
