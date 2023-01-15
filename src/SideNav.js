import React from 'react';
import { useState } from 'react'
import './SideNav.css'
import { MenuItems } from './SideNavMenuItems'


function SideNav() {
    let startValue = (sessionStorage.getItem('state')) ? sessionStorage.getItem('state') : '#title';
    let [active, setActive] = useState(startValue);

    function handleState(state) {
        setActive(state);
        sessionStorage.setItem('state', state);
    }

    return (
        <nav className='navigation-container'>
            <ul className='navigation-container-nav'>

                {MenuItems.map((item, index) => {
                    return(
                    <li key={index}>
                        <a href={item.href} onClick={() => {handleState(item.href)}} className={(item.href === active) ? 'active' : 'inactive'}>
                            •
                        </a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default SideNav;