import React from 'react'
import { Link } from 'react-router-dom'

const MyAssessment = () => {
  return (
    <div>
        <div>
             <div className='text-5xl font-bold text-gray-600'>Discover your Career Interests!</div>
            <div className='flex'>
                <img className="w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gOD0jEulxWsaq8JtIn7Qvrzqe7aT7qvnJh5IEgQO1qb6d1aeBYbwHu2iC2EJ2EWulrI&usqp=CAU"></img>
                <Link to="/user/assessment">
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-40 ml-44 mb-2">Take Assessment</button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default MyAssessment