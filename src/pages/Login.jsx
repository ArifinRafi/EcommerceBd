import React from 'react';
import facebookIcon from '../assets/facebookIcon.svg'
import googleIcon from '../assets/googleIcon.svg'
import line from '../assets/line.png'


const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='w-full max-w-md'>
                <p className='font-medium text-lg my-2'>Email Address</p>
                <div className='relative'>
                    <input type="email" placeholder="Enter your email address" className="input input-ghost input-bordered w-full rounded-lg" />
                </div>
                <br />
                <p className='font-medium text-lg my-2'>Password</p>
                <div className=''>
                    <input type="password" placeholder="Password" className="input input-ghost input-bordered w-full max-w-md rounded-lg" />
                </div>
                <p className='font-[550] text-blue-800 text-[17px] my-4'>Forgot Password?</p>
            </div>
            <button className=' my-4 btn btn-primary w-full max-w-md bg-sky-500 text-white rounded-lg'>Login</button>

            <div className='flex justify-center'><div className="border-t border-gray-400 w-[200px] my-4"></div>
            <p className='mt-1 mx-4 font-semibold'>or</p> <div className="border-t border-gray-400 w-[200px] my-4"></div></div>
            
            
             
            <button className='normal-case text-lg btn border-black btn-primary hover:bg-gray-300 w-full my-4 max-w-md bg-white text-black rounded-lg'> <img className='w-[32px]' src={facebookIcon} alt="" /> Login with facebook</button>
            <button className='normal-case text-lg btn border-black btn-primary hover:bg-gray-300 w-full max-w-md bg-white text-black rounded-lg'> <img className='w-[32px]' src={googleIcon} alt="" /> Login with google</button>
            
            <div className='flex text-[20px] font-semibold mt-12'>
            <p className='mx-2'>Dont have any account? </p>
            <p className='text-blue-800'>Create Account</p>
            </div>
            
         
        </div>
    );
};

export default Login;
