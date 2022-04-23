import './App.css';
import Card from './components/contents/card';
import house from './assets/tour/house.jpg';
import hero from './assets/tour/beach.jpg';

import { ArrowSmRightIcon } from '@heroicons/react/outline';
import Header from './components/contents/header';
import MainCard from './components/contents/maincard';

function App() {
  return (
    <div className="">
      <main className="">
        <div>
          <div className="relative block w-full mb-8">
            <Header />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-row justify-between px-6">
              <div className="flex flex-row space-x-8 ">
                {' '}
                <div className="text-left font-semibold capitalize">
                  What is your life style?
                </div>
                <div className="text-sm font-thin text-blue-600 capitalize">
                  {' '}
                  Find your life
                </div>
              </div>
              <div className="capitalize  cursor-pointer  text-sm">
                see all destinations
                {/* <ChevronRightIcon className="h-5 w-5 inline-flex" /> */}
                <ArrowSmRightIcon className="h-5 w-5 inline-flex" />
              </div>
            </div>
          </div>

          <section className="m-4 h-full w-full gap-8 text-center flex flex-row  justify-center items-center mx-auto mb-10  ">
            <Card />
            <Card />

            <Card />
            <Card />
            <Card />
          </section>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-row justify-between px-6">
              <div className="flex flex-row space-x-8 ">
                {' '}
                <div className="text-left font-semibold capitalize">
                  Recommented Tour
                </div>
                <div className="text-sm font-thin text-blue-600 capitalize">
                  {' '}
                  Most Trending Tours right now !!
                </div>
              </div>
              <div className="capitalize cursor-pointer  text-sm">
                Se all 44 tours and activities
                {/* <ChevronRightIcon className="h-5 w-5 inline-flex" /> */}
                <ArrowSmRightIcon className="h-5 w-5 inline-flex" />
              </div>
            </div>
          </div>
          <section className="m-4 h-full max-w-4xl gap-8 text-center flex flex-wrap  justify-center items-center mx-auto mb-10  ">
            <MainCard />
            <MainCard />
            <MainCard />

            <MainCard />
            <MainCard />
            <MainCard />
          </section>

          <section className=" text-center my-10 rounded h-full  mx-auto text-gray-50">
            <div className=" relative capitalize cursor-pointer">
              <img
                src={hero}
                alt="good place to rest"
                className="h-96 w-full  "
              />
              <div className="top-0 w-full h-full bg-black opacity-10 absolute" />
              <div className="top-1/2  absolute text-gray-50 px-4 flex flex-row justify-center font-medium w-full h-full text-center">
                <div className="flex flex-col font-semibold">
                  <h1 className="font-bold text-3xl text-white">
                    {' '}
                    paradise beach{' '}
                  </h1>
                  <p className="text-lg ">
                    Need Help ?contact our agency or drop a message <br />
                    Our Agents will get back to u shortly
                  </p>
                  <button className="bg-gray-50 text-slate-900 font-semibold mx-24 py-2  mt-4 ring-offset-1 rounded-full">
                    Contact us
                  </button>
                </div>
                <br />
              </div>
            </div>
          </section>
          <section className="bg-gray-50 rounded h-full mb-10 max-w-5xl mt-10 mx-auto text-gray-900 p-6 md:p-10">
            <div className="max-w-3xl mx-auto mb-2">
              <div className="flex flex-row justify-between px-6">
                <div className="flex flex-row space-x-8 ">
                  {' '}
                  <div className="text-left font-semibold capitalize">
                    Latest Package
                  </div>
                  <div className="text-sm font-thin text-blue-600 capitalize">
                    {' '}
                    One Day trip{' '}
                    <span className="text-gray-500"> half Day Trip</span>
                  </div>
                </div>
                <div className="capitalize cursor-pointer  text-sm">
                  Se all 44 tours and activities
                  {/* <ChevronRightIcon className="h-5 w-5 inline-flex" /> */}
                  <ArrowSmRightIcon className="h-5 w-5 inline-flex" />
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-6 justify-center">
              <MainCard />
              <MainCard />
              <MainCard />

              <MainCard />
              <MainCard />
              <MainCard />
            </div>
          </section>
          <section className="mb-20 text-gray-700 max-w-4xl mx-auto">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Testimonials
              </h3>
              <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
              <div className="mb-12 md:mb-0">
                <div className="flex justify-center mb-6">
                  <img
                    src={house}
                    className="rounded-full shadow-lg w-32"
                    alt=""
                  />
                </div>
                <h5 className="text-xl font-semibold mb-4">Maria Smantha</h5>
                <h6 className="font-semibold text-blue-600 mb-4">
                  Web Developer
                </h6>
                <p className="mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
                <ul className="flex justify-center mb-0">
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star-half-alt"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 536 512"
                    >
                      <path
                        fill="currentColor"
                        d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="mb-12 md:mb-0">
                <div className="flex justify-center mb-6">
                  <img
                    src={house}
                    className="rounded-full shadow-lg w-32"
                    alt=""
                  />
                </div>
                <h5 className="text-xl font-semibold mb-4">Lisa Cudrow</h5>
                <h6 className="font-semibold text-blue-600 mb-4">
                  Graphic Designer
                </h6>
                <p className="mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
                <ul className="flex justify-center mb-0">
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
              <div className="mb-0">
                <div className="flex justify-center mb-6">
                  <img
                    src={house}
                    className="rounded-full shadow-lg w-32"
                    alt=""
                  />
                </div>
                <h5 className="text-xl font-semibold mb-4">John Smith</h5>
                <h6 className="font-semibold text-blue-600 mb-4">
                  Marketing Specialist
                </h6>
                <p className="mb-4">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="quote-left"
                    className="w-6 pr-2 inline-block"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                  </svg>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <ul className="flex justify-center mb-0">
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="star"
                      className="w-4 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <div className="container my-24 px-6 mx-auto">
            {/* <!-- Section: Design Block --> */}
          {/* <section className="mb-32 text-gray-800 text-center">
              <style></style>
              <div className="px-6 py-12 md:px-12">
                <div className="container mx-auto xl:px-32">
                  <div className="lg:grid lg:grid-cols-2 flex items-center">
                    <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                      <div
                        className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                        style={{
                          background: 'hsla(0, 0%, 100%, 0.55)',
                          backdropTilter: 'blur(30px)',
                        }}
                      >
                        <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                      </div>
                    </div>
                    <div className="md:mb-12 lg:mb-0">
                      <div
                                      className="
                      h[700px]
                      -z-1;
                    relative shadow-lg rounded-lg"
                      >
                        <iframe
                          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          title="location"
                          className="left-0 top-0 h-full w-full absolute rounded-lg"
                          frameborder="0"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div> */}
        </div>
      </main>
    </div>
  );
}
export default App;
