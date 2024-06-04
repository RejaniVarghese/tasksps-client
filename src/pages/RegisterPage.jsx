import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerTaskUser = async (e) => {
        try {
            e.preventDefault();
            await axios.post('/register', { name, email, password });
            alert('Registration successful. Now you can log in');
        } catch (error) {
            alert('Registration failed. Please try again later');
        }
    }
    return (
        <div className="">
            <h1 className="text-2xl text-center mb-4">Register User</h1>
            <form onSubmit={registerTaskUser} className="max-w-md mx-auto flex flex-col gap-3">
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='border border-gray-100 rounded-full px-3 ' placeholder='name' />
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-100 rounded-full px-3 ' placeholder='your@email.com' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-100 rounded-full px-3 ' placeholder='password' />
                <button className="primary">Register</button>
                <div className='text-center'>
                    Already a member  <Link to={'/login'} className='underline'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage