import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno,
        center: true
    },

    {
        name: "Name",
        selector: (row) => row.name,
        center: true
    },

    {
      name: "Profile",
        cell: (row) => {
          return (
          <img
            src={`http://localhost:5000/uploads/${row.image}`}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        )},
        center: true
    },

    {
        name: "Department",
        selector: (row) => row.dep_name,
        center: true
    },

    {
        name: "DOB",
        selector: (row) => row.dob,
        center: true
    },

    {
        name: "Action",
        cell: (row) => row.action,
        width: "320px",
        center: true
    },
]

export const EmployeeButtons = ({ id }) => {
    const navigate = useNavigate();

    return (
      <div className="flex gap-2">
        <button
        className="px-3 py-1 bg-indigo-700 text-white rounded text-sm"
        onClick={() => navigate(`/admin-dashboard/employee/${id}`)}>
          View
        </button>

        <button
        className="px-3 py-1 bg-green-600 text-white rounded text-sm"
        onClick={() => navigate(`/admin-dashboard/employee/edit/${id}`)}>
        Edit
        </button>

        <button
        className="px-3 py-1 bg-orange-600 text-white rounded text-sm"
        >
        Salary
        </button>

        <button
        className="px-3 py-1 bg-red-600 text-white rounded text-sm">
        Leave
        </button>

      </div>
    )
}
export const fetchDepartment = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/department',
          {
          headers: {
            "Authorization" : `Bearer ${localStorage.getItem('token')}`,
          },
        });
        console.log("response.data=", response.data)
        if(response.data.success) {
          return response.data.department;
        }
        return[]
      }catch(error) {
         if(error.response && !error.response.data.success) {
            alert(error.response.data.response)
      }
    } 

    
};
