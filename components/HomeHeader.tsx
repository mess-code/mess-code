import React, { MutableRefObject } from 'react';
import { Transition } from '@headlessui/react'
import PrimaryButton from './PrimaryButton';

export interface HomeHeaderProps {
  nextHref?: string;
  nextRef?: MutableRefObject<null | HTMLElement>;
}

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = ({ nextHref, nextRef }) => {
  const scrollDown = () => {
    if (nextRef && nextRef.current) {
      nextRef.current.scrollIntoView({ behavior: 'smooth', 'block': 'start' });
    }
  }

  return (
    <div className="bg-white lg:container mx-auto px-4 sm:pb-0 pb-16 h-screen">
      <div className="flex flex-wrap justify-between items-center content-center"
        style={{ height: 'calc(100vh - 5rem)' }}>
        {/** Contact icons */}
        <div className="w-1/12 text-indigo-700">
          <a className="inline-block"
            href="https://google.com" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-linkedin-alt text-2xl" />
          </a>
          <br />
          <a className="inline-block mt-4"
            href="https://google.com" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-github-alt text-2xl" />
          </a>
          <br />
          <a className="inline-block mt-4"
            href="https://google.com" target="_blank" rel="noopener noreferrer">
            <i className="uil uil-facebook-f text-2xl" />
          </a>
        </div>

        {/** Title */}
        <div className="lg:w-4/12 sm:w-5/12 w-12/12 sm:order-none order-last">
          <div className="">
            <h1 className="text-indigo-700">Hi, I&#39;m Hai</h1>
            <h3 className="font-medium text-gray-500 sm:mt-4 mt-2">Software engineer</h3>
            <p className="text-gray-500 sm:mt-8 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s,
            </p>

            <div className="sm:mt-12 mt-8">
              <PrimaryButton content="Contact Me" icon="uil uil-message" />
            </div>
          </div>
        </div>

        {/** Image */}
        <div className="lg:w-5/12 sm:w-5/12 w-11/12">
          <svg className="fill-current text-indigo-700 block w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha">
              <path d="M52.2,-43.2C62.1,-29.3,60.6,-7.9,55.2,11.3C49.8,30.5,40.5,47.6,26.1,54.5C11.8,61.5,-7.4,58.5,-23.5,50.2C-39.5,41.9,-52.3,28.4,-60.1,9.3C-68,-9.7,-70.8,-34.2,-60,-48.4C-49.1,-62.5,-24.6,-66.2,-1.7,-64.8C21.2,-63.5,42.4,-57.1,52.2,-43.2Z" transform="translate(100 100)" />
            </mask>
            <g mask="url(#mask0)">
              <path d="M52.2,-43.2C62.1,-29.3,60.6,-7.9,55.2,11.3C49.8,30.5,40.5,47.6,26.1,54.5C11.8,61.5,-7.4,58.5,-23.5,50.2C-39.5,41.9,-52.3,28.4,-60.1,9.3C-68,-9.7,-70.8,-34.2,-60,-48.4C-49.1,-62.5,-24.6,-66.2,-1.7,-64.8C21.2,-63.5,42.4,-57.1,52.2,-43.2Z" transform="translate(100 100)" />
              <image className="w-5/6 h-5/6" x="13" y="18" xlinkHref="/avatar.png" />
            </g>
          </svg>
        </div>
      </div>

      {/** Scroll down */}
      <div className="flex-wrap justify-between items-center content-center h-20 hidden lg:flex">
        <div className="w-1/12"></div>
        <div className="w-10/12">
          <a className="inline-block" href={nextHref} onClick={scrollDown}>
            <div className="flex items-center font-medium hover:text-indigo-700">
              <i className="uil uil-mouse-alt text-2xl mr-1 text-indigo-700"></i>
              Scroll down
              <i className="uil uil-angle-down text-xl ml-1 text-indigo-700"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
