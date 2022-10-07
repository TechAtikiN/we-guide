import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = ({ setAuthState }) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });

    let name, value;

    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value
        setUser({ ...user, [name]: value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {username, email, password } = user;

        const res = await fetch("api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username, email, password
            })
        });

        const data = await res.json();

        if(res.status === 400 || !data) {
            window.alert("Invalid Registration")
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful")
            console.log("Registration Successful");
            navigate('/login')
            // setAuthState('login') 
        }
    }

    return (
        <div className='bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen grid grid-cols-2'>
            {/* <div>
        <img
          className="object-center p-10"
          src="https://i.pinimg.com/originals/14/bb/c9/14bbc99c3907c39d21ec10163ec14e92.png"
          alt="svg"
        />
      </div> */}
        

        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8  shadow-lg text-black w-full">
                <form method='POST'>
                    <h1 className="mb-8 text-4xl font-semibold text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="username"
                        value={user.username}    
                        onChange={handleChange}
                        placeholder="Full Name" />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email" />
    
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="cpassword"
                        value={user.cpassword}
                        onChange={handleChange}
                        placeholder="Confirm Password" />

                    <button onClick={PostData}
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-1"
                       >Create Account
                    </button>
                </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the Terms of Service and Privacy Policy
                </div>
            </div>

            <div className="text-gray-300 mt-6">
                Already have an account?
                <Link to='/login'><button
                    className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
                    >Log in
                </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default SignUp

//onClick={() => setAuthState('login')}