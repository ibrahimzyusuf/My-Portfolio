import React from 'react'
import useFetch from "../Hooks/useFetch.js";
import ProjectCard from "../Components/ProjectCard.jsx";

const MyWork = () => {

    const {data:projects,loading,error}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/projects`)

    return (
        <div className='my_works mt-16'>
            <h1 className='w-11/12 mx-auto text-4xl mb-12 md:w-10/12'>My Projects</h1>
            <div className="my_projects_container w-11/12 mx-auto flex flex-wrap gap-8 md:w-10/12 lg:gap-12">
            {
            loading && <h4>Loading........</h4>
            }
            {
            error && <h4>{error}</h4>
            }
            {!loading && !error &&
                projects.map(project=>
                    <ProjectCard key={project._id} project={project}/>
                )
            }
            </div>
        </div>
    )
}

export default MyWork