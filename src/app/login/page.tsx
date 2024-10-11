"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    axios.post("/api/user/login", user)
    .then((res)=>{
      console.log(res)
      if(res.status == 200){
        alert("Login successful")
      }else if(res.status == 401){
        alert("wrong username or password")
      }
    }).catch((err)=>{
      console.log(err)
      if(err.status == 401){
        alert("wrong username or password")
      }
    })

    // try {
    //   const response = await axios.post("/api/user/login", user);
    //   console.log(response.data);
    //   if (response.status === 200) {
    //     console.log("Login  successful")
    //     // router.push("/dashboard");
    //   } else if(response.status == 401) {
    //     alert("Invalid username or password");
    //   }
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     alert("Invalid username or password");
    //   } else {
    //     alert("Error during login");
    //     console.log(error.response?.data || error.message);
    //   }
    //   // if(error.status == 401){
    //   //   alert("Error during login");
    //   let err = error
    //   // }
    //   console.log(err.status);
    //   // console.log()
    //   // alert("Error during login");
    // }
  };

  return (
    <div style={{ backgroundImage: 'url(https://i.pinimg.com/736x/7e/4c/17/7e4c17f402bcc3bc98d2de0792b4a171.jpg)', height: '100vh' }}>
      <form style={{ backdropFilter: "blur(100px)" }} className="w-50 p-3 mx-auto shadow-lg" onSubmit={handleLogin}>
        <h5 className="text-center text-white fw-bold">Login page</h5>
        <input className="form-control border my-3" placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
        <input className="form-control border my-3" placeholder="Password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="submit" className="bg-gray-700 fw-bold text-white p-2 rounded-lg w-100">Submit</button>
      </form>
    </div>
  );
};

export default Page;
