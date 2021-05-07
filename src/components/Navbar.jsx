import React from 'react';
import s from'./Navbar.module.css';
console.log(s)

// let s = {
//     'nav': 'Navbar_nav__3SD7X',
//     'item': 'Navbar_item__nTXSX'
// }

const Navbar = () => {
    return <nav className='Navbar_nav__3SD7X'>
        <div className='Navbar_item__nTXSX'>
            <a>Profile</a>
        </div>
        <div className='Navbar_item__nTXSX'>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Music</a>
        </div>
        <div className='item'>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;