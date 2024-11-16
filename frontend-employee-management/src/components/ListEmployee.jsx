// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee  } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []); // Empty dependency array

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
        alert('Failed to fetch employees');
      });
  }

  function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function handleDeleteEmployee(id, firstname, lastname) {
    if (window.confirm(`Are you sure you want to delete employee ${firstname} ${lastname}?`)) {
      deleteEmployee(id)
        .then((response) => {
          console.log(response.data)
          alert('Employee deleted successfully');
          // Refresh the employee list
          getAllEmployees();
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete employee');
        });
    }
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-600">
        List of All Employees
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="py-3 px-4 border-b-2 border-gray-200">ID</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Firstname</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Lastname</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Email</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{employee.id}</td>
                <td className="py-2 px-4 border-b">{employee.firstname}</td>
                <td className="py-2 px-4 border-b">{employee.lastname}</td>
                <td className="py-2 px-4 border-b">{employee.email}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  <button
                    className="text-red-600 hover:underline mr-2"
                    onClick={() => handleDeleteEmployee(
                      employee.id, 
                      employee.firstname, 
                      employee.lastname
                    )}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployee;