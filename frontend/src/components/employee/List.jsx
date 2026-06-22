import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { columns, EmployeeButtons } from '../../utils/EmployeeHelper'
import DataTable from 'react-data-table-component'
import axios from 'axios'


const List = () => {
  const [employees, setEmployees] = useState([])
  const [empLoading, setEmpLoading] = useState(false)
  const [filteredEmployees, setFilteredEmployees] = useState([])
  const [search, setSearch] = useState("")

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
            const data = response.data.employees.map((emp) => (
              {
                _id: emp._id, 
                sno: sno++,
                dep_name: emp.department.dep_name,
                name: emp.userId.name,
                dob: emp.dob,
                image: emp.userId.profileImage,
                action: (<EmployeeButtons id={emp._id} />),
              }
              
            ));
            //console.log(response.data.employees[0].userId)
            setEmployees(data);
            setFilteredEmployees(data);
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

  const handleChange = (e) => {
    const value = e.target.value
 
    setSearch(value)

  const records = employees.filter((emp) =>
    emp.name?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredEmployees(records)
};



  return (
    <div className='md:p-6 border  border-slate-200 mt-4
      mx-6 items-center justify-between rounded-2xl p-6 shadow-md'>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Employee</h2>
      <p className='text-gray-500 mt-1'>Manage all Employee here</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>

        <input
          type="text"
          onChange={handleChange}
          placeholder="Search By Dep Name"
          className="
                w-full
                md:w-96
                px-4
                py-3
                border
                border-slate-200
                rounded-xl
                focus:ring-2
                focus:ring-indigo-500
                outline-none
              "
          
        />

        <Link
          to="/admin-dashboard/add-employee"
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow transition duration-300 text-center">
          + Add New Employee
        </Link>
      </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <DataTable
        columns={columns} 
        data={filteredEmployees}
        pagination
        responsive
        highlightOnHover
        striped
        progressPending={empLoading}
        customStyles={{
          headRow: {
            style: {
              backgroundColor: "#EEEF2FF",
              fontWeight: "bold",
              fontSize: "15px",
              minHeight: "60px",
            },
          },
          rows: {
            style: {
              minHeight: "65px",
            },
          },
        }}
      />
    </div>
  </div>
  )
}

export default List
