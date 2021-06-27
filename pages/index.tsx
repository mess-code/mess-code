import Head from 'next/head';
import HomeNavigation from '../components/HomeNavigation';

const Home: React.FunctionComponent = () => {
  const navItems = [
    { href: '#', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#skills', name: 'Skills' },
    { href: '#services', name: 'Services' },
    { href: '#contact', name: 'Contact' },
  ];

  return (
    <>
      <HomeNavigation navItems={navItems}/>

      <div className="bg-blue-300 h-screen"></div>
      <div className="bg-red-300 h-screen"></div>
    </>
  )
}

export default Home;
