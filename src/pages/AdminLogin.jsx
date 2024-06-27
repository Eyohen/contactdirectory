import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const AdminLogin = () => {
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }



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

      <p className='font-bold text-2xl text-green-600 pt-3'>Log Into Admin Account</p>
      <p className='text-gray-600 '>Please fill in your information</p>

     
      <div className='pt-10'>
        <p>Email</p>
        <input className='bg-gray-200 py-2 px-2 w-[450px] rounded-md' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className='pt-6'>
        <p>Password</p>
        <div class="relative w-full md:w-[450px]">
    <div class="absolute inset-y-0 right-0 flex items-center px-2">
      {/* <input class="hidden js-password-toggle" id="toggle" type="checkbox" /> */}
      <label onClick={togglePasswordVisibility} className=" px-2 py-1 text-xl font-mono cursor-pointer text-gray-400" for="toggle">{isPasswordVisible ? (<RiEyeLine />):(<RiEyeOffLine />)}</label>
    </div>
    <input onChange={(e) => setPassword(e.target.value)} className="border rounded-lg w-full md:w-[450px] py-2 px-3 leading-tight hover:border-green-600 pr-16 font-mono" type={isPasswordVisible ? "text" : "password"} autocomplete="off"
    />
  </div>



      </div>
    

      <div className='pt-9'>
      <Link to={'/dashboard'}><button className='bg-green-600 py-2 px-2 w-[450px] text-white shadow-xl rounded-md' type="submit">Login</button></Link>
      </div>
   
    </form>
    </div>



    </div>
  );
};

export default AdminLogin;