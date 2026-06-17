import axios from "axios";

export const columns = [
    {
        name: "S No",
        selector: (row) => row.sno
    },

    {
        name: "Name",
        selector: (row) => row.name
    },

    {
      name: "Profile",
        cell: (row) => {
          console.log(row.profileImage)
          return (
          <img
            src={`http://localhost:5000/uploads/${row.profileImage}`}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        )}
    },

    {
        name: "Department",
        selector: (row) => row.dep_name
    },

    {
        name: "DOB",
        selector: (row) => row.dob
    },

    {
        name: "Action",
        selector: (row) => row.action
    },
]

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
