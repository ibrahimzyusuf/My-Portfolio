import React from 'react'
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const ProjectCard = ({project}) => {

    const {_id,projectName,projectPhoto,projectInitialDesc,projectDate,liveDemo,githubRebo,featured}=project

    return (
        <div className='project_card w-full border-y border-gray-500 sm:w-72 md:w-80'>
            <div className="card_top relative w-full">
                <img src={projectPhoto} alt="project photo" className='w-full h-56'/>
                {
                    featured && <div className='absolute bottom-0 right-0 bg-amber-300 py-1 px-2'>Featured</div>
                }
            </div>
            <div className="card_bottom py-1 px-1 flex flex-col gap-4 justify-between">
                <div className='flex items-center justify-between h-12'>
                    <Link to={`/projects/${_id}`}>
                    <h1 className="project_name font-semibold text-2xl hover:text-lime-800">{projectName}</h1>
                    </Link>
                    <span className='text-2xl'>{projectDate}</span>
                </div>
                <h3 className="project_desc text-xl h-16">
                    {projectInitialDesc}
                </h3>
                <div className='flex items-center justify-between gap-2 h-16 text-xl px-3'>
                    <a href={githubRebo} target='_blank' rel='nopener noreferrer' className='bg-amber-200 p-1 rounded-xs text-center hover:bg-amber-300 hover:cursor-pointer'>GitHub Rebo</a>
                    <a href={liveDemo} target='_blank' rel='nopener noreferrer' className='bg-amber-200 p-1 rounded-xs text-center hover:bg-amber-300 hover:cursor-pointer'>Live Demo</a>
                    <Link to={`/projects/${_id}`} className='bg-amber-200 p-1 rounded-xs text-center hover:bg-amber-300 hover:cursor-pointer'>Show more...</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard