import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router';

const AddEmployeeForm = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });
  const { id } = useParams();


  const navigator = useNavigate();


//update the form
useEffect(()=>{
  if(id){
    getEmployeeById(id).then((response)=>{
       setfirstname(response.data.firstname)
       setlastname(response.data.lastname)
       setEmail(response.data.email)
       
    })
  }
},[id])

  const validateForm = () => {
    let valid = true;
    const errorCopy = { ...errors };

    if (firstname.trim()) {
      errorCopy.firstname = '';
    } else {
      errorCopy.firstname = 'First name is required!';
      valid = false;
    }

    if (lastname.trim()) {
      errorCopy.lastname = '';
    } else {
      errorCopy.lastname = 'Last name is required!';
      valid = false;
    }

    if (email.trim()) {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorCopy.email = '';
      } else {
        errorCopy.email = 'Please enter a valid email address';
        valid = false;
      }
    } else {
      errorCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorCopy);
    return valid;
  };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstname, lastname, email };
      console.log('Employee Data:', employee);
      
      if(id){
        updateEmployee(id,employee).then((response)=>{
          console.log(response.data)
          alert('user updated successfully')
          navigator('/employees')
        }).catch(error=>console.error(error))
      }else{
        createEmployee(employee).then((response) => {
          console.log(response.data);
          alert(`Employee ${id ? 'updated' : 'added'}: ${JSON.stringify(employee)}`);
          navigator('/employees');
        }).catch(error => {
          console.error('Error saving employee:', error);
          alert(`Error ${id ? 'updating' : 'saving'} employee. Please try again.`);
        });
      }
      }
  };

  const getPageTitle = () => {
    return id ? 'Update Employee' : 'Add New Employee';
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-gray-300 rounded-md shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-center mt-4">{getPageTitle()}</h2>
      <form className="space-y-4" onSubmit={saveOrUpdateEmployee}>
        <div>
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            onBlur={validateForm}
            placeholder="Enter First Name"
            className={`w-full px-3 py-2 border ${errors.firstname ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-gray-300 rounded focus:outline-none focus:border-gray-500`}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            onBlur={validateForm}
            placeholder="Enter Last Name"
            className={`w-full px-3 py-2 border ${errors.lastname ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-gray-300 rounded focus:outline-none focus:border-gray-500`}
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateForm}
            placeholder="Enter Email"
            className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-gray-300 rounded focus:outline-none focus:border-gray-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {id ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;