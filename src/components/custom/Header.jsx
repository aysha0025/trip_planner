import logo from '@/assets/logo.svg'
import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Header = () => {
  const [ active, setActive ] = useState('/');
  const handleNavClick = (path) => setActive(path);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Top Plans', path: '/top-plans' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className='flex justify-between items-center p-3 px-[50px] shadow-md'>
      <img src={logo} className='w-[250px] h-[auto]' alt="logo" />

      <div className="nav_links flex gap-2 items-center">
        { navLinks.map((navItem, index) => (
            <Link key={index} to={navItem.path} onClick={() => handleNavClick(navItem.path)} 
            className={active === navItem.path ? 'bg-[#0D0560] px-5 py-3 rounded-lg text-white' : 'text-[#0D0560] px-5 py-3 rounded-lg'} >{navItem.name}</Link>
        ))}
      </div>
      
      <button className='bg-[#0D0560] text-white px-5 py-3 rounded-lg flex items-center gap-2'>
        Sign In <GoArrowUpRight /></button>
    </div>
  )
}

export default Header
