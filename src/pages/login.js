import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="bg-grey-lighter m-16 min-h-min flex flex-col">
            <div className="container shadow-2xl border-2 rounded max-w-sm mx-auto flex-1 flex flex-col items-center justify-center">
                <div className="bg-white px-6  rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-4xl font-bold text-center">Log In</h1>
                

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-pink-600 text-black hover:bg-pink-500 focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an  account? 
                    <Link  className="no-underline border-b border-blue text-blue" href="/signup">
                        SignUp
                    </Link>.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
