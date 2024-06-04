import axios from 'axios';
import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext';

const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);

  const {setUser} = useContext(UserContext);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const {data} = await axios.post('/login', { email, password });
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (error) {
      alert('Login failed');
    }
  }
  if (redirect){
    return <Navigate to={'/tasks'}/>
  }

  return (
    <div className="">
      <h1 className="text-2xl text-center mb-4">Login User</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-100 rounded-full px-3 ' placeholder='your@email.com' />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-100 rounded-full px-3 ' placeholder='password' />
        <button className="primary">Login</button>
        <div className='text-center'>
          Don't have an account yet? <Link to={'/register'} className='underline'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage