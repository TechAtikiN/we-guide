import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login({ setAuthState }) {
    const navigate = useNavigate()
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const loginUser = async(e) => {
        e.preventDefault()

        const res = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = res.json();
        if(res.status === 400 || !data) {
            window.alert("Invalid Registration")
        } else {
            window.alert("Login Successful")
            console.log("Login Successful");
            navigate('/user')
            // setAuthState('login') 
        }
    }

    return (
        <div className='bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen grid grid-cols-2'>
        <div>
        <img
          className="object-center p-10"
          src="https://i.pinimg.com/originals/14/bb/c9/14bbc99c3907c39d21ec10163ec14e92.png"
          alt="svg"
        />
        </div>

        

        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                <form method='POST'>
                    <h1 className="mb-8 text-4xl font-semibold text-center">Log in</h1>

                    <div className='flex flex-col space-y-4 my-16'>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
                        <button
                            type="submit"
                            onClick={loginUser}
                            className=" relative top-6 w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-6">Log in
                        </button>
                    </div>


                </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the Terms of Service and Privacy Policy
                </div>
            </div>

            <div className="text-gray-300 mt-6">
                Don't have an account?
                <button
                    className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
                    onClick={() => setAuthState('signup')}>Sign up</button>.
            </div>
        </div>
        </div>
    )
}
