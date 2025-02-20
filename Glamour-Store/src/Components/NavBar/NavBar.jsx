import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; 


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const NavItems = [
    { label: 'Home', url: '/' },
    { label: 'Categories', url: '/categories'},
    { label: 'Contact', url: '/contact'},
    { label: 'SignUp', url: '/signup'}
    // { label: "Women's", url: '/women'},
    // { label: "Men's", url: '/men'},
    // { label: "Kid's", url: '/kids'},
  ];

  return (
    <div className='bg-amber-600 flex items-center justify-between px-6 w-full h-16'>
      <div className='flex items-center'>
        <h1 className='text-white font-bold text-xl'>Glamour</h1>
      </div>

      <ul className='hidden lg:flex gap-5 text-white'>
        {NavItems.map(item => (
          <li key={item.label}>
            <a href={item.url} className="hover:text-gray-200">{item.label}</a>
          </li>
        ))}
      </ul>

  
      <div className='lg:hidden'>
        <GiHamburgerMenu 
          className='text-white text-2xl cursor-pointer' 
          onClick={handleToggle} 
        />
      </div>

      
      {toggle && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50'>
          <AiOutlineClose 
            className='text-white text-3xl absolute top-6 right-6 cursor-pointer' 
            onClick={handleToggle} 
          />

          <ul className='text-white text-lg space-y-6'>
            {NavItems.map(item => (
              <li key={item.label}>
                <a href={item.url} className="hover:text-gray-400" onClick={handleToggle}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
