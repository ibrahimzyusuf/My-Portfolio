import React from 'react'
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

const DropdownMenu = ({handleCloseMenu}) => {
    return (
        <div className="dropdown_menu fixed -top-20 -right-20 flex sm:hidden flex-col justify-center gap-3.5 size-60 
        rounded-full bg-amber-300/50 pb-5 text-2xl pt-20">
            <NavLink to={'/about'} className={({isActive})=>isActive?'w-max ml-4 border-b-2 pb-1 border-red-400 mb-1 hover:text-lime-800':
            'w-max ml-4 pb-1 mb-1 hover:text-lime-800'}>
            About Me
            </NavLink>
            <NavLink to={'/my-works'} className={({isActive})=>isActive?'w-max ml-11 border-b-2 border-red-400 hover:text-lime-800':
            'w-max ml-11 hover:text-lime-800'}>
            My Works
            </NavLink>
            <FiX size={30} onClick={handleCloseMenu} className='fixed top-2 right-2 text-lime-950 cursor-pointer hover:text-lime-800'/>
        </div>
    )
}

export default DropdownMenu