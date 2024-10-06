// "use client"
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store';
// import { loginAdmin } from '../../store/slices/adminSlice';

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch<AppDispatch>();
//   const { status, error } = useSelector((state: RootState) => state.admin);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(loginAdmin({ username, password }));
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
