import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", 
        { email, password } 
      );
      if (response.data.success) {
        login(response.data.user)
        localStorage.setItem("token", response.data.token);
        if(response.data.user.role === "admin") {
            navigate('/admin-dashboard')
        } else {
          navigate("/employee-dashboard")
        }
      }
    } catch(error) {
      if(error.response && !error.response.data.success) {
        setError(error.response.data.error)
    } else {
      setError("Server Error")
    }
  };
  }

  return (
    <div className="shadow-x1 flex flex-col items-center h-screen justify-center bg-white from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      
      <h2 className="font-sevillana text-3xl text-cyan-600 font-bold">Management System</h2>
      <div className="shadow-2xl p-6 w-80 rounded-2xl bg-cyan-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input 
          type="email" 
          className="w-full px-3 py-2 shadow-3xl rounded-2xl border-0 border-indigo-600 bg-indigo-100"
          placeholder="Enter Email" 
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input 
          type="password" 
          className="w-full px-3 py-2 border-0 border-indigo-300 bg-indigo-100 rounded-2xl"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-cyan-600">
            Forgot password?
          </a>
        </div>
        <div className="mb-4">
          <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded-2xl"
          >Login
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}


export default Login
