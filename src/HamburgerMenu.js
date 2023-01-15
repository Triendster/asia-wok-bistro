import { FaBars, FaTimes } from 'react-icons/fa'
import React from 'react';
import { useState, useEffect } from 'react';
import { MenuItems } from './NavbarMenuItems';
import './HamburgerMenu.css'

function HamburgerMenu (props) {
    let [isActive, setIsActive] = useState(false);

    function handleDropdownClick(){
        setIsActive(prev => !prev);
        props.onClick();
    }

    useEffect(() => {
        return () => {
            setIsActive(false);
            props.unmount();
        };
    }, [])

    return (
        <div className={ props.isScrolled ? 'hmenu-container scrolled' : 'hmenu-container'}>
            {!isActive &&
            <FaBars id="bars" onClick={handleDropdownClick}>
            </FaBars>}
            {isActive &&
            <>
            <FaTimes onClick={handleDropdownClick}>
            </FaTimes>
            <div id="dropdown" className={props.diagonal ? 'hmenu-dropdown diagonal' : 'hmenu-dropdown vertical'}>
                {MenuItems.map(item => {
                    return (<a href={item.href} className={item.cNameDD} target={item.target} key={item.title}>
                        {item.title}
                    </a>);
                })}
            </div>
            </>
            }
        </div>
    );
}

export default HamburgerMenu;