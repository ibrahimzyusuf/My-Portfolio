import React from 'react'
import Slider from '../Components/Slider'
import useFetch from "../Hooks/useFetch.js";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {

    const {id}=useParams()
    const{data:project}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/projects/${id}`)
    const {projectPhoto,projectName,projectDate,projectDetailedDesc,imagesGallery,liveDemo,githubRebo}=project

    return (
        <div className='project-details'>
            <div className="project-details-container border-t border-gray-500 w-11/12 mx-auto py-8 md:w-10/12 md:px-5">
                <img src={projectPhoto} alt="project photo" className='w-full' loading='lazy' />
                <div className='flex items-center justify-between mt-4'>
                    <h1 className="project_name font-semibold text-3xl">{projectName}</h1>
                    <span className='text-2xl'>{projectDate}</span>
                </div>
                <div className="detailed_desc mt-10">{projectDetailedDesc}</div>
                <div className="project_photos">
                    <Slider imagesGallery={imagesGallery} />
                </div>
                <div className='mt-10 w-full flex flex-col items-center justify-center gap-4 text-2xl'>
                    <a href={liveDemo} target='_blank' className='w-full bg-amber-200 sm:w-96 h-10 sm:h-12 flex items-center justify-center rounded-md hover:bg-amber-300'>Live Demo</a>
                    <a href={githubRebo} target='_blank' className='w-full bg-amber-200 sm:w-96 h-10 sm:h-12 flex items-center justify-center rounded-md hover:bg-amber-300'>GitHub Rebo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails