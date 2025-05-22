import React from 'react'
import { Link,NavLink} from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import useFetch from "../Hooks/useFetch.js";

const Footer = () => {

    const{data:informations}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/informations`)
    const {phoneNumber,LinkedIn,Facebook,email,github}=informations

    return (
        <div className='footer w-full mt-20'>
            <div className="footer_body w-11/12 mt-3 mx-auto pb-4 text-2xl sm:flex justify-between gap-5 md:w-10/12">
                <div className="left_footer flex flex-col gap-3 mt-8">
                    <Link to={'/'}><h1 className=' font-semibold text-3xl mb-4 md:text-4xl hover:text-lime-800'>Ibrahim Yusuf</h1></Link>
                    <h2>An independent Full-Stack web developer.</h2>
                    <div className="phone_number flex items-center mt-5 gap-1 text-2xl">
                        <FaPhone/>
                        {phoneNumber}
                    </div>
                </div>
                <div className="middle_footer w-max mt-5">
                    <h3 className='mb-4 text-red-600'>PAGES</h3>
                    <ul className='flex flex-col gap-2'>
                        <Link to={'/'}><li className='hover:text-lime-800'>Home</li></Link>
                        <Link to={'/about'}><li className='hover:text-lime-800'>About Me</li></Link>
                        <Link to={'/my-works'}><li className='hover:text-lime-800'>My Works</li></Link>
                    </ul>
                </div>
                <div className="right_footer w-max mt-5">
                    <h3 className='mb-4 text-red-600'>GET IN TOUCH</h3>
                    <ul className='flex flex-col gap-2'>
                        <a href={`https://${email}`} target='_blank' rel='noopener noreferrer'><li className='hover:text-lime-800'>Email</li></a>
                        <a href={LinkedIn} target='_blank' rel='noopener noreferrer'><li className='hover:text-lime-800'>LinkedIn</li></a>
                        <a href={github} target='_blank' rel='noopener noreferrer'><li className='hover:text-lime-800'>GitHub</li></a>
                        <a href={Facebook} target='_blank' rel='noopener noreferrer'><li className='hover:text-lime-800'>Facbook</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer