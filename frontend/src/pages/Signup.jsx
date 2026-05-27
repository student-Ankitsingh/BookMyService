import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/signup",
      formData
    );

   // save token
   localStorage.setItem(
    "token",
    response.data.token
   );

   console.log(response.data);

   // redirect
   navigate("/");

  } catch (error) {
    console.log(error.response.data)
  }
  };
  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name'
        name='name'
        value={formData.name} onChange={handleChange} />
        <br /><br />
        <input type="email" placeholder='Enter Email'
        name='email' value={formData.email}
         onChange={handleChange} />
         <br /><br />
         <input type="password" placeholder='Enter password'
         name='password' value={formData.password}
          onChange={handleChange} />
          <br /><br />
          <button type='submit'>Signup</button>
      </form>
    </div>
  );
};

export default Signup