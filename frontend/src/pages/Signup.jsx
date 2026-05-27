import React, { useState } from 'react'

const Signup = () => {

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
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData)
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