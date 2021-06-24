import React, { useEffect, useState } from 'react';

export default function HoneNavigation() {
  const [dark, setDark] = useState(false);
  const [onTop, setOnTop] = useState(false);

  const navItems = [

  ];

  useEffect(() => {
    const onScroll = (e: Event) => {
      console.log((e.target as any).documentElement.scrollTop);
      setOnTop((e.target as any).documentElement.scrollTop < 100);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeTheme = () => {
    setDark(!dark);
  };

  return (
    <nav className={`fixed top-0 w-full bg-white transition-all duration-300 ${onTop ? '' : 'shadow'}`}>
      <div className="container mx-auto flex justify-between items-center px-5 py-3 font-semibold">
        <a className="hover:text-indigo-700 transition-all">
          <i className="uil uil-arrow text-4xl align-middle" />
          <span className="align-middle ml-2">MessCode</span>
        </a>
        <div className="flex items-center">
          <a href=""
            className="hover:text-indigo-700 transition-all">
            Home
          </a>
          <a href=""
            className="hover:text-indigo-700 transition-all ml-8">
            About
          </a>
          <a href=""
            className="hover:text-indigo-700 transition-all ml-8">
            Skills
          </a>
          <a href=""
            className="hover:text-indigo-700 transition-all ml-8">
            Services
          </a>
          <a href=""
            className="hover:text-indigo-700 transition-all ml-8">
            Contacts
          </a>
          <a href=""
            className="hover:text-indigo-700 transition-all ml-8">
            Contacts
          </a>
          <div className="inline ml-8 hover:text-indigo-700 w-5" onClick={() => changeTheme()}>
            <i className={`uil ${dark ? 'uil-brightness-empty' : 'uil-moon'} sm:text-xl `} />
          </div>
        </div>
      </div>
    </nav>
  );
}
