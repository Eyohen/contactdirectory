import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
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
    <>
    <div className='bg-green-200 p-4'>

    <div className='text-right'>
    <Link to={'/adminlogin'}><button className='text-white bg-green-600 px-6 rounded-md'>Admin</button></Link>
      </div>
        
    <div className='bg-green-200 py-24 flex justify-center items-center '>

 

      <div className='flex justify-center items-center max-w-[500px] py-2 bg-white px-64 rounded-2xl shadow-xl'>
    <form onSubmit={handleSubmit} >

      <p className='font-bold text-2xl text-green-600 pt-3'>Create Your Contact</p>
      <p className='text-gray-600 '>Please fill in your information</p>

      <div className='pt-6'>
        <p>First Name </p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>

      <div className='py-4'>
        <p>Last Name</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className='py-2'>
        <p>Email</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className='py-2'>
        <p>Phone Number</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>
      <div className='py-2'>
        <p>Address</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className='py-2'>
        <p>Country</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="text" name="country" value={formData.country} onChange={handleChange} required />
      </div>
      <div className='py-2'>
        <p>State</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="text" name="state" value={formData.state} onChange={handleChange} required />
      </div>

      <div className='py-6'>
      <button className='bg-green-600 py-2 px-2 w-[450px] text-white shadow-xl rounded-md' type="submit">Add Contact</button>
      </div>
      <p className='text-center'>Already registered?</p>
      <div className='py-3'>
      <Link to={'/login'}><button className='bg-green-200 py-2 px-2 w-[450px] shadow-lg rounded-md' type="submit">Login</button></Link>
      </div>
    </form>
    </div>



    </div>


    </div>
    </>
  );
};

export default Register;