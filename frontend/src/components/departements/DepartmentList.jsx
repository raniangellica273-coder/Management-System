import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component'
import { columns, DepartmentButtons } from "../../utils/DepartmentHelper";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState([])
  
 const onDepartmentDelete = (id) => {
  setDepartments(prev => {
    const updated = prev.filter(dep => dep._id !== id);
    setFilteredDepartments(updated);
    return updated;
  });
};
  

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true)
      try {
        const response = await axios.get('http://localhost:5000/api/department', 
          {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.data.success) {
          let sno = 1;
          console.log(response.data)
            const data = response.data.department.map((dep) => (
              {
                _id: dep._id, 
                sno: sno++,
                dep_name: dep.dep_name,
                action: (<DepartmentButtons id={dep._id} onDepartmentDelete={onDepartmentDelete}/>),
              }
            ));
            setDepartments(data);
            setFilteredDepartments(data);
        }
      }catch(error) {
         if(error.response && !error.response.data.success) {
            alert(error.response.data.response)
      }
    } finally {
      setDepLoading(false)
    }
  };
 fetchDepartments();

  }, []);

  const filterDepartments = (e) => {
    const records = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase()))
      setFilteredDepartments(records)
  }

  return (
  <>
    {depLoading ? (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="text-lg font-semibold text-slate-500">
          Loading...
        </div>
      </div>
    ) : (
      <div className="md:p-8 mt-4
      mx-6
      items-center
      justify-between rounded-2xl
      bg-white
      border
      border-slate-200
      p-6
      shadow-sm min-h-screen">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            Departments
          </h1>

          <p className="text-slate-500 mt-2">
            Manage and organize company departments.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <p className="text-slate-500">Total Departments</p>
            <h2 className="text-3xl font-bold text-indigo-600">
              {filteredDepartments.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5">
            <p className="text-slate-500">Active Departments</p>
            <h2 className="text-3xl font-bold text-green-600">
              {filteredDepartments.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5">
            <p className="text-slate-500">Status</p>
            <h3 className="text-2xl font-bold text-cyan-600">
              Active
            </h3>
          </div>
        </div>

        {/* Search & Button */}
        <div className="bg-white rounded-3xl shadow-sm p-6">

          <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
            mb-6
          ">
            <input
              type="text"
              placeholder="Search department..."
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
              onChange={filterDepartments}
            />

            <Link
              to="/admin-dashboard/add-department"
              className="
                w-full
                md:w-auto
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                shadow-md
                transition
              "
            >
              + Add Department
            </Link>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl">
            <DataTable
              columns={columns}
              data={filteredDepartments}
              pagination
              highlightOnHover
              responsive
            />
          </div>

        </div>
      </div>
    )}
  </>
);
};

export default DepartmentList;
