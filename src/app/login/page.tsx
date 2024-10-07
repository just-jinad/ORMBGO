import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const page = () => {
    const [username, setUserPassword] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          const res = await axios.post('/api/auth/login', { username, password });
          if (res.status === 200) {
            // Redirect to an admin page after successful login
            router.push('/admin');
          }
        } catch (err) {
          setError('Invalid username or password');
        }
      };
    
  return <>
    
  </>;
};

export default page;
