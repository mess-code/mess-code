import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import HomeNavigation from '../components/HomeNavigation';
import HomeHeader from '../components/HomeHeader';
import HomeAbout from '../components/HomeAbout';

const Home: React.FunctionComponent = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  const navItems = [
    { href: '#home', name: 'Home', icon: 'uil-estate', ref: home },
    { href: '#about', name: 'About', icon: 'uil-user', ref: about },
    { href: '#skills', name: 'Skills', icon: 'uil-search', ref: skills },
    { href: '#services', name: 'Services', icon: 'uil-bag', ref: services, },
    { href: '#contact', name: 'Contact', icon: 'uil-message', ref: contact },
  ];

  return (
    <>
      <main>
        <header>
          <HomeNavigation navItems={navItems} />
        </header>

        <section ref={home}>
          <HomeHeader nextHref="#about" nextRef={about} />
        </section>

        <section ref={about}>
          <HomeAbout />
        </section>

        <div className="bg-red-300 h-96" ref={skills}></div>
        <div className="bg-green-300 h-96" ref={services}></div>
      </main>
    </>
  )
}

export default Home;
