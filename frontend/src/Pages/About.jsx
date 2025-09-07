import React from 'react'
import useFetch from "../Hooks/useFetch.js";

const About = () => {

    const {data:informations}=useFetch(`${import.meta.env.VITE_API_BASE_URL}/informations`)
    const {myName,age,birthDate,Nationality,location,gender,maritalStatus,education,experience,skills,languages}=informations

    return (
        <>
            <section className="personal_details w-11/12 mx-auto md:w-10/12 mt-10 pb-4 border-b-3 border-b-gray-600 text-2xl">
                <h1 className='mb-7 text-3xl text-center'>Personal Details</h1>
                <div className='flex flex-col gap-2'>
                    <h2>Name: {myName}</h2>
                    <h3>Date of Birth: {birthDate}</h3>
                    <h3>Age: {age}</h3>
                    <h3>Nationality: {Nationality}</h3>
                    <h3>Location: {location}</h3>
                    <h3>Gender: {gender}</h3>
                    <h3>Marital Status: {maritalStatus}</h3>
                </div>
            </section>
            <section className="education w-11/12 mx-auto pb-4 md:w-10/12 mt-12 border-b-3 border-b-gray-600 text-2xl">
                <h1 className='mb-8 text-3xl text-center'>Education</h1>
                <div className='flex items-center flex-wrap gap-6 sm:gap-0'>
                    {
                        education?.map((education,index)=>
                            <div key={index} className=' w-full sm:w-1/2 flex flex-col justify-start gap-8'>
                                <span className=''>Degree {index+1}</span>
                                <div className="flex flex-col gap-2">
                                    <h3>Degree: {education.degree}</h3>
                                    <h3>University: {education.university}</h3>
                                    <h3>Speciality: {education.speciality}</h3>
                                    <h3>Start Date: {education.startDate}</h3>
                                    <h3>End Date: {education.endDate}</h3>
                                    <h3>Grade: {education.grade}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className="experiance w-11/12 mx-auto md:w-10/12 mt-12 pb-4 border-b-3 border-b-gray-600 text-2xl">
                <h1 className='mb-7 text-3xl text-center'>Experiance</h1>
                <p>Freelance web developer, 
                    Self Employed
                    Designed and developed responsive,  great looking, client approved web applications , improving user
                    experience and engagement.
                    Built web applications using React, pure CSS, Bootstrap, Tailwind CSS, Node.js, Express.js, and MongoDB,
                    ensuring scalability and performance, and provided innovative web solutions.
                </p>
            </section>
            <section className="experiance w-11/12 mx-auto md:w-10/12 mt-12 pb-4 border-b-3 border-b-gray-600 text-2xl">
                <h1 className='mb-7 text-3xl text-center'>My Skills</h1>
                <div className="flex flex-wrap gap-4">
                    {
                    skills?.map((skill,index)=>(
                        <div key={index} className='p-2 rounded-xs text-center bg-amber-200'>{skill}</div>
                    ))
                    }
                </div>
            </section>
            <section className="experiance w-11/12 mx-auto md:w-10/12 mt-12 pb-4 border-b-3 border-b-gray-600 text-2xl">
                <h1 className='mb-6 text-3xl text-center'>Languages</h1>
                {
                    languages?.map((language,index)=>
                    <div key={index} className='mb-3'>{language}</div>
                    )
                }
            </section>
        </>
    )
}

export default About