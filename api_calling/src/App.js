import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

const EmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    salary: '',
    age: '',
  });

  
  useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        setEmployees(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  
  const handleCreateEmployee = () => {
    axios.put('https://dummy.restapiexample.com/api/v1/create', newEmployee)
      .then(response => {
        alert('Employee created successfully');
        
      })
      .catch(error => {
        console.error('There was an error creating the employee!', error);
      });
  };

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.employee_name} - {employee.employee_salary} - {employee.employee_age}
          </li>
        ))}
      </ul>

      <h2>Create New Employee</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateEmployee(); }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          />
        </div>
        <div>
          <label>Salary: </label>
          <input
            type="text"
            value={newEmployee.salary}
            onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="text"
            value={newEmployee.age}
            onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
          />
        </div>
        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
};

export default EmployeeComponent;
