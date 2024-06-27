// import React, { useState, useEffect } from 'react';

// const usersData = [
//   { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'USA', date: '2023-01-01' },
//   { firstName: 'James', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Nigeria', date: '2023-01-01' },
//   { firstName: 'Henry', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'London', date: '2023-01-01' },
//   { firstName: 'Charles', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Ghana', date: '2023-01-01' },
//   { firstName: 'Manny', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Japan', date: '2023-01-01' },
//   { firstName: 'Simi', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Egypt', date: '2023-01-01' },
//   { firstName: 'Joshua', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Morocco', date: '2023-01-01' },
//   { firstName: 'Faith', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Spain', date: '2023-01-01' },
//   { firstName: 'Bassey', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'USA', date: '2023-01-01' },
//   // Add more user data here
// ];

// const Dashboard = () => {
//   const [users, setUsers] = useState(usersData);
//   const [search, setSearch] = useState('');
//   const [sortOption, setSortOption] = useState('latest');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(3);
//   const [countryFilter, setCountryFilter] = useState('');

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSort = (e) => {
//     setSortOption(e.target.value);
//   };

//   const handleCountryFilter = (e) => {
//     setCountryFilter(e.target.value);
//   };

//   const filteredUsers = users.filter(user =>
//     Object.keys(user).some(key =>
//       user[key].toString().toLowerCase().includes(search.toLowerCase())
//     ) && (!countryFilter || user.country === countryFilter)
//   );

//   const sortedUsers = [...filteredUsers].sort((a, b) => {
//     if (sortOption === 'latest') {
//       return new Date(b.date) - new Date(a.date);
//     }
//     return new Date(a.date) - new Date(b.date);
//   });

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const uniqueCountries = [...new Set(users.map(user => user.country))];

//   return (
//     <div className='p-9'>
//         <p className='font-bold text-3xl text-green-700'>Contacts</p>
//       <div className="mb-4 text-right">
//         <input
//           type="text"
//           placeholder="Search"
//           value={search}
//           onChange={handleSearch}
//           className="p-2 border border-green-400 rounded"
//         />
//         {/* <select value={sortOption} onChange={handleSort} className="ml-2 p-2 border border-gray-300 rounded">
//           <option value="latest">Sort by Latest</option>
//           <option value="oldest">Sort by Date</option>
//         </select> */}
//         <select value={countryFilter} onChange={handleCountryFilter} className="ml-2 p-2 border border-green-400  rounded">
//           <option value="">Filter by Country</option>
//           {uniqueCountries.map((country, index) => (
//             <option key={index} value={country}>{country}</option>
//           ))}
//         </select>
//       </div>


//       <table className="w-full bg-white border text-left border-gray-200 rounded-md">
//         <thead className='bg-green-200 text-green-700  rounded-md'>
//           <tr >
//             <th scope="col" className="py-4 px-11 ">First Name</th>
//             <th scope="col" className="py-4 px-11 ">Last Name</th>
//             <th scope="col" className="py-4 px-11 ">Email</th>
//             <th scope="col" className="py-4 px-11 ">Phone</th>
//             <th scope="col" className="py-4 px-11 ">Address</th>
//             <th scope="col" className="py-4 px-11 ">State</th>
//             <th scope="col" className="py-4 px-11 ">Country</th>
//             <th scope="col" className="py-4 px-11 ">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers.map((user, index) => (
//             <tr key={index} className=' border-b border-gray-300'>
//               <td className="py-4 px-11">{user.firstName}</td>
//               <td className="py-4 px-11">{user.lastName}</td>
//               <td className="py-4 px-11">{user.email}</td>
//               <td className="py-4 px-11">{user.phone}</td>
//               <td className="py-4 px-11">{user.address}</td>
//               <td className="py-4 px-11">{user.state}</td>
//               <td className="py-4 px-11">{user.country}</td>
//               <td className="py-4 px-11">{user.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-center mt-4">
//         {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => paginate(i + 1)}
//             className={`px-3 py-1 border ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { IoSearchOutline,IoEllipsisVertical } from "react-icons/io5";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { LuListFilter } from "react-icons/lu";
import DeleteModal from '../components/DeleteModal';
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { Link } from 'react-router-dom';


const usersData = [
  { id:1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'USA', date: '2023-01-01' },
  { id:2, firstName: 'James', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Nigeria', date: '2023-01-01' },
  { id:3,firstName: 'Henry', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'London', date: '2023-01-01' },
  { id:4,firstName: 'Charles', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Ghana', date: '2023-01-01' },
  { id:5,firstName: 'Manny', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Japan', date: '2023-01-01' },
  { id:6,firstName: 'Simi', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Egypt', date: '2023-01-01' },
  { id:7,firstName: 'Joshua', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Morocco', date: '2023-01-01' },
  { id:8,firstName: 'Faith', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'Spain', date: '2023-01-01' },
  { id:9,firstName: 'Bassey', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St', state: 'CA', country: 'USA', date: '2023-01-01' },
];

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [filterField, setFilterField] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePress = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterField = (e) => {
    setFilterField(e.target.value);
  };

  const handleFilterValue = (e) => {
    setFilterValue(e.target.value);
  };

  const openDeleteModal = () => {

    setIsDeleteModalOpen(true);
  }

  const filteredUsers = users.filter(user =>
    (!search || Object.keys(user).some(key =>
      user[key].toString().toLowerCase().includes(search.toLowerCase())
    )) && (!filterField || !filterValue || user[filterField].toString().toLowerCase().includes(filterValue.toLowerCase()))
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOption === 'latest') {
      return new Date(b.date) - new Date(a.date);
    }
    return new Date(a.date) - new Date(b.date);
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='p-9'>
         <p className='font-bold text-3xl text-green-700'>Contacts</p>
      <div className="mb-4 flex gap-x-4 pt-9 justify-end px-24">



      <div class="relative ">
    <div class="absolute inset-y-0 left-0 flex items-center px-2">
      <label className="px-2 py-1 text-xl font-mono cursor-pointer text-gray-400 text-left"><IoSearchOutline /></label>
    </div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="px-11 py-2 w-[300px] border border-green-400 rounded"
        />
          </div>



        {/* <select value={sortOption} onChange={handleSort} className="ml-2 p-2 border border-gray-300 rounded">
          <option value="latest">Sort by Latest</option>
          <option value="oldest">Sort by Date</option>
        </select> */}
        {/* <div className="relative ml-2"> */}

          <select value={filterField} onChange={handleFilterField} className="p-2 border border-green-400 bg-green-400 text-white rounded">
       <option value=""> Filter</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="address">Address</option>
            <option value="state">State</option>
            <option value="country">Country</option>
            <option value="date">Date</option>
          </select>
          {filterField && (
            <input
              type="text"
              placeholder={`Filter by ${filterField}`}
              value={filterValue}
              onChange={handleFilterValue}
              className="ml-2 p-2 border border-green-400 rounded"
            />
          )}
        {/* </div> */}

        <Link to={'/'}><button className='border-2 border-green-400 px-4 rounded-lg flex items-center gap-x-2 py-2'><BsPlusLg  size={23}  color='rgb(21 128 61 )'/>Create New</button></Link>
      </div>

      <div className='px-24'>
      <table className="w-full bg-white border text-left border-gray-200 mt-16">
        <thead className='bg-green-200 text-green-700 rounded-2xl'>
          <tr>
            <th className="py-4 px-11">First Name</th>
            <th className="py-4 px-11">Last Name</th>
            <th className="py-4 px-11">Email</th>
            <th className="py-4 px-11">Phone</th>
            <th className="py-4 px-11">Address</th>
            <th className="py-4 px-11">State</th>
            <th className="py-4 px-11">Country</th>
            <th className="py-4 px-11">Date</th>
            <th className="py-4 px-11"></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} onClick={() => setShowModal(!showModal)} className=' border-b border-gray-300 text-gray-500'>
              <td className="py-4 px-11">{user.firstName}</td>
              <td className="py-4 px-11">{user.lastName}</td>
              <td className="py-4 px-11">{user.email}</td>
              <td className="py-4 px-11">{user.phone}</td>
              <td className="py-4 px-11">{user.address}</td>
              <td className="py-4 px-11">{user.state}</td>
              <td className="py-4 px-11">{user.country}</td>
              <td className="py-4 px-11">{user.date}</td>
              <div onClick={() => handlePress(user)} className="relative cursor-pointer">
              <td className="py-4 px-11"><IoEllipsisVertical /></td>
              {selectedItem && selectedItem.id === user.id && showModal && (<div className="bg-white absolute z-100 border rounded-lg right-16 top-[45px] shadow-lg">
                      {/* <p onClick={() => { router.push(`/overviewTable/${selectedItem.id}`) }} className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p> */}
                      {/* <p onClick={() => openViewModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p>
                      <p onClick={() => openModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Edit</p> */}
                      <p onClick={() => openDeleteModal()}  className=" hover:bg-green-200 hover:text-green-600 px-9 py-2 flex items-center gap-x-2"><RiDeleteBinLine color='#FF0000' /> Delete</p>
                      {/* <p onClick={() => openPublishModal()}  className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Publish</p> */}

                    </div>)}
                  </div>


            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}  onConfirm={() => {
          setUsers(users.filter(user => user !== selectedItem));
          setIsDeleteModalOpen(false);
        }}/>

      <div className="flex justify-center gap-x-4 mt-4">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 border border-green-500 ${currentPage === i + 1 ? 'bg-gray-200' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;