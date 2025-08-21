import React from 'react'
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar w-11/12 flex items-center md:w-10/12">
                <div className="left_navbar flex-1/4 items-center font-bold text-3xl md:text-5xl">
                    <NavLink to={'/'} className={({isActive})=>isActive?'border-b-2 border-red-400 hover:text-lime-800 focus:outline-0':'hover:text-lime-800 focus:outline-0'}>
                    Ibrahim Yusuf
                    </NavLink>
                </div>
                <div className="right_navbar flex items-center text-2xl md:text-3xl">
                    <ul className="nav_menu hidden items-center gap-6 font-medium sm:flex">
                        <NavLink to={'/about'} className={({isActive})=>isActive?'border-b-2 border-red-400 hover:text-lime-800':'hover:text-lime-800'}>
                        <li className="nav_menu_item">About Me</li>
                        </NavLink>
                        <NavLink to={'/my-works'} className={({isActive})=>isActive?'border-b-2 border-red-400 hover:text-lime-800':'hover:text-lime-800'}>
                        <li className="nav_menu_item">My Works</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
    )
}

export default NavBar