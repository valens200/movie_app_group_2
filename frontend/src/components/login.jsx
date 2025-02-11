import React,{useState} from 'react'
import movies from './images/movies.jpeg'
import { FaUserCircle,FaEnvelope, FaLock} from 'react-icons/fa'

import { Link } from 'react-router-dom'


function Login() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  // const[cPassword, setcPassword] = useState('');
  
   const handleNameChange = event => {
     setName(event.target.value);
   }
   const handleEmailChange = event => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  }
 
  const handleSubmit = event =>{
    event.preventDefault();

    setName('');
    setEmail('');
    setPassword('');
  
  }
  return (
      <div className='h-screen'>
          
    <div className="  h-screen w-full pt-12" style={{backgroundImage:`url(${movies})`}}>
      <div className='h-[90vh] w-[35vw] bg-black opacity-[0.7]  ml-auto mr-auto block pl-28 pt-12 '>
          <h1 className='text-[#BE4502] text-4xl pl-16'>WELCOME TO M<span className='text-white text-5xl'>V</span>T</h1>
         <form action="" onSubmit={handleSubmit} >
             <label className='text-white block pt-12'>Username</label>
             <i className='text-white text-3xl absolute pt-2'><FaUserCircle /></i>
             <input type="text" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={name} onChange={handleNameChange}/>
             <label className='text-white block pt-8'>Email</label>
             <i className='text-white text-3xl absolute pt-2'><FaEnvelope /></i>
             <input type="text" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={email} onChange={handleEmailChange}/>
             <label className='text-white block pt-8'>Password</label>
             <i className='text-white text-3xl absolute pt-2'><FaLock /></i>
             <input type="text" className='border-b-2 border-b-white bg-inherit w-[22vw] h-12 text-white text-lg pl-14' value={password} onChange={handlePasswordChange}/>
             <p className='text-white text-center pl-36 pt-8  hover:underline'><Link to="/changePassword"><a className='text-white '>Change password</a></Link></p>
              <Link to="/welcomeLogin">
             <button  className='h-20 w-48 bg-[#BE4502] block mt-10 text-white text-xl ml-24'>Log in</button>
             </Link>
             <p className='text-white pl-20 pt-8 '>Don't have an account?<Link to="/signup"><a className='text-[#BE4502] '>Sign Up</a></Link></p>
         </form>
      </div>
 
    </div>
    </div>
  )
}

export default Login