import React, { useEffect, useState } from 'react';
import { Popover } from "@headlessui/react";

export interface HomeNavigationProps {
  navItems: {
    href: string;
    name: string;
  }[];
}

const HomeNavigation: React.FunctionComponent<HomeNavigationProps> = ({ navItems = [] }) => {
  const [dark, setDark] = useState(false);
  const [onTop, setOnTop] = useState(false);

  useEffect(() => {
    const onScroll = (e: Event) => {
      setOnTop((e.target as any).documentElement.scrollTop < 100);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeTheme = () => {
    setDark(!dark);
  };

  return (
    <nav className={`fixed w-full bg-white transition-all duration-300 bottom-0 lg:top-0 lg:bottom-auto z-10 ${onTop ? '' : 'shadow-2xl'}`}>
      <div className="lg:container mx-auto flex justify-between items-center lg:px-5 lg:py-3 px-2 py-1 font-semibold">
        <div className="flex items-center hover:text-indigo-700 transition-all">
          <i className="uil uil-arrow lg:text-4xl text-2xl" />
          <span className="ml-2 lg:text-base text-sm">MessCode</span>
        </div>

        {/** Right nav in desktop */}
        <div className="items-center lg:flex hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}
              className="hover:text-indigo-700 transition-all ml-8">
              {item.name}
            </a>
          ))}
          <div className="inline ml-8 hover:text-indigo-700 w-5" onClick={() => changeTheme()}>
            <i className={`uil ${dark ? 'uil-brightness-empty' : 'uil-moon'} text-xl`} />
          </div>
        </div>

        {/** Right nav in mobile */}
        <div className="items-center lg:hidden flex">
          <div className="inline mr-2 hover:text-indigo-700 w-5" onClick={() => changeTheme()}>
            <i className={`uil ${dark ? 'uil-brightness-empty' : 'uil-moon'} text-xl`} />
          </div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className={`hover:text-indigo-700 focus:outline-none ${open ? 'text-indigo-700' : 'text-black'}`}>
                  <i className={`uil uil-apps text-xl`} />
                </Popover.Button>

                <Popover.Panel className="fixed bg-white rounded-t bottom-10 right-0 left-0 sm:bottom-12 sm:right-2 sm:left-auto sm:rounded">
                  <div className="h-32 w-96"></div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavigation;
