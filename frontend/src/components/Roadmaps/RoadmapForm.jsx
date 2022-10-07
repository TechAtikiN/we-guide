// import { set } from 'date-fns'
import React, { useState } from 'react'

export const RoadmapForm = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [skills, setskills] = useState([])
    const [exam, setExam] = useState('')
    const [stream, setStream] = useState([])
    const [HEdu, setHEdu] = useState('')
    const [Recruiters, setRecruiters] = useState('')
    const [duration, setDuration] = useState('')
    const [job, setJob] = useState('')


    return (
        <div className='relative'>
            <img
                className='h-screen w-full'
                src='https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHJvYWRtYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                alt='bg' />
            <div className=''>
                <form
                    className='absolute left-0 top-0 bottom-0 text-gray-300 font-serif'>
                    <h1 className='text-6xl mt-10 ml-10 font-semibold'>Add a new Roadmap</h1>

                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col'>
                            <label className='  form-label'>Name of Roadmap</label>
                            <input
                                className='form-input'
                                placeholder="Name of the roadmap"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <label className=' form-label'>Description</label>
                            <textarea
                                rows={4}
                                className='form-input'
                                placeholder='Description of roadmap'
                                type="text"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            />
                            <label className=' form-label'>Skills required</label>
                            <input
                                className='form-input'
                                placeholder='Add skillset required '
                                type="text"
                                onChange={(e) => setskills(e.target.value)}
                                value={skills}
                            />
                            <label className=' form-label'>Entrance Exams</label>
                            <input
                                className='form-input'
                                placeholder='Entrance exams'
                                type="text"
                                onChange={(e) => setExam(e.target.value)}
                                value={exam}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='  form-label'>Streams</label>
                            <input
                                className='form-input bg-gray-100'
                                placeholder="Stream required "
                                type="text"
                                onChange={(e) => setStream(e.target.value)}
                                value={stream}
                            />

                            <label className=' form-label'>Higher Education</label>
                            <input
                                rows={4}
                                className='form-input bg-gray-100'
                                placeholder='Higher Eductaion '
                                type="text"
                                onChange={(e) => setHEdu(e.target.value)}
                                value={HEdu}
                            />

                            <label className='form-label'>Top Recruiters</label>
                            <input
                                className='form-input bg-gray-100'
                                placeholder='Top recruiters '
                                type="text"
                                onChange={(e) => setRecruiters(e.target.value)}
                                value={Recruiters}
                            />
                            <label className='form-label'>Duration</label>
                            <input
                                className='form-input'
                                placeholder='Duration'
                                type="text"
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                            />
                            <label className=' form-label'>Job Profiles</label>
                            <input
                                className='form-input'
                                placeholder='Job Profile'
                                type="text"
                                onChange={(e) => setJob(e.target.value)}
                                value={job}
                            />
                        </div>
                    </div>
                    <button className='w-full bg-gray-400 text-black m-2 ml-10 rounded-md py-2 px-3 mt-3'>Add this Roadmap</button>

                </form>
            </div >


        </div >


    )
}

