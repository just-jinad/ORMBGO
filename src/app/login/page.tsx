"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    username:'',
    password:'',
  })
  
  const handlelogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(user);
    axios.post("api/user/login", user).then((data)=>{
      console.log(data);
      if (data) {
        router.push("/dashboard");

      }else{
        alert("invalid user")
      }
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <>
   <div style={{backgroundImage:'url(https://i.pinimg.com/736x/7e/4c/17/7e4c17f402bcc3bc98d2de0792b4a171.jpg)', height:'100vh',}}>
        <br />
        <br />
      <form style={{backdropFilter:"blur(100px)"}}  action="" className='w-50 p-3 mx-auto shadow-lg' onSubmit={handlelogin}>
        <h5 className='text-center text-white fw-bold'>Login page</h5>
      <br />

      <input className='form-control border my-3' value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})}  />
      <br />

      <input className='form-control border my-3' value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} type="password" placeholder='password' />
      <button type='submit' className='bg-gray-700 fw-bold text-white p-2 rounded-lg w-100'>Submit</button>
      </form>
      </div>
    </>
  )
}

export default page