import React, { MutableRefObject, useEffect, useState } from 'react';
import { Popover, Transition } from "@headlessui/react";
import Link from 'next/link';

export interface NavItem {
  icon: string;
  href: string;
  name: string;
  ref?: MutableRefObject<null | HTMLElement>
}

export interface HomeNavigationProps {
  navItems: NavItem[];
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
    if (!dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setDark(!dark);
  };

  const scrollToRef = (item: NavItem) => {
    if (item.ref && item.ref.current) {
      item.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  const renderMobileNavItems = (navItems: HomeNavigationProps['navItems'], itemsEachRow: number = 3) => {
    const widthClass = `w-1/${itemsEachRow}`;
    return navItems.map((item) => (
      <a className={`inline-block p-1 ${widthClass}`}
        href={item.href} key={item.href} >
        <div className={`rounded-md w-full h-full px-2 py-4 flex flex-wrap justify-center items-stretch hover:text-indigo-700 hover:bg-indigo-50 ${widthClass}`}
          onClick={() => { scrollToRef(item) }}>
          <i className={`text-xl block uil mx-auto ${item.icon}`} />
          <p className="w-full text-center font-medium text-sm">{item.name}</p>
        </div>
      </a>
    ));
  };

  return (
    <nav className={`fixed w-full bg-white transition-all duration-300 bottom-0 lg:top-0 lg:bottom-auto z-40 ${onTop ? '' : 'shadow'}`}>
      <div className="lg:container mx-auto flex justify-between items-center lg:py-3 px-4 py-1 font-medium">
        <Link href="/" passHref={true}>
          <a>
            <div className="flex items-center hover:text-indigo-700 transition-all">
              <i className="uil uil-arrow lg:text-4xl text-2xl" />
              <span className="ml-2 lg:text-base text-sm">MessCode</span>
            </div>
          </a>
        </Link>

        {/** Right nav in desktop */}
        <div className="items-center lg:flex hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => { scrollToRef(item) }}
              className="hover:text-indigo-700 transition-all ml-10">
              {item.name}
            </a>
          ))}
          <button className="inline ml-10 hover:text-indigo-700 w-4 focus:outline-none" onClick={changeTheme}>
            <i className={`uil ${dark ? 'uil-brightness-empty' : 'uil-moon'} text-xl`} />
          </button>
        </div>

        {/** Right nav in mobile */}
        <div className="items-center lg:hidden flex">
          <div className="inline mr-4 hover:text-indigo-700" onClick={changeTheme}>
            <i className={`uil ${dark ? 'uil-brightness-empty' : 'uil-moon'} text-xl`} />
          </div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className={`hover:text-indigo-700 focus:outline-none ${open ? 'text-indigo-700' : 'text-black'}`}>
                  <i className={`uil ${open ? 'uil-multiply' : 'uil-apps'} text-xl`} />
                </Popover.Button>

                <Popover.Panel className="fixed bg-white rounded-t-xl p-1 flex flex-wrap justify-end bottom-10 right-0 left-0 w-full sm:bottom-12 sm:right-2 sm:left-auto sm:rounded sm:w-96"
                  style={{ boxShadow: '0 -5px 10px -5px rgba(50, 50, 50, 0.3)' }}>
                  {renderMobileNavItems(navItems, 3)}
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
