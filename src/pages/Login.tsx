import React from 'react'
import Logo from '../assets/blessedfull.svg'

export const Login: React.FC = () => {
    return (
        <div className='loginPage'>
            <img 
                src={Logo} 
                alt="blessed-Logo"
                className='w-50 mb-5'
            />
            <div className='formSection p-5 shadow'>
                <h3 className='mb-3'>Login:</h3>
                <form className=''>
                    <input 
                        placeholder='Your Email'
                        className='w-100 mb-2'
                    />
                    <input 
                        placeholder='Your Password'
                        className='w-100 mb-2'
                    />
                    <button className='btn btn-light btn-lg'>Login</button>
                </form>
            </div>
        </div>
    )
}
