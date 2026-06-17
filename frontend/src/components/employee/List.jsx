import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { columns } from '../../utils/EmployeeHelper'
import DataTable from 'react-data-table-component'
import axios from 'axios'


const List = () => {
  const [employees, setEmployees] = useState([])
  const [empLoadinng, setEmpLoading] = useState(false)

 useEffect(() => {
    const fetchEmployees = async () => {
      setEmpLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/employee', 
          {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.data.success) {
          let sno = 1;
          console.log(response.data)
            const data = response.data.employees.map((emp) => (
              {
                _id: emp._id, 
                sno: sno++,
                dep_name: emp.department.dep_name,
                name: emp.userId.name,
                dob: emp.dob,
                image: emp.userId.profileImage,
                //action: (<DepartmentButtons id={emp._id} onDepartmentDelete={onDepartmentDelete}/>),
              }
              
            ));
            console.log(response.data.employees[0].userId)
            setEmployees(data);
        }
      }catch(error) {
         if(error.response && !error.response.data.success) {
            alert(error.response.data.response)
      }
    } finally {
      setEmpLoading(false)
    }
  };
 fetchEmployees()

  }, []);

  return (
    <div className='p-6' >
      <div className="text-center">
        <h3 className="text-2xl font-bold">Manage Employee</h3>
      </div>

      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search By Dep Name"
          className="px-4 py-0.5 bg-indigo-100 border-indigo-100 shadow-2xl rounded"
        />

        <Link
          to="/admin-dashboard/add-employee"
          className="px-4 py-1 bg-indigo-700 text-white rounded">
          Add New Employee
        </Link>
      </div>

      <div className="mt-5">
      <DataTable
        columns={columns} 
        data={employees}
        pagination
        progressPending={empLoadinng}
      />
      </div>
    </div>
  )
}

export default List
