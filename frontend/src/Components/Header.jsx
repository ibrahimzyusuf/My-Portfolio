import React,{useState} from 'react'
import NavBar from './NavBar'
import DrobdownMenu from "./DropdownMenu";
import { FiMenu } from "react-icons/fi";

const Header = () => {

    const [isDropdown, setIsDropdown] = useState(false)
    const [isMenuHidden, setIsMenuHidden] = useState(false)

    const handleClickMenu=()=>{
        setIsDropdown(true)
        setIsMenuHidden(true)
    }

    const handleCloseMenu=()=>{
        setIsDropdown(false)
        setIsMenuHidden(false)
    }

    return (
        <div className='header relative w-full h-24 md:h-32 flex items-center justify-center'>
            <NavBar/>
            {isDropdown && <DrobdownMenu handleCloseMenu={handleCloseMenu} />}
            <FiMenu size={30} onClick={ handleClickMenu } className={`sm:hidden absolute top-2 right-2 
                cursor-pointer hover:text-lime-800 ${isMenuHidden?'hidden':''}`} />
        </div>
    )
}

export default Header