import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [authtoggle, setAuthToggle] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/api/submit', formData);
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  return (
    <div className='bg-green-200 py-[320px] flex justify-center items-center '>

      <div className='flex justify-center items-center max-w-[500px] py-6 bg-white px-64 rounded-2xl shadow-xl'>
    <form onSubmit={handleSubmit} >

      <p className='font-bold text-2xl text-green-600 pt-3'>Log In Your Contact</p>
      <p className='text-gray-600 '>Please fill in your information</p>

     
      <div className='pt-10'>
        <p>Email</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className='pt-6'>
        <p>Phone Number</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>
    

      <div className='pt-9'>
      <button className='bg-green-600 py-2 px-2 w-[450px] text-white shadow-xl rounded-md' type="submit">Login</button>
      </div>
      <p className='text-center pt-4'>Not registered?</p>
      <div className='pt-6'>
      <Link to={'/'}><button className='bg-green-200 py-2 px-2 w-[450px] shadow-lg rounded-md' type="submit">Register</button></Link>
      </div>
    </form>
    </div>



    </div>
  );
};

export default Login;