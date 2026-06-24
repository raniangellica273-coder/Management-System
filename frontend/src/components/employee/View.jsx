import React, { useState }from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const View = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState(null)

    useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/employee/${id}`, 
          {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log(response.data)
        if (response.data.success) {
          setEmployee(response.data.employee)
        }
      }catch(error) {
         if(error.response && !error.response.data.success) {
            alert(error.response.data.response)
      }
    }
  };
 fetchEmployee();

  }, []);

return (
  <>
    {employee ? (
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="h-32 bg-blue-800"></div>

        {/* Profile Section */}
        <div className="flex flex-col items-center -mt-16">
          <img
            src={`http://localhost:5000/uploads/${employee.userId.profileImage}`}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
          />

          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            {employee.userId.name}
          </h2>

          <p className="text-gray-500">
            {employee.designation}
          </p>
        </div>

        {/* Details */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Employee ID</h3>
            <p className="text-lg font-semibold">
              {employee.employeeId}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Date of Birth</h3>
            <p className="text-lg font-semibold">
              {new Date(employee.dob).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Gender</h3>
            <p className="text-lg font-semibold">
              {employee.gender}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Department</h3>
            <p className="text-lg font-semibold">
              {employee.department.dep_name}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Marital Status</h3>
            <p className="text-lg font-semibold capitalize">
              {employee.maritalStatus}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-sm text-gray-500">Salary</h3>
            <p className="text-lg font-semibold">
              Rp {employee.salary?.toLocaleString("id-ID")}
            </p>
          </div>

        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )}
  </>
)
}

export default View
