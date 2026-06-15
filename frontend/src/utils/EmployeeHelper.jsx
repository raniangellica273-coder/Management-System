import axios from "axios";

export const fetchDepartment = async () => {
    let departments
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
  return departments
};
