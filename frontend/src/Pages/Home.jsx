import React from 'react'
import Hero from "../Components/Hero";
import ProjectCard from "../Components/ProjectCard";
import useFetch from "../Hooks/useFetch.js";

const Home = () => {

    const {data:featuredProjects,loading,error}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/projects/featured`)
    const {data:informations}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/informations`)
    const {skills,cv}=informations

    return (
        <div>
            <Hero/>
            <section className='featured_projects mt-16'>
                <h1 className='w-11/12 mx-auto text-4xl mb-12 md:w-10/12'>Featured Projects</h1>
                <div className="featured_projects_container w-11/12 mx-auto flex flex-wrap gap-8 md:w-10/12 lg:gap-12">
                {
                loading && <h4>Loading........</h4>
                }
                {
                error && <h4>{error}</h4>
                }
                {!loading && !error &&
                featuredProjects?.map(project=>
                    <ProjectCard key={project._id} project={project}/>
                )}
                </div>
            </section>
            <section className='my_skills mt-16'>
                <h1 className='w-11/12 mx-auto text-4xl mb-12 md:w-10/12'>My Skills</h1>
                <div className="my_skills_container w-11/12 mx-auto flex flex-wrap gap-4 md:w-10/12 text-2xl">
                    {
                        skills?.map((skill,index)=>(
                            <div key={index} className='p-2 rounded-xs text-center bg-amber-200'>{skill}</div>
                        ))
                    }
                </div>
            </section>
            <section className='my_cv mt-16'>
                <h1 className='w-11/12 mx-auto text-4xl mb-12 md:w-10/12'>My CV</h1>
                <div className='w-11/12 mx-auto md:w-10/12 text-2xl flex flex-col items-center'>
                    {cv}
                    <div className="flex gap-4 mt-6">
                        <a href={`/${cv}`} target="_blank" rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            View CV
                        </a>

                        <a href={`/${cv}`} download
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">                 
                            Download CV
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home