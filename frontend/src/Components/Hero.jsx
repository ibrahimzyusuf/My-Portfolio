import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import useFetch from "../Hooks/useFetch.js";

const Hero = () => {

    const{data:informations}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/informations`)
    const {personalPhoto,heroFirstPhrase,heroSecondPhrase,phoneNumber,LinkedIn,Facebook,email,github}=informations

    return (
        <div className='hero w-full'>
            <div className="hero_body w-11/12 mx-auto sm:flex items-center gap-8 md:w-10/12">
                <div className="left_hero w-full mb-6 md:w-1/2">
                    <img src={personalPhoto} alt="ibrahim yusuf personal photo" 
                    className='w-full'/>
                </div>
                <div className="right_hero w-full md:w-1/2">
                    <div className='font-semibold text-2xl md:text-3xl'><h1>{heroFirstPhrase}</h1></div>
                    <div className='text-2xl md:text-3xl'><h2>{heroSecondPhrase}</h2></div>
                    <div className="social_media mt-7 px-2 flex items-center justify-between flex-wrap gap-4">
                        <div className='flex items-center gap-3'>
                            <a href={LinkedIn} target='_blank' rel='noopener noreferrer' className='hover:text-lime-800'>
                            <FaLinkedin size={26}/>
                            </a>
                            <a href={github} target='_blank' rel='noopener noreferrer' className='hover:text-lime-800'>
                            <FaGithub size={26}/>
                            </a>
                            <a href={`https://${email}`} target='_blank' rel='noopener noreferrer' className='hover:text-lime-800'>
                            <SiGmail size={26}/>
                            </a>
                            <a href={Facebook} target='_blank' rel='noopener noreferrer' className='hover:text-lime-800'>
                            <FaFacebookSquare size={26}/>
                            </a>
                        </div>
                        <div className="phone_number flex items-center gap-1 text-2xl">
                        <FaPhone/>
                        {phoneNumber}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero