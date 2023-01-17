import './Navbar.css';
import React from 'react';
import { useState } from 'react';
import { MenuItems } from './NavbarMenuItems';
import useWindowDimensions from './windowDimensions'
import useScrollPosition from './useScrollPosition'
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  let [isDropDownClicked, setIsDropDownClicked] = useState(false);
  const { height, width } = useWindowDimensions();
  const scrollPosition = useScrollPosition();

  let dropDownClick = () => {
    setIsDropDownClicked(prev => !prev);
  }

  let dropDownUnmount = () => {
    setIsDropDownClicked(false);
  }

  return (
    <>
    <header className={(scrollPosition >  0 || isDropDownClicked) ? 'header-scrolled' : 'header-normal'}>
      <div className='navbar-container'>
        <div className='navbar-container-logo'>
          <a href='/asia-wok-bistro/' className='navbar-container-logo--ref'>
          <div className='navbar-container-logo--logo'>
            ASIA-WOK-BISTRO
          </div>
          {width >= 1000 && <div className='navbar-container-logo--description'>
            Asia-Wok-Bistro | Asiatische Gerichte
          </div>
          }

          </a>
        </div>
        {width >= 600 &&
        <div className='navbar-container-menuitems'>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} className={item.className} target={item.target}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>}
        {width < 600 &&
        <HamburgerMenu diagonal={(width > height) ? true : false} unmount={dropDownUnmount} onClick={dropDownClick} isScrolled={scrollPosition > 0 ? true : false}/>
        }
      </div>
    </header>
    </>
  );
}

export default Navbar